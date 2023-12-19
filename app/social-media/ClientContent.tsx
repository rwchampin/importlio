"use client";
import React from 'react'
import {
    Accordion,
    AccordionItem,
} from "@nextui-org/react";


export default function ClientContent() {
  const [showCompact, setShowCompact] = React.useState(false);
 
    const features = [
        {
          title: "Add Followers",
          description:
            "Add followers to your Instagram Threads account with our 'Add Followers' tool.",
          icon: "",
        },
        {
          title: "Adds 100% Real Followers",
          description:
            "Adds 100% real followers to your account. Not fake followers or bot accounts.",
          icon: "",
        },
        {
          title: "How It Works",
          description:
            "The Importlio 'Add Followers' tool will follow <i>REAL</i> users with random & long periods of time inbetween each action to prevent getting your account banned. This is not a fake 'instant click' tool. This is a tool that will add followers to your account over time to safely & organically grow your account.",
          icon: "",
        },
        {
          title: "How long does it take?",
          description:
            "The tool will run for as long as needed to follow the required amount of users.  There is a random amount of time after a user is followed before a new user is followed. This is to prevent getting your account banned. It does make it a lengthy process, but you are growing your account organically.",
          icon: "",
        },
        {
          title: "Is it safe?",
          description:
            "Instagram is a very strict platform. We have taken every precaution to make sure that your account is safe. We have tested this tool on our own accounts and have not had any issues. We have also tested this tool on accounts with 100k+ followers and have not had any issues. We are not responsible for any issues that may arise from using this tool. Use at your own risk.",
          icon: "",
        },
        {
          title: "How many followers can I add?",
          description:
            "You can add as many followers as you want. Our tool will run over the required period of time until the limit is met. Instagram has a very strict follows-per-day & follows-per-hour limit. We areforced to abide by these rules and when we are nearing the limits, we stop the ervice and resume it when the limits are reset.",
          icon: "",
        },
        {
          title: "Is there a Guarantee?",
          description:
            "In short, no.  However, we are following REAL accounts.  Our tool follows 3 accounts per single user.  So if you purchase a plan for 100 followers, we follow 300 accounts.  We have found that the average follow-back rate is 20% for Instagram.  So if you purchase a plan for 100 followers, we will then follow 500 accounts for you.",
          icon: "",
        },
        {
          title: "But I want more followers!",
          description:
            "We know.  The fact is, following users is a tedious and time consuing task. Our daily lives cause us to be inconsistent and not follow enough userstoever see a real impact on our follower count.  That's why our tool is so great.  It does the work for you.  It follows users for you.  It does it consistently and over a long period of time.  This is how you grow your account organically.  This is how you get more followers.",
          icon: "",
        },
      ];
  return (
    <section className="p-5 rounded-lg bg-gray-200 shadow-lg">

    <Accordion
      isCompact={true}
      className="w-full"
      onChange={() => setShowCompact(!showCompact)}
    >
      {features.map((feature, index) => (
        <AccordionItem
          key={index}
          aria-label={`Accordion ${index}`}
          title={feature.title}
          isCompact={showCompact}
        >
          {feature.description}
        </AccordionItem>
      ))}
    </Accordion>
    </section>
  )
}
