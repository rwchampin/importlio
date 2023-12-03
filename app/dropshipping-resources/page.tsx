
import Link from 'next/link'
import BasePage from '@/app/components/BasePage'

export default function Page() {
  return (
    <BasePage
        title="Dropshipping Resources from Importlio"
        subtitle="Shopify dropshipping tools, information, and resources to help your ecommerce business grow."
        headline="Dropshipping Resources"
        shadowText="Dropshipping Resources"
        size="md"
        >
            <Link href="/email-lists">
                Email Lists
            </Link>
            <Link href="/dropshipping-resources/getting-started">
                Getting Started
            </Link>
    </BasePage>
  )
}
