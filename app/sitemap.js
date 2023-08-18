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

  urlObjects.push({
    url: 'https://www.importlio.com',
    lastModified: currentDate,
  });
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

const getTags = async () => {
  try {
    const tags = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const tagsData = await tags.json();

    return tagsData.results;


  } catch (error) {
    console.error('Error fetching tags:', error.message);
    return [];
  }
};

const getCategories = async () => {
  try {
    const caegories = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/categories/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const caegoriesData = await caegories.json();

    return caegoriesData.results;


  } catch (error) {
    console.error('Error fetching caegories:', error.message);
    return [];
  }
};
const getPostTypes = async () => {
  try {
    const postTypes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/post-types/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const postTypeData = await postTypes.json();

    return postTypeData.results;


  } catch (error) {
    console.error('Error fetching post types:', error.message);
    return [];
  }
};
const generateURLs = async () => {
  const pages = await globby([
      'app/**/*.(jsx|tsx)',
  ]);

  const currentDate = new Date().toISOString();

  const posts = await getPosts(); // Await the result of getPosts()
  const tags = await getTags(); // Await the result of getTags()
  const categories = await getCategories(); // Await the result of getCategories()
  const postTypes = await getPostTypes(); // Await the result of getPostTypes()
  const urlList = [
      ...transformFilePaths(pages),
      ...postTypes.map((postType) => ({
        url: `https://importlio.com/ecommerce-tutorials/post-types/${postType.slug}`,
        lastModified: currentDate,
    })),
      ...tags.map((tag) => ({
        url: `https://importlio.com/ecommerce-tutorials/tags/${tag.slug}`,
        lastModified: currentDate,
    })),
    ...categories.map((cat) => ({
      url: `https://importlio.com/ecommerce-tutorials/categories/${cat.slug}`,
      lastModified: currentDate,
  })),
      ...posts.map((post) => ({
          url: `https://importlio.com/ecommerce-tutorials/${post.slug}`,
          lastModified: currentDate,
      })),
  ];

  return urlList;
};


export default async function sitemap(req, res) {
  const urls = await generateURLs();

 return urls
} 
