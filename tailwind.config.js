/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'bg-white': '#f8f8f8',
				'bg-black': '#222222',
				'bg-input': '#d2d2d2',
				'bg-input-focus': '#323232',
				'bg-input-dropdown': '#222222',
				'bg-button': '#222222',
				'bg-button-hover': '#323232',
				'text-white': '#f8f8f8',
				'text-black': '#222222',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
