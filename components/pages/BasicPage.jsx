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
		<div className="prose-md p-5 max-w-[90vw] mx-auto z-10 relative">
      {children}
      </div>
    
    </div>
  );
}
