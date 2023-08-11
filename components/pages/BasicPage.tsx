import { Hero } from "../common";

interface Props {
  bg?: string | null | undefined;
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  belowSubtitle?: string | null | undefined;
  headline: string | React.ReactNode;
  shadowText: string | React.ReactNode;
  showButton?: boolean | null | undefined;
  customComponent?: React.ReactNode | null | undefined;
  children: React.ReactNode | null | undefined;
}

export default function BasicPage({bg, title, subtitle,belowSubtitle, headline, shadowText, children, showButton, customComponent }:Props) {
  // debugger
  return (
    <>
      <Hero
        showButton={showButton}
        bg={bg}
        title={title}
			  subtitle={subtitle}
        belowSubtitle={belowSubtitle}
        headline={headline}
        shadowText={shadowText}
        customComponent={customComponent}
      />
      {/* this must be 100% width, no margin, no padding for the full width sections */}
		<div className="flex flex-col min-h-screen z-10 relative">
      {children}
      </div>

    </>
  );
}
