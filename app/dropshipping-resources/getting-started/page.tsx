import Link from "next/link";
import BasePage from "@/app/components/BasePage";

export default function Page() {
  return (
    <BasePage
      title="Dropshipping Resources from Importlio"
      subtitle="Shopify dropshipping tools, information, and resources to help your ecommerce business grow."
      headline="Dropshipping Resources"
      shadowText="Dropshipping Resources"
      size="md"
    >
      <p>
        Importlio has all the tools, information, and resources you need to
        start and grow your ecommerce business. From dropshipping tutorials to
        email lists, we have everything you need to start your own ecommerce
        business.
      </p>

      <h2>
        <Link href="/dropshipping-tutorials">Dropshipping Tutorials</Link>
      </h2>
      <p>
        Our dropshipping tutorials cover everything you need to know to start
        and grow your ecommerce business. From how to find products to sell to
        how to market your store, we have everything you need to start your own
        ecommerce business.
      </p>

      <h2>
        <Link href="/email-lists">Email Lists</Link>
      </h2>
      <p>
        Our email lists are a great way to get started with email marketing. We
        have email lists for every niche and industry, so you can find the
        perfect list for your business.
      </p>

      <h2>Shopify Apps</h2>
      <p>
        Our Shopify apps are a great way to grow your business. We have apps for
        every niche and industry, so you can find the perfect app for your
        business.
      </p>

      <h2>Product Research</h2>
      <p>
        Our product research tools are a great way to find the perfect product
        for your business. We have tools for every niche and industry, so you
        can find the perfect tool for your business.
      </p>
    </BasePage>
  );
}
