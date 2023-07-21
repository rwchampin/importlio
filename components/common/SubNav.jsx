"use client";
import {NavLink} from "@/components/common";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";
import {useRouter} from "next/router";


export default function SubNav({subMenu, isSelected}) {
	return (
		<div className="sub-menu p-1 text-s flex gap-1">
              {subMenu.map((link, idx) => {
                return (
                  <NavLink
                    key={idx}
                    isSelected={isSelected(link.href)}
                    href={`/ecommerce-tutorials/${link.href}`}
                    isMobile={false}
                    className="text-white hover:text-gray-500"
                  >
                    {link.name}
                  </NavLink>
                );
              })}
		</div>
	)
}