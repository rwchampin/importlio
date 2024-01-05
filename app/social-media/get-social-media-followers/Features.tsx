
"use client";
import { Link } from "@nextui-org/react";
import React from 'react'
import {
    Accordion,
    AccordionItem,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
} from "@nextui-org/react";

import {
    FiUsers,
    FiUserPlus,
    FiActivity
} from "react-icons/fi";

export default function Features() {
    const info = [
        {
            icon: <FiUserPlus size={24} />,
          title: "Add REAL Followers to Instagram Threads",
          description:
            <div>Add REAL followers to your Instagram Threads account with our 'Add Followers' tool.  We grow your account organically by following REAL users over a long period of time and do our best to abide by Instagram's strict rules.<br /><br />We are currently offering a free demo of the tool.  We follow 100 random users which should equate to 20-100 new users following you back.  We are currently working on a paid version of this tool that will allow you to add more followers to your account.  Stay tuned!</div>,
        },{
            icon: <FiUsers size={24} />,
          title: "Try It For Free",
          description: <div><b>Simply register for a free account.</b>  Check your email & click the activation link & use the tool for free!<br /><br />It limits you to 100 followers, but it's a great way to try out the tool and see how it works.  We are currently working on a paid version of this tool that will allow you to add more followers to your account.  Stay tuned!</div>,
        },{
            icon: <FiActivity size={24} />,
          title: "How It Works",
          description: <div>Simply enter your Instagram Threads username and password and click 'Add Followers'.  Our tool will follow REAL users on Threads, while abiding by their terms of use.  You must keep the website open while the tool is running.  If you close the website, the tool will stop running.  The process is slow, purposely, to prevent getting your account banned.  It is a tedious process, but it is the only way to grow your account organically.</div>,
        }
      ]

      
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-5">
      {info.map((item, index) => (
        <Card key={index} className="w-full lg:max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <div className="text-md">{item.title}</div>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="text-sm">{item.description}</div>
          </CardBody>
          {/* <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter> */}
        </Card>
      ))}
    </section>
  );
}