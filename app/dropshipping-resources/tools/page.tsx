
import Link from 'next/link'
import BasePage from '@/app/components/BasePage'

export const metadata = {
    "title": "Dropshipping Tools from Importlio",
    "description": "Shopify dropshipping tools to help your ecommerce business grow.",
    "keywords": [
        "Shopify dropshipping",
        "Shopify dropshipping tools",
        "Shopify dropshipping resources",
        "Shopify dropshipping apps",
        "Shopify dropshipping automation",
        "Shopify dropshipping automation tools",
        "Shopify dropshipping automation apps",
        "Shopify dropshipping product importer",
        "Shopify dropshipping product importer tool",
        "Shopify dropshipping product importer app",
        "Shopify dropshipping product importer software",
        "Shopify dropshipping product importer service",
        "Shopify dropshipping product importer plugin",
    ],
    "openGraph": {
        "type": "website",
        "url": "https://importlio.com/dropshipping-resources/tools/",
        "title": "Dropshipping Tools from Importlio",
        "description": "Shopify dropshipping tools to help your ecommerce business grow.",
        "siteName": "Importlio",
        "locale": "en_US",
    },
}

export default function Page() {
  return (
    <BasePage
        title="Dropshipping Tools from Importlio"
        subtitle="Shopify dropshipping tools to help your ecommerce business grow."
        headline="Dropshipping Tools"
        shadowText="Dropshipping Tools"
        size="md"
        >
           
            <Link href="/dropshipping-resources/getting-started">
                Getting Started
            </Link>
            <Link href="/email-lists">
                Email Lists
            </Link>
            <Link href="/dropshipping-resources/tools">
                Tools
            </Link>
    </BasePage>
  )
}
