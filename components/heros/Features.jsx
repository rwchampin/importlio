export default function Features() {
    const features = [
        {
            title: "Unleash the Power of Bulk Importing",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Say goodbye to the tedious task of manually adding products one by
            one. Our powerful tool enables you to effortlessly import a large
            number of products into your Amazon store in just a few clicks. With
            our Amazon Product Bulk Importer, you can save valuable time and focus
            on what truly matters – growing your business.`
        },{
            title: "Streamline Your Product Management",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `Efficiency is the name of the game, and our tool is designed to
            streamline your product management process. Seamlessly organize and
            update your product listings, prices, descriptions, and more, all
            from a centralized dashboard. Experience hassle-free inventory
            management and keep your Amazon store up-to-date effortlessly.`
        },{
            title: "Keyword Optimization for Enhanced Visibility",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: ` We understand the importance of standing out in the highly
            competitive Amazon marketplace. Our Amazon Product Bulk Importer
            allows you to optimize your product listings with strategic
            keywords, ensuring maximum visibility for your products. Boost your
            rankings, attract more customers, and watch your sales soar to new
            heights.`
        },{
            title: "Effortless Integration and User-Friendly Interface",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: `No complex setup or technical expertise required! Our Amazon Product
            Bulk Importer seamlessly integrates with your existing Amazon seller
            account, making it a breeze to get started. The intuitive user
            interface ensures a smooth and hassle-free experience, even for
            beginners. Get up and running in no time, and let our tool simplify
            your Amazon selling journey.`
        },{
            title: "Stay Ahead with Real-Time Update",
            icon: "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
            description: ` Keep your finger on the pulse of your Amazon business with real-time
            updates. Our Amazon Product Bulk Importer provides you with the
            latest insights and analytics to monitor the performance of your
            products. Stay informed about sales trends, inventory levels, and
            more, empowering you to make data-driven decisions for sustainable
            growth.`
        },{
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
        <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h2>Shopify Product Importer App Features</h2>

        <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                 {features.map((feature) => {
                        return (
                <div className="space-y-3">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </span>

                    <h4>{feature.title}</h4>

                    <p className="text-gray-500 dark:text-gray-300">
                        {feature.description}
                    </p>
                </div>
                        )
                    })}
                
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
            </div>
        </div>
    </div>
</section>
    )
}