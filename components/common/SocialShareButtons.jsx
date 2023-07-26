"use client";
import {gsap} from 'gsap';
import {use, useEffect, useRef} from 'react';
import "@/assets/styles/socialshare.css";

import { BsFacebook, BsMessenger, BsTwitter, BsLinkedin, BsInstagram, BsShare} from 'react-icons/bs';
export default function SocialShareButtons({url, title, summary, className, show}) {
	const shareButton=useRef(null);
	const toggleButton=useRef(null);


	const buttons=[
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/sharer/sharer.php?u='+url,
			icon: <BsFacebook />
		},
		{
			name: 'Messenger',
			url: 'https://www.facebook.com/sharer/sharer.php?u='+url,
			icon: <BsMessenger />
		}, {
			name: 'Twitter',
			url: 'https://www.twitter.com/sharer/sharer.php?u='+url,
			icon: <BsTwitter />
		}, {
			name: 'Linkedin',
			url: 'https://www.linkedin.com/sharer/sharer.php?u='+url,
			icon: <BsLinkedin />
		}, {
			name: 'Instagram',
			url: 'https://www.instagram.com/sharer/sharer.php?u='+url,
			icon: <BsInstagram />
		}
	]

	 
	useEffect(() => {
		let $shareButtons= shareButton.current,
			$toggleButton= toggleButton.current,
			menuOpen=false,
			buttonsNum=$shareButtons.length,
			buttonsMid=(buttonsNum/2),
			spacing=75;

		function openShareMenu() {
			gsap.to($toggleButton, {
				scaleX: 1.2,
				scaleY: 0.6,
				ease: "power2.inOut",
				duration: 0.1,
				onComplete: function () {
					gsap.to($toggleButton, {
						scale: 0.6,
						ease: "elastic.out",
						easeParams: [ 1.1, 0.6 ],
						duration: 0.8
					})
					gsap.to($toggleButton.children(".share-icon"), {
						scale: 1.4,
						ease: "elastic.out",
						duration: 0.8,
						easeParams: [ 1.1, 0.6 ]
					})
				}
			})
			$shareButtons.each(function (el, i) {
				var $cur=el;
				var pos=i-buttonsMid;
				if(pos>=0) pos+=1;
				var dist=Math.abs(pos);
				$cur.css({
					zIndex: buttonsMid-dist
				});
				gsap.to($cur, {
					x: pos*spacing,
					scaleY: 0.6,
					scaleX: 1.1,
					ease: "elastic.out",
					duration: 1.1*(dist),
					easeParams: [ 1.01, 0.5 ]
				});
				gsap.to($cur, {
					delay: (0.2*(dist))-0.1,
					scale: 0.6,
					ease: "elastic.out",
					duration: .8,
					easeParams: [ 1.1, 0.6 ]
				})
				gsap.fromTo($cur.children(".share-icon"), {
					scale: 0
				}, {
					delay: (0.2*dist)-0.1,
					scale: 1,
					ease: Quad.easeInOut,
					duration: 0.2,
				})
			})
		}

		function closeShareMenu() {
			gsap.to([ $toggleButton, $toggleButton.children(".share-icon") ], {
				delay: 0.1,
				scale: 1,
				ease: "elastic.out",
				duration: 1.4,
				easeParams: [ 1.1, 0.3 ]
			});
			$shareButtons.each(function (el, i) {
				var $cur=el;
				var pos=i-buttonsMid;
				if(pos>=0) pos+=1;
				var dist=Math.abs(pos);
				$cur.css({
					zIndex: dist
				});
				gsap.to($cur, {
					x: 0,
					scale: .95,
					duration: '0.4+'+((buttonsMid-dist)*0.1),
					ease: "power2.inOut",
				});
				gsap.to($cur.children(".share-icon"), {
					scale: 0,
					duration: 0.2,
					ease: "power2.inOut"
				});
			})
		}

		function toggleShareMenu() {
			menuOpen=!menuOpen
			menuOpen? openShareMenu():closeShareMenu();
		}

		toggleButton.current.addEventListener("mousedown", function () {
			toggleShareMenu();
		})

		return () => {
			toggleButton.current.removeEventListener("mousedown");
		}
	}, []);
	// useEffect(() => {
	// 	buttons.current=ref.current.querySelectorAll('button');
	// 	gsap.set(buttons.current, {opacity: 0, scale: 0})
	// }, [ ref ]);

	// useEffect(() => {
	// 	if(show) {
	// 		gsap.to(buttons.current, {opacity: 1, scale: 1, stagger: .05, duration: .3, ease: 'power2.inOut'});
	// 	} else {
	// 		gsap.to(buttons.current, {opacity: 0, scale: 0, stagger: .05, duration: .3, ease: 'power2.inOut'});
	// 	}
	// }, [ show ]);

	return (



		<div class="share">
			<div class="share-content">
				<button class="share-toggle-button" ref={toggleButton}>
					<BsShare />
				</button>
				<ul class="share-items">

					{buttons.map((button, i) => (
						<li class="share-item" key={i}>
							<a class="share-button" href={button.url} ref={shareButton}>
								{button.icon}
							</a>
						</li>
					))}

				</ul>
			</div>
		</div>
	)
}