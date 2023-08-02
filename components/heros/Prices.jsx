export default function Prices() {
    const plans = [
        {
            name: 'Essential',
            price: 3,
            features: [
                'All limited links',
                'Own analytics platform',
                'Chat support',
                'Optimize hashtags',
                'Mobile app',
                'Unlimited users',
            ],
        },
        {
            name: 'Premium',
            price: 6,
            features: [
                'All limited links',
                'Own analytics platform',
                'Chat support',
                'Optimize hashtags',
                'Mobile app',
                'Unlimited users',
            ],
        },
        {
            name: 'Business',
            price: 9,
            features: [
                'All limited links',
                'Own analytics platform',
                'Chat support',
                'Optimize hashtags',
                'Mobile app',
                'Unlimited users',
            ],
        },
    ]
    return (
        <div className="prose-2xl text-black dark:bg-gray-300 rounded-lg">
    <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center xl:items-center xl:-mx-8 xl:flex">
            
            <div className="prose text-black text-center flex flex-col justify-center items-center xl:items-start xl:mx-8">
                <h1>Importlio Shopify App Subscription Prices</h1>

                 

                <p className="mt-4 font-medium text-gray-500 dark:text-gray-300">
                    You can get All Access by selecting your plan!
                </p>

                 
            </div>
            <div className="flex xl:mx-8">
            {plans.map((plan, idx) => {
                return (
            <div key={idx} className="flex-1 xl:mx-8">
                <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                        <div className="p-6">
                            <h2 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-black">{plan.name}</h2>
                            <div className="font-apercu-bold text-2xl text-gray-700 dark:text-black">
                                {plan.price}
                            </div>
                            {plan.features.map((feature, idx) => {
                                return (
                                    <div key={idx} className="flex items-center mt-4 text-black dark:text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                        <span className="mx-4 text-black dark:text-black">{feature}</span>
                                    </div>
                                )

                            })


                            }

                            

                            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Start Now
                            </button>
                        </div>

                        
                            
                                


                    </div>
                </div>
            </div>          

                                 

                    
                
            )
            })}
            </div>
        </div>
    </div>
</div>

        )

}