import Link from 'next/link';
import { LoginForm } from '@/components/forms';
import { SocialButtons, Logo } from '@/components/common';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Importlio | Login',
	description: 'Importlio login page',
};

export default function Page() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='text-center flex flex-col items-center justify-center gap-2 sm:mx-auto sm:w-full sm:max-w-sm'>
				<Logo />
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Sign in to your account
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<LoginForm />
				<SocialButtons />

				<p className='mt-10 text-center text-sm text-gray-500'>
					Don&apos;t have an account?{' '}
					<Link
						href='/auth/register'
						className='font-semibold leading-6 text-black'
					>
						Register here
					</Link>
				</p>
			</div>
		</div>
	);
}
