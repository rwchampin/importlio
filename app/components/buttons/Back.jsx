"use client"
import {useRouter} from 'next/navigation'
import { IoArrowBack } from 'react-icons/io5'
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useEffect } from 'react';



const SVGCircle = ({ size, fill, stroke, strokeWidth }) => {
	const radius = size / 2;
	const cx = radius;
	const cy = radius;
	const adjustedSize = size + strokeWidth * 2; // Adjust for stroke width
	const viewBox = `0 0 ${adjustedSize} ${adjustedSize}`;
	

	useEffect(() => {
		gsap.registerPlugin(DrawSVGPlugin);
		gsap.fromTo('circle', {
			drawSVG: '0% 0%'
		}, {
			drawSVG: '0% 100%',
			duration: 0.5,
			ease: 'power2.out',
			delay: 0.5
		})
	}, [])

	return (
	  <svg width={size} height={size} className='overflow-visible	absolute'>
		<circle cx="50%" cy="50%" r={radius} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
	  </svg>
	);
  };

const Back = () => {
	const {router}=useRouter()
	
	const handleClick=() => {
		router.back()
	}

	return (
		<div 
			className="flex items-center justify-center"
			>
				<SVGCircle
					size={50}
					fill="transparent"
					stroke="black"
					strokeWidth={5}
				/>
			<IoArrowBack
				className='text-[1.8rem] text-black absolute'
			/>
		</div>
	)
}

export default Back;