"use client"
import { Hero } from "@/components/common";
import { EmailForm } from "@/components/forms";

export default function Page() {
  return (
    <div className="prose-xl">
      <Hero
        title="About Us"
        subtitle="The ultimate solution for efficiently importing and managing your products on Amazon."
        eyebrow="Learn More"
        shadowText="THE COMPANY"
        shadowSize="text-X"

        cta={<EmailForm />}
      />

      <p>
        The ultimate solution for efficiently importing and managing your products on Amazon. With our powerful toolset and user-friendly interface, you can streamline your product listing process, maximize your sales potential, and save valuable time.
      </p>

      <h2>Why Choose Our Product Importer App?</h2>

      <ol>
        <li>
          <p>Effortless Product Import</p>
          <p>Seamlessly import your product data from various sources such as CSV files, spreadsheets, or APIs. Our app simplifies the entire import process, eliminating the need for manual data entry.</p>
        </li>
        <li>
          <p>Bulk Management</p>
          <p>Easily handle large volumes of products with our bulk management capabilities. Update prices, inventory, descriptions, and other details for multiple products in just a few clicks.</p>
        </li>
        <li>
          <p>Enhanced SEO Optimization</p>
          <p>Boost your product visibility and organic rankings on Amazon. Our app provides SEO-friendly features, including keyword analysis, optimized product descriptions, and metadata customization, giving your products an edge in search results.</p>
        </li>
        <li>
          <p>Intelligent Pricing Strategies</p>
          <p>Stay competitive in the ever-changing market with our advanced pricing tools. Set dynamic pricing rules based on market trends, competitor analysis, and profit margins to maximize your revenue.</p>
        </li>
        <li>
          <p>Inventory Tracking</p>
          <p>Keep track of your product inventory in real-time. Receive notifications when stock levels are low, preventing out-of-stock situations and ensuring a seamless customer experience.</p>
        </li>
        <li>
          <p>Analytics and Reporting</p>
          <p>Gain valuable insights into your product performance with comprehensive analytics and reporting features. Monitor sales, conversion rates, customer behavior, and other key metrics to make data-driven decisions.</p>
        </li>
        <li>
          <p>User-Friendly Interface</p>
          <p>Our app offers an intuitive and user-friendly interface, making it easy for both beginners and experienced sellers to navigate and utilize its powerful features.</p>
        </li>
      </ol>

      <p>Get Started Today!</p>

      <p>
        Experience the efficiency and success that our Product Importer App can bring to your Amazon business. Start importing, managing, and optimizing your products with ease. Take control of your product listings and propel your sales to new heights.
      </p>

      <p>
        Sign up now and unleash the true potential of your Amazon store with our feature-rich Product Importer App.
      </p>

      <hr />

      <p>
        Please note that this text can be used as plain text content for your &quot;About&quot; page. Make sure to incorporate relevant keywords and phrases naturally throughout the text to optimize for search engines.
      </p>
    </div>
  );
}
