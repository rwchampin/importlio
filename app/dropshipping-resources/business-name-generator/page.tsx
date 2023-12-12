import BasePage from "@/app/components/BasePage";

import NameGenerator from "@/app/components/NameGenerator";

export const metadata = {
  title: "Business Name Generator by Importlio",
  description: "Generate a business name for your dropshipping store.",
  keywords: [
    "Business Name Generator",
    "Business Name Generator tool",
    "Business Name Generator app",
    "Business Name Generator software",
    "Business Name Generator service",
    "Business Name Generator plugin",
  ],
  openGraph: {
    type: "website",
    url: "https://importlio.com/dropshipping-resources/business-name-generator/",
    title: "Business Name Generator",
    description: "Generate a business name for your dropshipping store.",
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
