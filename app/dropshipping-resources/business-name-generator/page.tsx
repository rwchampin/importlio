import BasePage from "@/app/components/BasePage";

import NameGenerator from "@/app/components/NameGenerator";

const title =
  "Business Name Generator: Business Names or Shopify Store Names for free";
const description =
  "Create catchy & free names for your business or Dropshipping store with Importlio's AI powered Business Name Generator. Create unlimited names for free!";
export const metadata = {
  title: title,
  description: description,
  keywords: [
    "Business Name Generator",
    "Business Name Generator tool",
    "Business Name Generator app",
    "Business Name Generator software",
    "Business Name Generator service",
    "Business Name Generator plugin",
    "Business Name Generator by Importlio",
    "Dropshipping Business Name Generator",
    "Dropshipping Business Name Generator tool",
    "Shopify Business Name Generator",
    "Shopify Business Name Generator tool",
    "Shopify Dropshipping Business Name Generator",
    "Free Business Name Generator",
    "Free Business Name Generator tool",
  ],
  openGraph: {
    type: "website",
    url: "https://importlio.com/dropshipping-resources/business-name-generator/",
    title: title,
    description: description,
    siteName: "Importlio",
    locale: "en_US",
  },
};

export default function Page() {
  return (
    <BasePage
      title="Free AI Business Name Generator"
      subtitle="Generate a catchy business name for your Shopify dropshipping store."
      headline="Dropshipping Resources"
      shadowText="Dropsipping Tools"
      size="md"
    >
      <NameGenerator />
    </BasePage>
  );
}
