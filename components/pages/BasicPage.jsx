import { Hero } from "../common";
import dynamic from 'next/dynamic';



export default function BasicPage({homepage, title, subtitle, headline, shadowText, children, }) {
 
  return (
    <div className="prose-xl overflow-visible">
      <Hero
        showButton={true}
        homepage
        bg="light"
        title={title}
			  subtitle={subtitle}
        headline={headline}
        shadowText={shadowText}
      />
		{children}
    
    </div>
  );
}
