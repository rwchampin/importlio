import Section from '@/app/components/Section';
export default function TopFeatures() {
    



 const data = [
    {
      "title": "Harness Amazon's Search Results",
      "subtitle": "Your Gateway to Trending Products",
      "description": "Discover the ultimate e-commerce advantage through our \"Import By Amazon Results Page\" feature. Seamlessly integrate Amazon's dynamic search results into your store, effortlessly importing top-trending, popular, and niche products. Stay ahead of the curve by curating an extensive range of offerings that resonate with your audience and boost sales.",
      "cta": "Uncover Success with Search"
    },
    {
      "title": "Explore Amazon Categories",
      "subtitle": "Diversify Your Catalog with Ease",
      "description": "Elevate your product lineup with the revolutionary \"Import By Amazon Category\" tool. Effortlessly import products from specific Amazon categories to diversify your inventory. Whether you're targeting a niche or aiming for comprehensive variety, this tool empowers you to seamlessly integrate products that align perfectly with your brand.",
      "cta": "Expand Your Horizon"
    },
    {
      "title": "Target with Amazon Keywords",
      "subtitle": "Precision-Driven Product Selection",
      "description": "Experience the future of e-commerce with our \"Import By Amazon Keyword\" functionality. Curate a product lineup tailored to your audience's exact needs by sourcing products based on Amazon keywords. Craft a store that caters precisely to preferences, trends, and emerging markets, ensuring your customers find exactly what they're searching for.",
      "cta": "Hit the Bullseye"
    }
  ]
    
    return (
<Section>
        <div className="flex flex-col gap-5 md:flex-row md:items-center justify-center shrink-0">
        {data.map((item, idx) => (
            <div data-enter key={idx} className="flex flex-col flex-1 h-auto gap-1 rounded-lg shrink-0 bg-gray-3 p-3 border-2 border-gray-7 drop-shadow-xl">
                <h2 className="heading-4 uppercase smallcaps font-bold">{item.title}</h2>
                <h3 className="heading-6 text-gray-11">{item.subtitle}</h3>
                <p className="text-xxs">{item.description}</p>
               
            </div>

            ))}
        </div>
        </Section>
    )
 }

