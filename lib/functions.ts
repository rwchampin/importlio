export function debounce(func: any, delay = 200) {
  let timerId: any;

  return function (this: any, ...args: any) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  };
}

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


export const matchURL = (url: string, pathname: string) => {
  return pathname === url
};




export const getInitialsFromName = (name: string) => {
  const nameParts = name.split(" ");

  if (nameParts.length >= 2) {
    const firstNameInitial = nameParts[0][0].toUpperCase();
    const lastNameInitial = nameParts[nameParts.length - 1][0].toUpperCase();

    return `${firstNameInitial}${lastNameInitial}`;
  } else if (nameParts.length === 1) {
    return nameParts[0][0].toUpperCase();
  } else {
    return "";
  }
}

export const isValidURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}


// js function that un slugifies a string
export const unSlugify = (str: string) => {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}


export function downloadCSV(emails: any) {
  // Convert the array of emails to a CSV string
  const csvContent = "data:text/csv;charset=utf-8," + emails.join("\n");

  // Create a data URI for the CSV content
  const encodedUri = encodeURI(csvContent);

  // Create an anchor element for downloading
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "emails.csv");

  // Simulate a click on the anchor element to trigger the download
  link.click();
}


export function generateImageStructuredMarkup({ }: any) {
  return {
    "@type": "ImageObject",
    "@id": "https://www.importlio.com/#logo",
    "inLanguage": "en-US",
    "url": "https://www.importlio.com/importlio-logo.png",
    "caption": "ecommerce dropshipping app logo"
  }
}


export function generatePageStructuredMarkup({
  description,
}: any) {
  const structuredMarkup = {
    "@context": "https://www.schema.org",
    "@graph": [{
      "@type": "Organization",
      "@id": "https://www.importlio.com/#organization",
      "name": "Importlio",
      "url": "https://www.importlio.com",
      "email": "mailto:support@importlio.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Jersey",
        "addressRegion": "NJ",
        "postalCode": "07664",
        "streetAddress": "351 westminster place, lodi NJ"
      },
      "foundingDate": "2021-09-01",
      "foundingLocation": "New Jersey",
      "founders": [
        "Ryan Champin"
      ],
      "sameAs": ["https://www.facebook.com/importlio",
        "https://twitter.com/importlio",
        "https://www.instagram.com/importlio/",
        "https://www.youtube.com/@Importlio",

      ],
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.importlio.com/#logo",
        "inLanguage": "en-US",
        "url": "https://www.importlio.com/importlio-logo.png",
        "caption": "ecommerce dropshipping app logo"
      },
      "image": {
        "@id": "https://www.importlio.com/#logo"
      }
    }, {
      "@type": "WebSite",
      "@id": "https://www.importlio.com/#website",
      "url": "https://www.importlio.com",
      "alternateName": "Importlio Shopify App",
      "name": "Importlio",
      "description": description,
      "publisher": {
        "@id": "https://www.importlio.com/#organization"
      },
      "inLanguage": "en-US"
    }, {
      "@type": "ImageObject",
      "@id": "https://www.importlio.com/#primaryimage",
      "inLanguage": "en-US",
      "url": "https://www.importlio.com/importlio-logo.png"
    }, {
      "@type": "WebPage",
      "@id": "https://www.importlio.com/#webpage",
      "url": "https://www.importlio.com",
      "name": "Importlio",
      "isPartOf": {
        "@id": "https://www.importlio.com/#website"
      },
      "about": {
        "@id": "https://www.importlio.com/#organization"
      },
      "primaryImageOfPage": {
        "@id": "https://www.importlio.com/#primaryimage"
      },
      "dateCreated": "2021-04-21T13:10:00+04:00",
      "dateModified": "2023-09-03T13:26:19+02:00",
      "datePublished": "2021-04-21T13:20:00+02:00",
      "lastReviewed": "2023-10-04T13:36:19+02:00",
      "reviewedBy": "https://www.importlio.com/#organization",
      "description": description,
      "inLanguage": "en-US",
      "potentialAction": [{
        "@type": "ReadAction",
        "target": ["https://www.importlio.com"]
      }]
    }]
  };

  return structuredMarkup;
}


export function generateBlogStructuredMarkup(post: any) {

  return {
    "@context": "https://www.schema.org",
    "@type": "BlogPosting",
    "dateModified": post.updated,
    "datePublished": post.published,
    "dateCreated": post.published,
    "headline": post.title,
    "image":post.mobile_image,
    "wordCount": post.word_count,
    "inLanguage": "en-US",
    "author":  "Ryan Champin",
    "mainEntityOfPage": "https://www.importlio.com",
    "publisher": {
      "@type": "Organization",
      "name": "importlio",
      "logo": {
        "@type": "ImageObject",
        "@id": "/#organization-logo",
        "url": "https://www.importlio.com/media/1593088941-importlio-logo.png"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": `https://www.importlio.com/ecommerce-tutorials/${post.slug}#breadCrumbs`,
      "itemListElement": [{
        "@type": "ListItem",
        "position": 0,
        "item": {
          "@type": "WebPage",
          "@id": "https://www.importlio.com",
          "url": "https://www.importlio.com",
          "name": "Home"
        }
      }, {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "WebPage",
          "@id": "https://www.importlio.com/ecommerce-tutorials",
          "url": "https://www.importlio.com/ecommerce-tutorials",
          "name": "Ecommerce Tutorials"
        }
      }, {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "BlogPosting",
          "@id": `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
          "url": `https://www.importlio.com/ecommerce-tutorials/${post.slug}`,
          "name": post.title
        }
      }]
    }
  }
}

export function generatePassword() {
  const length = 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";

  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }

  return retVal;
}