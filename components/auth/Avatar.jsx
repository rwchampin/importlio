
"use client"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
export default function Avatar({ user }) {


  return (
        <Image 
        style={{
          width: '100%',
          height: 'auto',
        }}
        className="object-cover w-16 h-16 rounded-full" 
        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" 
        alt="Shopify Ecommerce Amazon Dropshipping Product Importer"
         />
  )
}