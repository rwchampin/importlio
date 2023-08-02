import { MetadataRoute } from 'next';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

interface Post {
  slug: string;
  updated_at: string;
}
const createJson=(post: Post) => {
  return {
    url: `https://importlio.com/posts/${post.slug}`,
    lastModified: new Date(post.updated_at), // Replace 'updated_at' with the actual field name containing the last modified date for the post
  }
}

async function getAllPostSlugs() {
  try {
    const response = await axios.get('https://api.importlio.com/api/posts/');
    const posts = response.data;
    return posts.map((post:Post) => createJson(post));
  } catch (error: any) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
}

function getFoldersRecursive(filePath:string) {
  const folders:string[] = [];

  function shouldIgnoreFolder(folderName:string) {
    const ignoredPrefixes = ['[', '(', '_', '-'];
    return ignoredPrefixes.some((prefix) => folderName.startsWith(prefix));
  }

async function traverse(currentPath:string) {
    const files = fs.readdirSync(currentPath, { withFileTypes: true });

    files.forEach((file) => {
      if (file.isDirectory()) {
        const folderName = file.name;
        if (!shouldIgnoreFolder(folderName)) {
          folders.push(folderName);
          traverse(path.join(currentPath, folderName));
        }
      }
    });
  }

  traverse(filePath);
  return folders;
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls = [
    {
      url: 'https://www.importlio.com',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/features',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/faq',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/pricing',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/privacy-policy',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/terms-of-service',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/ecommerce-tutorials',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/password-reset',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/auth/login',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/auth/register/',
      lastModified: new Date(),
    },
    {
      url: 'https://importlio.com/password-reset',
      lastModified: new Date(),
    },
    // Add the post slugs here
    ...(await getAllPostSlugs()),
    ...(await getFoldersRecursive('./'))
  ];

  return staticUrls
}
