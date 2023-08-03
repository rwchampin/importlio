import { globby } from 'globby';

const excludedPaths = [
  'activation',
  'error',
  'page',
  'auth',
  'dashboard',
  'components',
  'layout',
  'api',
  '[',
  '(',
  '_',
];

const transformFilePaths = (filePaths) => {
  const transformedPaths = filePaths.map((filePath) => {
    // Remove 'app/' from the beginning
    let modifiedPath = filePath.replace('app/', '');

    // Remove file extension
    modifiedPath = modifiedPath.replace(/\.[^/.]+$/, '');

    // Remove 'page' if it's at the end
    modifiedPath = modifiedPath.replace(/\/page$/, '');

    // Replace slashes with hyphens
    modifiedPath = modifiedPath.replace(/\//g, '-');

    return modifiedPath;
  });

  const filteredPaths = transformedPaths.filter((path) => {
    // Check if the path contains any excluded string
    return !excludedPaths.some((excluded) => path.includes(excluded));
  });

  const currentDate = new Date().toISOString();

  const urlObjects = filteredPaths.map((url) => ({
    url: `https://importlio.com/${url}`,
    lastModified: currentDate,
  }));

  return urlObjects;
};

const getPosts = async () => {
  try {
    const posts = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const postsData = await posts.json();

    return postsData.results;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
};

const generateURLs = async () => {
  const pages = await globby([
      'app/**/*.(jsx|tsx)',
  ]);

  const currentDate = new Date().toISOString();

  const posts = await getPosts(); // Await the result of getPosts()

  const urlList = [
      ...transformFilePaths(pages),
      ...posts.map((post) => ({
          url: `https://importlio.com/ecommerce-tutorials/${post.slug}`,
          lastModified: post.published || currentDate,
      })),
  ];

  return urlList;
};

export default async function sitemap(req, res) {
  const urls = await generateURLs();

 return urls
} 
