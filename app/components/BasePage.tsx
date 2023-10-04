"use client";
import Hero from "@/app/components/Hero";
import { BasePageProps } from "@/lib/constants";
import Section from "@/app/components/Section";
import dynamic from "next/dynamic";

const Sidebar: any = dynamic(() => import("@/app/components/BlogSidebar/Sidebar"), {
  ssr: false,
});

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
  showSidebar,
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

      <div className={`flex flex-col  w-full min-h-screen z-10 relative ${contentParentStyles} lg:flex-row`}>
        <div className={`flex-auto flex-col md:flex-row w-full lg:w-3/4 ${contentStyles}`}>
          {children}
        </div>

          {showSidebar && <Sidebar />}
          
      </div>
    </>
  );
}
