const fs=require('fs');
const path = require("path");
const { create } = require("xmlbuilder2");
const axios = require("axios");
const getConfig = require('next/config').default;
// const sitemapFilePath = process.argv[2];
// const topLevelFolders = process.argv[3].split(',');
// const { serverRuntimeConfig } = getConfig();


function generateSitemap() {
  const pageUrls = [];

  for (const folder of topLevelFolders) {
    const folderPath = path.join(__dirname, folder);
    findPageUrls(folderPath, pageUrls);
  }

  const sitemapContent = generateSitemapContent(pageUrls);
  fs.writeFileSync(sitemapFilePath, sitemapContent);
  console.log('Sitemap file created successfully!');
}




// Function to generate the sitemap XML
const generateSitemap = (urls) => {
  const sitemap = create({ version: '1.0' }).ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  });

  urls.forEach((url) => {
    sitemap.ele('url').ele('loc').txt(url).up().up();
  });

  return sitemap.end({ prettyPrint: true });
};

// Function to fetch all posts and get their slugs
const getAllPostSlugs = async () => {
  try {
    const endpoint=`http://localhost:8000/api/posts`;
    console.log(endpoint);
    const response = await axios.get(endpoint);
    const posts = response.data;
    console.log(posts);
    return posts.map((post) => `/posts/${post.slug}`);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
};

// Function to generate and save the sitemap.xml file
const generateSitemapFile = async () => {
  const staticUrls = ['/', '/about', '/ecommerce-tutorials', "/faq", "/features", "/pricing", "/privacy-policy", "/terms-of-service", "/contact"];
  const dynamicUrls = await getAllPostSlugs();
  const allUrls = [...staticUrls, ...dynamicUrls];

  const sitemapXml = generateSitemap(allUrls);

  const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');

  fs.writeFileSync(filePath, sitemapXml);

  console.log('Sitemap generated and saved successfully!');
};

// generateSitemapFile();




function findPageUrls(folderPath, pageUrls) {
  const files = fs.readdirSync(folderPath, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(folderPath, file.name);

    if (file.isDirectory()) {
      findPageUrls(filePath, pageUrls);
    } else if (isSitemapFile(file.name)) {
      const sitemapModule = require(filePath);
      const sitemapData = sitemapModule.default();

      if (Array.isArray(sitemapData)) {
        pageUrls.push(...sitemapData);
      }
    }
  }
}

function isSitemapFile(fileName) {
  return fileName === 'sitemap.js' || fileName === 'sitemap.ts';
}

function generateSitemapContent(pageUrls) {
  const urlElements = pageUrls
    .map(({ url, lastModified }) => {
      const formattedDate = lastModified.toISOString().split('T')[0];
      return `  {\n    url: '${url}',\n    lastModified: new Date('${formattedDate}'),\n  },`;
    })
    .join('\n');

  return `import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
${urlElements}
  ];
}`;
}

// generateSitemap();
