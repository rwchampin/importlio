
'use client';
import {getLocalStorage, setLocalStorage} from './storageHelper';
import {Primary} from '@/app/components/buttons';
import gsap from 'gsap';

import {useState, useEffect} from 'react';

export default function CookieBanner() {

	const [ cookieConsent, setCookieConsent ]=useState(false);

	useEffect(() => {
		const storedCookieConsent=getLocalStorage("cookie_consent", null)

		setCookieConsent(storedCookieConsent)
	}, [ setCookieConsent ])


	useEffect(() => {
		const newValue=cookieConsent? 'granted':'denied'

		if(process.env.NODE_ENV === 'production') {
			window.gtag("consent", 'update', {
				'analytics_storage': newValue
			});
		}
		setLocalStorage("cookie_consent", newValue)
		gsap.to(".cookie-banner", {duration: 1,opacity:0, y: window.innerHeight + 500, ease: "power2.out"})
		//For Testing
		// console.log("Cookie Consent: ", cookieConsent)

	}, [ cookieConsent ]);

	return (
		<section style={{zIndex: 999}} className="cookie-banner bg-white fixed max-w-md p-4 mx-auto bg-gray5 shadow-lg border border-3 border-gray8 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl ">
			<h2 className="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h2>

			<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">We use cookies to ensure that we give you the best experience on our website. <a href="#" className="text-blue-500 hover:underline">Read cookies policies</a>. </p>

			<div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
				<Primary  onClick={() => setCookieConsent(false)}>Decline</Primary>
				<Primary   onClick={() => setCookieConsent(true)}>Allow Cookies</Primary>
			</div>
		</section>
	)
}
