import Hero from "@/app/components/Hero";
import { BasePageProps } from "@/lib/constants";
import Section from "@/app/components/Section";

export default function BasePage({
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
}: BasePageProps) {
  return (
    <>
     <Section className="flex justify-between items-center">
        {topLeftPageComponent}
        {topRightPageComponent}
      </Section>
      <Hero
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
      <Section>
        <div className="flex flex-col min-h-screen z-10 relative">
          {children}
        </div>
      </Section>
    </>
  );
}
