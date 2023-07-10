import Link from 'next/link';
import type { Metadata } from 'next';
import  dynamic  from 'next/dynamic';
import { ComingSoon } from '@/components/pages';
export const metadata: Metadata = {
	title: 'Full Auth | Home',
	description: 'Full Auth home page',
};

const DynamicParticleText = dynamic(() => import('@/components/typography/ParticleText'), { ssr: false });

export default function Page() {
	return (
		<main>



						<ComingSoon />
						{/* <DynamicParticleText desktop="Full Auth" mobile="Full Auth" colors={['red', 'blue']}/> */}
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							This is an application meant to showcase jwt
							authentication with Next.js and Django. Credentials
							in this app get stored in cookies with the HttpOnly
							flag for maximum security. Styling is done using
							Tailwind.
						</p>
						 



		</main>
	);
}
