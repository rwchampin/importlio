"use client";
import Hero from "@/app/components/Hero";
import Section from "@/app/components/Section";
import { BasePageProps } from "@/lib/constants";
// import dynamic from "next/dynamic";
import BreadCrumbs from "./BreadCrumbs";

export default function BasePage({
  size,
  theme,
  bg,
  image_alt_text,
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
  // images,
  showSidebar = true,
  showPostsInFooter = true,
  showBreadcrumbs = false,
}: BasePageProps) {
  const getHeadline = () => {
    if (showBreadcrumbs) {
      return <BreadCrumbs />;
    } else {
      return headline;
    }
  };
  return (
    <>
      {/* <CustomCanvas>
        <CustomCursor />
      </CustomCanvas> */}
      <Section className="flex justify-between items-center">
        {topLeftPageComponent}
        {topRightPageComponent}
      </Section>
      <Hero
        size={size}
        theme={theme}
        bg={bg}
        image_alt_text={image_alt_text}
        title={title}
        subtitle={subtitle}
        belowSubtitle={belowSubtitle}
        headline={getHeadline()}
        shadowText={shadowText}
        customComponent={customComponent}
        shadowTextPosition={shadowTextPosition}
        // images={images}
      />
      {/* this must be 100% width, no margin, no padding for the full width sections */}

      <section className={`flex flex-col   w-full relative mb-10`}>
        {children}
      </section>



          {/* <RecentBlogPosts /> */}

     
      {/* <Footer /> */}
    </>
  );
}
