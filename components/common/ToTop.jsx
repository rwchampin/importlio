import React, {useEffect} from 'react';
import "@/assets/styles/totop.css";
const ProgressCircle=() => {
	useEffect(() => {
		// Scroll back to top logic
		const progressPath=document.querySelector('.progress-wrap path');
		const pathLength=progressPath.getTotalLength();
		progressPath.style.transition='none';
		progressPath.style.strokeDasharray=`${pathLength} ${pathLength}`;
		progressPath.style.strokeDashoffset=pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition='stroke-dashoffset 10ms linear';
		const updateProgress=() => {
			const scroll=window.pageYOffset;
			const height=document.documentElement.scrollHeight-window.innerHeight;
			const progress=pathLength-(scroll*pathLength)/height;
			progressPath.style.strokeDashoffset=progress;
		};
		updateProgress();
		window.addEventListener('scroll', updateProgress);

		// Show/hide progress circle on scroll
		const offset=50;
		const duration=550;
		const handleScroll=() => {
			const progressWrap=document.querySelector('.progress-wrap');
			if(window.pageYOffset>offset) {
				progressWrap.classList.add('active-progress');
			} else {
				progressWrap.classList.remove('active-progress');
			}
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll);

		// Scroll to top on click
		const handleScrollToTop=(event) => {
			event.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		};
		const progressWrap=document.querySelector('.progress-wrap');
		progressWrap.addEventListener('click', handleScrollToTop);

		return () => {
			// Cleanup
			window.removeEventListener('scroll', updateProgress);
			window.removeEventListener('scroll', handleScroll);
			progressWrap.removeEventListener('click', handleScrollToTop);
		};
	}, []);

	return (
		<div className="progress-wrap ">
			<svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
				<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
			</svg>
		</div>
	);
};

export default ProgressCircle;
