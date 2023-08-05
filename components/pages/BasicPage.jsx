import { Hero } from "../common";



export default function BasicPage({theme,bg, title, subtitle,belowSubtitle, headline, shadowText, children, showButton, xPos, yPos, customComponent }) {
  // debugger
  return (
    <>
      <Hero
        showButton={showButton}
        theme={theme}
        bg={bg}
        title={title}
			  subtitle={subtitle}
        belowSubtitle={belowSubtitle}
        headline={headline}
        shadowText={shadowText}
        xPos={xPos}
        yPos={yPos}
        customComponent={customComponent}
      />
      {/* this must be 100% width, no margin, no padding for the full width sections */}
		<div className="flex flex-col gap-10 min-h-screen z-10 relative">
      {children}
      </div>
    
    </>
  );
}
