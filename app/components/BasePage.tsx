"use client";
import Hero from "@/app/components/Hero";
import { BasePageProps } from "@/lib/constants";
import Section from "@/app/components/Section";
import Sidebar from "@/app/components/Sidebar";
import PostCardSkeleton from "@/app/components/skeletons/PostCardSkeleton";

import { Suspense } from "react";
const Loader = () => {
  return (
    <div className="flex flex-col gap-5">
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </div>
  );
};
export default function BasePage({
  theme,
  bg,
  title,
  subtitle,
  belowSubtitle,
  headline,
  shadowText,
  shadowTextPosition,
  children,
  customComponent,
  topLeftPageComponent,
  topRightPageComponent,
  contentStyles,
  contentParentStyles,
}: BasePageProps) {
  return (
    <>
      <Section className="flex justify-between items-center">
        {topLeftPageComponent}
        {topRightPageComponent}
      </Section>
      <Hero
        theme={theme}
        bg={bg}
        title={title}
        subtitle={subtitle}
        belowSubtitle={belowSubtitle}
        headline={headline}
        shadowText={shadowText}
        customComponent={customComponent}
        shadowTextPosition={shadowTextPosition}
      />
      {/* this must be 100% width, no margin, no padding for the full width sections */}

      <div className={`flex flex-col  w-full min-h-screen z-10 relative ${contentParentStyles}`}>
        <div className={`flex-auto flex-col md:flex-row ${contentStyles}`}>
          {children}
        </div>
        <Suspense fallback={<Loader />}>
          <Sidebar />
        </Suspense>
      </div>
    </>
  );
}
