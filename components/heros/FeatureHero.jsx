"use client"
import gsap, {ScrollTrigger} from 'gsap/all'
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger)
export default function FeatureHero() {
    const parent = useRef(null)
    useEffect(() => {

        const fg = gsap.utils.selector(".feature-grid")
        const feat = fg(".feature")

         
        // features.forEach((feat, index) => {
        gsap.from(feat, {
                opacity: 0,
                y: 50,
                // duration: .83,
            stagger: {
                each: .1,
                from: "top",
                amount: feat.length * .14,
            },
            ease: "expo.out",

                scrollTrigger: {
                    trigger: parent.current,
                    scrub: true,
                    // markers: false,
                    start: "top bottom",

                }

            })
        // })
      
      
    }, [])



    const features = [
        {
            title: "Import Amazon Products in Bulk",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Effortlessly expand your product catalog by importing a multitude of Amazon products in one go. Seamlessly integrate and diversify your offerings with just a few clicks.`
        }, {
            title: "Load Products by Amazon Results Page URL",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Streamline the process of populating your inventory by directly importing products using Amazon's search results. Effortlessly curate a selection that resonates with your customers' preferences.`
        }, {
            title: "Fill your Shopify Store by Amazon Product Category",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Elevate your Shopify store's appeal by importing products from specific Amazon categories. Tailor your inventory to cater precisely to your target audience's desires.`
        }, {
            title: "Import in seconds with our Amazon Autocomplete Product Search",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Swiftly add products to your store using our Amazon Autocomplete Product Search feature. Expedite the import process and bring a diverse array of top-selling items to your customers' fingertips.`
        }, {
            title: "CSV Import/Export",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Seamlessly manage your product data with our CSV Import/Export functionality. Effortlessly transfer information between platforms, ensuring your inventory remains accurate and up to date.`
        }, {
            title: "Import Products by Amazon Product ASIN",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Precision meets convenience as you import products using Amazon's unique ASIN identifiers. Ensure accuracy and enhance your offerings by directly incorporating products your customers already love.`
        }, {
            title: "Import Products by Amazon Product Keyword",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Tailor your product selection to customer intent by importing items based on Amazon product keywords. Effortlessly match your inventory with popular search terms, boosting your store's visibility.`
        }
    ]
    return (
        <section ref={parent} className="dark:bg-gray-200 relative z-10">
            <div className="py-10 mx-auto prose-xl">
                <h2 className="feature font-montserrat font-black text-heading-3">Shopify Product Importer App Features</h2>

                <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                    <div className="feature-grid grid w-full grid-cols-1 gap-5 lg:w-full xl:gap-16 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => {
                            return (
                                <div key={index} className="feature space-y-3">
                                    <span className="inline-block p-3 text-gray bg-gray-300 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </span>

                                    <h4 className="font-montserrat text-heading-4">{feature.title}</h4>

                                    <p className="text-left text-black dark:text-black">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })}

                    </div>

                    

                </div>
            </div>
        </section>
    )
}