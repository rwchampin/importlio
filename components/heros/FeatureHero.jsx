"use client"
import gsap, {ScrollTrigger} from 'gsap/all'
import { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger)
export default function FeatureHero() {
    const parent = useRef(null)
    useEffect(() => {

        const fg = gsap.utils.selector(".feature-grid")
        const features = fg(".feature")

         

      
       gsap.from(".feature", {
        opacity:0,
        y: 50,
        stagger: .4,
        ease: "expo.out",
         scrollTrigger:{
            trigger:parent.current,
            scrub: true,
            // markers: true,
            start: "top center",
            end: "bottom center"
        }
    
      })
    }, [])
    const features = [
        {
            title: "Unleash the Power of Bulk Importing",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Say goodbye to the tedious task of manually adding products one by
            one. Our powerful tool enables you to effortlessly import a large
            number of products into your Amazon store in just a few clicks. With
            our Amazon Product Bulk Importer, you can save valuable time and focus
            on what truly matters – growing your business.`
        }, {
            title: "Streamline Your Product Management",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Efficiency is the name of the game, and our tool is designed to
            streamline your product management process. Seamlessly organize and
            update your product listings, prices, descriptions, and more, all
            from a centralized dashboard. Experience hassle-free inventory
            management and keep your Amazon store up-to-date effortlessly.`
        }, {
            title: "Keyword Optimization for Enhanced Visibility",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: ` We understand the importance of standing out in the highly
            competitive Amazon marketplace. Our Amazon Product Bulk Importer
            allows you to optimize your product listings with strategic
            keywords, ensuring maximum visibility for your products. Boost your
            rankings, attract more customers, and watch your sales soar to new
            heights.`
        }, {
            title: "Effortless Integration and User-Friendly Interface",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `No complex setup or technical expertise required! Our Amazon Product
            Bulk Importer seamlessly integrates with your existing Amazon seller
            account, making it a breeze to get started. The intuitive user
            interface ensures a smooth and hassle-free experience, even for
            beginners. Get up and running in no time, and let our tool simplify
            your Amazon selling journey.`
        }, {
            title: "Stay Ahead with Real-Time Update",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: ` Keep your finger on the pulse of your Amazon business with real-time
            updates. Our Amazon Product Bulk Importer provides you with the
            latest insights and analytics to monitor the performance of your
            products. Stay informed about sales trends, inventory levels, and
            more, empowering you to make data-driven decisions for sustainable
            growth.`
        }, {
            title: "Experience the Power of Our Amazon Product Bulk Importer",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Unleash the true potential of your Amazon business with our
            revolutionary Amazon Product Bulk Importer. Say goodbye to manual
            data entry and embrace the efficiency of bulk importing. Stay ahead
            of the competition, optimize your product listings, and watch your
            sales skyrocket.`
        },
    ]
    return (
        <section ref={parent} className="bg-white dark:bg-gray-200 rounded-lg relative z-10">
            <div className="px-6 py-10 mx-auto prose-xl">
                <h2 className="feature font-montserrat font-black text-heading-3">Shopify Product Importer App Features</h2>

                <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                    <div className="feature-grid grid w-full grid-cols-1 gap-8 lg:w-full xl:gap-16 md:grid-cols-2 lg:grid-cols-3">
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