import { Hero } from "../common";
import dynamic from 'next/dynamic';



export default function BasicPage({theme,bg, title, subtitle, headline, shadowText, children, showButton, xPos, yPos, customComponent }) {
  // debugger
  return (
    <div className="prose-xl overflow-visible">
      <Hero
        showButton={showButton}
        theme={theme}
        bg={bg}
        title={title}
			  subtitle={subtitle}
        headline={headline}
        shadowText={shadowText}
        xPos={xPos}
        yPos={yPos}
        customComponent={customComponent}
      />
		<div className="flex flex-col gap-10 min-h-screen mx-auto z-10 relative">
      {children}
      </div>
    
    </div>
  );
}
