export default function Page() {
    const faqs = [
        {
            q: 'What sites can I import products from?',
            a: 'You can import products from Amazon, Walmart, AliExpress, and Costco. We are adding more sites soon!',
        },
        {
            q: 'How many products can I import?',
            a: 'You can import as many products as you want. There is no limit.',
        },
        {
            q: 'How many stores can I connect?',
            a: 'You can connect as many stores as you want. There is no limit.',
        },
        {
            q: 'Do you offer a free trial?',
            a: 'Yes, we offer a 7 day free trial. No credit card required.',
        },
        {
            q: 'Can I cancel my subscription at any time?',
            a: 'Yes, you can cancel your subscription at any time. You will not be charged if you cancel within the free trial period.',
        },
        {
            q: 'Do you offer support?',
            a: 'Yes, we offer 24/7 support. You can contact us at support@importlio.com.',
        },
    ];
    return (

        <section>
            <div classNameName="container max-w-full mx-auto py-24 px-6">
                <h2>Why Choose Importlio for Your Importing Needs?</h2>
                <h1 classNameName="text-5xl font-montserrat font-black">
                    Choose Your Plan & <i><u>Instantly</u></i> Import Your Amazon Dropshipping Products.</h1>
                <p>Join over 10,000 successful store owners who have placed their trust in Importlio and witness a significant boost in sales for your business. Start your free trial today with no credit card required, and experience the transformative power of our comprehensive eCommerce importer app.</p>

                <p>Importlio is the preferred choice for ambitious entrepreneurs in the eCommerce industry, offering a wide range of benefits to help you scale your business and achieve unparalleled success. With our powerful importer app, you gain access to:</p>
                <div
                    classNameName="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"
                ></div>

              


                <section className="p-5">
                    <div className="container px-6 py-12 mx-auto">
                        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions.</h1>

                        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                            {faqs.map((faq, index) => {
                                return (
                                    <div key={index} className="rounded-lg bg-gray-200 p-5">
                                        {/* <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div> */}

                                        <div className="">
                                            <h6 className="text-xl font-semibold text-black">
                                                {faq.q} 
                                                </h6>

                                            <p className="mt-2 text-sm text-black">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}