import {BasicPage} from '@/components/pages'
import {Section} from '@/components/common'
export default function Page() {
	const faqs=[
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
		<BasicPage
			theme="light"
			title="Amazon Dropshipping Product Importer FAQs"
			subtitle="Frequently Asked Questions"
			headline="Learn More"
			shadowText="FAQ"
			belowSubtitle={null}
			showButton={false}
			customComponent={null}
			xPos="100"
			yPos="50"
			
		>

			<Section className='p-5'>
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
			</Section>
		</BasicPage>
	)
}