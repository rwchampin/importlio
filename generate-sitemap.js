const fs = require('fs');
const path = require('path');
const getConfig = require('next/config').default;
const sitemapFilePath = process.argv[2];
const topLevelFolders = process.argv[3].split(',');
const { serverRuntimeConfig } = getConfig();


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

generateSitemap();
