'use client';
import { ParticleText, ShadowText } from "@/components/typography";

export default function NotFound() {

	return (
		<main className='grid min-h-full place-items-center prose-xl font-apercu px-6 py-24 sm:py-32 lg:px-8'>
			<div className='text-center'>
					<ShadowText
						text={404}
						xPos={0}
						yPos={50}
					/>
					<ParticleText 
					mobile='Page\nnot\nfound'
					desktop='Page not found'
					colors={['#800000','#FF0000', '800080']}
					 />
			 
				<p className='mt-6 text-base leading-7 text-black'>
					Sorry, we couldn&apos;t find the page you&apos;re looking
					for.
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<a
						href='/'
						className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Go back home
					</a>
					<a href='/' className='text-sm font-semibold text-gray-900'>
						Contact support <span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
			</div>
		</main>
	);
}
