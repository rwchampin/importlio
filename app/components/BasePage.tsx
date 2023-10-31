"use client";
import Hero from "@/app/components/Hero";
import { BasePageProps } from "@/lib/constants";
import Section from "@/app/components/Section";
import Footer from "@/components/common/Footer";
// import CustomCursor from "@/app/components/CustomCursor";
// import CustomCanvas from "@/app/components/CustomCanvas";
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
  images,
  showSidebar=true,
  showPostsInFooter=true
}: BasePageProps) {
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
        theme={theme}
        bg={bg}
        title={title}
        subtitle={subtitle}
        belowSubtitle={belowSubtitle}
        headline={headline}
        shadowText={shadowText}
        customComponent={customComponent}
        shadowTextPosition={shadowTextPosition}
        images={images}
      />
      {/* this must be 100% width, no margin, no padding for the full width sections */}

      <section className={`flex flex-col   w-full relative`}>
          {children}
         
      </section>
      <Footer showPosts={showPostsInFooter} />
    </>
  );
}
