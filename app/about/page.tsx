import BasePage from "@/app/components/BasePage"
import  Section  from "@/app/components/Section";
import JsonLd from "../components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn About the First AI powered Amazon Dropshipping Product Importer & Management App for Shopify",
  description:
    "Bulk import Amazon Dropshipping Products into Shopify E-Commerce Stores. Source and Sell Profitable Dropshipping Products from Amazon",
  applicationName: "Importlio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Amazon dropshipping",
    "Product importer",
    "Shopify store integration",
    "Amazon affiliates",
    "Amazon associates",
    "Dropshipping automation",
    "E-commerce management",
    "Product synchronization",
    "CSV import",
    "Amazon URL import",
    "Affiliate marketing",
    "Shopify app",
    "Inventory management",
    "Product catalog",
    "Automated updates",
    "Affiliate commissions",
    "Shopifystore integration",
    "E-commerce growth",
    "Affiliate sales",
    "Streamlined importing",
    "Multi-channel selling",
    "Product syncing",
    "Inventory tracking",
    "Sales optimization",
    "Affiliate partnerships",
    "E-commerce tools",
    "Affiliate income",
    "Order fulfillment",
    "Profit margins",
    "Product sourcing",
  ],
  colorScheme: "dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.importlio.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/og-image.jpg",
  },
};



export default function Page() {

  const jsonld = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  "name": "About Our Ecommerce & Shopify Bulk Amazon Product Importer & Management App",
  "url": "https://www.importlio.com/about",
  "description": "Learn about our cutting-edge Ecommerce Shopify Product Management app and how it can revolutionize your online business.  Import products in bulk from Amazon to Shopify with ease.",
  // "speakable": {
  //   "@type": "SpeakableSpecification",
  //   "cssSelector": [
  //     "#content",
  //     ".speakable"
  //   ]
  // },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://www.importlio.com",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://www.importlio.com/about",
          "name": "About"
        }
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.importlio.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Importlio Inc.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/logo-black.svg",
      "width": 566,
      "height": 583
    }
  },
  "about": {
    "@type": "Organization",
    "name": "Importlio Inc.",
    "description": "We specialize in providing top-notch Ecommerce Product Management solutions to help businesses thrive in the online marketplace.",
    "url": "https://www.importlio.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://importlio-bucket.nyc3.cdn.digitaloceanspaces.com/assets/logo-black.svg",
      "width": 566,
      "height": 583
    }
  }

  }

  const features = [
    {
      step: 1,
      title: "Find an Amazon Produc or Product Category",
      description: "Find an Amazon product or product results page with MULTIPLE PRODUCTS, that you want to import into your Shopify store.",
    },
    {
      step: 2,
      title: "Copy the Amazon URL or set of URLs",
      description: "Copy the Amazon URL or set of URLs that you want to import into your Shopify store.",
    },
    {
      step: 3,
      title: "Paste the Amazon URL(s) into the Importlio",
      description: "Enter the Amazon URL or set of URLs into the Importlio Product Importer App and click the import button.",
    },
    {
      step: 4,
      title: "Sit back and relax",
      description: "Importlio imports your Amazon products into your Shopify store in seconds.",
    },
  ]
  return (
    <BasePage
        title="Learn About Our Bulk Amazon Product Importer & Management App for Shopify"
        subtitle="Bulk import and manage products from Amazon result pages directly into Shopify."
        headline="How to import Amazon Dropshipping Products into Shopify"
        shadowText="Dropshipping Product Importer"
      >

      <Section
        className='p-5'
      >

      <div className="flex gap-5">
        {features.map((feature, idx) => {
          return (
            <div key={idx} className="flex-1 p-10 rounded-xl bg-gray-300 shadow-xl">
              <div className="text-heading-5 font-apercu-bold">Step {feature.step}</div>
              <h4 className="text-heading-4  font-black font-montserrat">{feature.title}</h4>
              <div>{feature.description}</div>
            </div>
          )
        }
        )}
      </div>

        <h2>Importlio imports you can choose from</h2>

        <ul className="list-disc">
          <li>product variants</li>
          <li>product images</li>
          <li>product descriptions</li>
          <li>product titles</li>
          <li>product prices</li>
          <li>product reviews</li>
          <li>product ratings</li>
          <li>product categories</li>
          <li>product ASINs</li>
          <li>product URLs</li>
        </ul>

      <div className="text-heading-4">Why Choose Our Product Importer App?</div>

      <ul className="list-disc">
        <li>
          <h5>Effortless Product Import</h5>
          <p>Seamlessly import your product data from various sources such as CSV files, spreadsheets, or APIs. Our app simplifies the entire import process, eliminating the need for manual data entry.</p>
        </li>
        <li>
          <h5>Bulk Management</h5>
          <p>Easily handle large volumes of products with our bulk management capabilities. Update prices, inventory, descriptions, and other details for multiple products in just a few clicks.</p>
        </li>
        <li>
          <h5>Enhanced SEO Optimization</h5>
          <p>Boost your product visibility and organic rankings on Amazon. Our app provides SEO-friendly features, including keyword analysis, optimized product descriptions, and metadata customization, giving your products an edge in search results.</p>
        </li>
        <li>
          <h5>Intelligent Pricing Strategies</h5>
          <p>Stay competitive in the ever-changing market with our advanced pricing tools. Set dynamic pricing rules based on market trends, competitor analysis, and profit margins to maximize your revenue.</p>
        </li>
        <li>
          <h5>Inventory Tracking</h5>
          <p>Keep track of your product inventory in real-time. Receive notifications when stock levels are low, preventing out-of-stock situations and ensuring a seamless customer experience.</p>
        </li>
        <li>
          <h5>Analytics and Reporting</h5>
          <p>Gain valuable insights into your product performance with comprehensive analytics and reporting features. Monitor sales, conversion rates, customer behavior, and other key metrics to make data-driven decisions.</p>
        </li>
        <li>
          <h5>User-Friendly Interface</h5>
          <p>Our app offers an intuitive and user-friendly interface, making it easy for both beginners and experienced sellers to navigate and utilize its powerful features.</p>
        </li>
      </ul>

      <p>Get Started Today!</p>

      <p>
        Experience the efficiency and success that our Product Importer App can bring to your Amazon business. Start importing, managing, and optimizing your products with ease. Take control of your product listings and propel your sales to new heights.
      </p>

      <p>
        Sign up now and unleash the true potential of your Amazon store with our feature-rich Product Importer App.
      </p>

      </Section>
      <JsonLd json={jsonld} />
    </BasePage>
  );
}
