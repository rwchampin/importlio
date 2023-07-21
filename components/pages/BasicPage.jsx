import { Hero } from "../common";
import dynamic from 'next/dynamic';



export default function BasicPage({homepage, title, subtitle, headline, shadowText, children, cta }) {
 
  return (
    <div className="prose-xl overflow-visible">
      <Hero
        homepage
        bg="light"
        title={title}
			  subtitle={subtitle}
        headline={headline}
        shadowText={shadowText}
        cta={cta}
      />
		{children}
    
    </div>
  );
}
