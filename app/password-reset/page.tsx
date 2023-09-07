import { PasswordResetForm } from '@/components/forms';
import type { Metadata } from 'next';

import LogoBlack from '@/components/common/LogoBlack';
export const metadata: Metadata = {
	title: 'Amazon Dropshipping Product Importer App | Password Reset',
	description: 'Amazon Dropshipping Product Importer App password reset page',
};

export default function Page() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<LogoBlack />
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Reset your password
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<PasswordResetForm />
			</div>
		</div>
	);
}
