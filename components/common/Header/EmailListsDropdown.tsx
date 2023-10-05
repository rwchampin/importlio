"use client";
import { BiDollarCircle } from "react-icons/bi";
import { AiOutlineLineChart, AiOutlineStar } from "react-icons/ai";
import { Button } from "@nextui-org/react";
import DropdownItem from "@/app/components/Dropdown/DropdownItem";
export default function EmailListsDropdown() {
  const menuItems = [
    {
      pretty: "Free Trial",
      href: "/free-email-lists",
      description:
        "Get a free trial of our email lists. No credit card required.",
      icon: BiDollarCircle,
      cta: () => (
        <Button className="bg-button text-offwhite px-5 text-xs min-w-[110px]">
          Start Free Trial
        </Button>
      ),
    },
    {
      pretty: "Niche Email Marketing",
      href: "/email-lists/niche-email-marketing",
      description: "Choose from our 100+ niche email lists.",
      icon: AiOutlineLineChart,
      cta: () => (
        <Button className="bg-button text-offwhite px-5 text-xs min-w-[110px]">
          Choose a list
        </Button>
      ),
    },
    {
      pretty: "Custom Email Lists",
      href: "/email-lists/custom-email-lists",
      description:
        "Use our custom email list builder to create your own email list.",
      icon: AiOutlineStar,
      cta: () => (
        <Button className="bg-button text-offwhite px-5 text-xs min-w-[110px]">
          Join Today!
        </Button>
      ),
    },
  ];

  return (
    <>
      {menuItems.map((item: any, i: any) => (
        <DropdownItem key={i} item={item} />
      ))}
    </>
  );
}
