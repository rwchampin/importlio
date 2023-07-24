import { Hero } from "../common";
import dynamic from 'next/dynamic';



export default function BasicPage({theme, title, subtitle, headline, shadowText, children, }) {
  // debugger
  return (
    <div className="prose-xl overflow-visible">
      <Hero
        showButton={true}
        theme={theme}
        title={title}
			  subtitle={subtitle}
        headline={headline}
        shadowText={shadowText}
      />
		<div className="flex flex-col gap-10 min-h-screen mx-auto z-10 relative">
      {children}
      </div>
    
    </div>
  );
}
