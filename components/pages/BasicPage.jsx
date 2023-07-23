import { Hero } from "../common";
import dynamic from 'next/dynamic';



export default function BasicPage({theme, title, subtitle, headline, shadowText, children, }) {
 
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
		{children}
    
    </div>
  );
}
