const titleVariations = [
    "Import Amazon Products to Shopify with Ease",
    "Effortlessly Import Amazon Dropshipping Products to Shopify",
    "Your One-Stop Solution: Amazon Dropshipping to Shopify",
    "Boost Your Shopify Store with Amazon Dropshipping",
    "Enhance Your Shopify Store with Amazon Products",
    "Source and Sell Profitable Products from Amazon to Shopify",
    "Simplify Amazon Dropshipping to Shopify",
    "Grow Your Shopify Store with Amazon Dropshipping",
    "Automate Product Import from Amazon to Shopify",
    "Expand Your Product Catalog with Amazon Dropshipping",
    "Import Amazon Affiliate Products to Shopify with Ease",
    "Effortlessly Import Amazon Associate Products to Shopify",
    "Your One-Stop Solution: Amazon Affiliate to Shopify",
    "Boost Your Shopify Store with Amazon Affiliate Products",
    "Enhance Your Shopify Store with Amazon Associate Products",
    "Source and Sell Profitable Affiliate Products from Amazon to Shopify",
    "Simplify Amazon Affiliate Product Import to Shopify",
    "Grow Your Shopify Store with Amazon Associate Products",
    "Automate Product Import from Amazon Affiliate to Shopify",
    "Expand Your Product Catalog with Amazon Associate Products",
];

const descriptionVariations = [
    "Bulk import Amazon dropshipping products into your Shopify e-commerce store and increase sales.",
    "Discover and add profitable Amazon dropshipping products to your Shopify store in bulk.",
    "Import a wide range of Amazon dropshipping products to your Shopify e-commerce stores effortlessly.",
    "Save time and effort by sourcing and selling profitable Amazon dropshipping products on Shopify.",
    "Efficiently manage and add Amazon dropshipping products to your Shopify store with our app.",
    "Automate the process of importing Amazon dropshipping products to your Shopify e-commerce store.",
    "Unlock the potential of your Shopify store by importing high-demand Amazon dropshipping products.",
    "Source and sell top-quality Amazon dropshipping products on Shopify with ease.",
    "Take your Shopify store to the next level with our Amazon dropshipping product importer.",
    "Easily add a diverse range of Amazon dropshipping products to your Shopify e-commerce store.",
    "Bulk import Amazon affiliate products into your Shopify e-commerce store and increase sales.",
    "Discover and add profitable Amazon associate products to your Shopify store in bulk.",
    "Import a wide range of Amazon affiliate products to your Shopify e-commerce stores effortlessly.",
    "Save time and effort by sourcing and selling profitable Amazon affiliate products on Shopify.",
    "Efficiently manage and add Amazon associate products to your Shopify store with our app.",
    "Automate the process of importing Amazon affiliate products to your Shopify e-commerce store.",
    "Unlock the potential of your Shopify store by importing high-demand Amazon affiliate products.",
    "Source and sell top-quality Amazon associate products on Shopify with ease.",
    "Take your Shopify store to the next level with our Amazon affiliate product importer.",
    "Easily add a diverse range of Amazon associate products to your Shopify e-commerce store.",
];

const useTheme = (includeTitle = true, includeDescription = true) => {
    let result = {};
  
    if (includeTitle) {
      const randomTitleIndex = Math.floor(Math.random() * titleVariations.length);
      result.title = titleVariations[randomTitleIndex];
    }
  
    if (includeDescription) {
      const randomDescriptionIndex = Math.floor(Math.random() * descriptionVariations.length);
      result.description = descriptionVariations[randomDescriptionIndex];
    }
  
    return result;
  };