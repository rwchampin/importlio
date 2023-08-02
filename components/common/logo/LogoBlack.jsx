"use client"
import gsap from 'gsap/all'
import Spinner from '@/components/common/Spinner'
import {useRef, useState, useEffect, Suspense} from 'react'
import Link from "next/link"
import {motion} from "framer-motion"



const LogoBlack=(props) => {
  let Img=(props) => <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 409.68 448.32"
    style={{
      width: props.size||"40px",
      height: "auto",
      maxWidth: "100px",
      maxHeight: "100px",
    }}
    {...props}
  >
    <defs>
      <filter id="a" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="b" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-2" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-2" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="c" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-3" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-3" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="d" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-4" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-4" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="e" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-5" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-5" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="f" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-6" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-6" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="g" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-7" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-7" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="h" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-8" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-8" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="i" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-9" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-9" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="j" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-10" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-10" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="k" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-11" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-11" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="l" filterUnits="userSpaceOnUse">
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-12" stdDeviation={5} />
        <feFlood floodColor="#231f20" floodOpacity={0.75} />
        <feComposite in2="blur-12" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <path
      d="M377.7 104.67s.03-.02.05-.03"
      style={{
        filter: "url(#a)",
      }}
    />
    <path
      d="M330.12 220.91c-.42.19-.83.36-1.25.56v-2.11l1.06-5.92c.03 2.5.11 4.97.19 7.47Z"
      style={{
        filter: "url(#b)",
      }}
    />
    <path
      d="M328.87 368.31 195.61 426.3 66.67 367.93l.13-64.19 128.81 56.62 133.28-57.25-.02 65.2z"
      style={{
        filter: "url(#d)",
      }}
    />
    <path
      d="M67.12 303.64v64.12L8.45 341.71v-68.03l58.67 29.96z"
      style={{
        filter: "url(#e)",
      }}
    />
    <path
      d="m328.89 303.11-.02 65.2 58.69-26.6v-68.03l-58.67 29.43z"
      style={{
        filter: "url(#f)",
      }}
    />
    <path
      d="M95.07 138.26c0-56.72 45.98-102.7 102.7-102.7s102.7 45.98 102.7 102.7"
      style={{
        fill: "none",
        filter: "url(#h)",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 55,
      }}
    />
    <path
      d="M328.64 221.32v81.66c.11 0 58.71-29.45 58.71-29.45l-.31-142.02H344.3"
      style={{
        filter: "url(#j)",
      }}
    />
    <path
      d="M344.28 131.55c-46.38 39.68-109.95 56.99-171.19 52.35-44.79-5.61-88-22.98-121.87-51.96H8.48L8.2 273.96s58.6 29.43 58.68 29.43v-83.75s4.25 2.28 5.33 2.7c83.91 34.12 175.97 34.87 256.41-1"
      style={{
        filter: "url(#k)",
      }}
    />
    <path
      d="M353.02 224.92c-.42.19-.83.36-1.25.56v-2.11l1.06-5.92c.03 2.5.11 4.97.19 7.47Z"
      style={{
        filter: "url(#l)",
      }}
    />
  </svg>;

  const wrapperRef=useRef(null)
  const logoRef=useRef(null)
  const linkRef=useRef(null)


  useEffect(() => {
    const logo=logoRef.current

    gsap.from(logo, {
      opacity: 0,
      duration: .5,
      ease: "expo.out",
    })

  }, [])



  return (
    <Suspense
      fallback={<Spinner />}
    >
      <Link href="/" style={{width: 50, height: 'auto'}} className='logo'><Img /></Link>

    </Suspense>
  )
}
export default LogoBlack
