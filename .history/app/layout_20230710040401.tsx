import '@/assets/styles/globals.css';

import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local' 
import type { Metadata } from 'next';
import Provider from '@/redux/provider';
import { Footer, Navbar } from '@/components/common';
import { Setup } from '@/components/utils';

const montserrat = Montserrat({
	weight: ['100', '200', '300','400','500','600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
	preload: true
  });

export const metadata: Metadata = {
	title: 'Full Auth',
	description: 'Full Auth application that provides jwt authentication',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<Setup />
					<Navbar />
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8'>
						{children}
					</div>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}