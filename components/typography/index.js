
function compareStrings(str1, str2) {
  // Remove any leading/trailing whitespace
  str1 = str1.trim();
  str2 = str2.trim();

  // Check if both strings have the same quotes or if one of them is unquoted
  const isStr1DoubleQuoted = str1.startsWith('"') && str1.endsWith('"');
  const isStr2DoubleQuoted = str2.startsWith('"') && str2.endsWith('"');
  const isStr1SingleQuoted = str1.startsWith("'") && str1.endsWith("'");
  const isStr2SingleQuoted = str2.startsWith("'") && str2.endsWith("'");

  // Normalize the strings to double quotes for comparison
  if (!isStr1DoubleQuoted && isStr1SingleQuoted) {
    str1 = str1.replace(/^'|'$/g, '"');
  }

  if (!isStr2DoubleQuoted && isStr2SingleQuoted) {
    str2 = str2.replace(/^'|'$/g, '"');
  }

  // Now compare the strings
  return str1 === str2;
}
const calculateTitleColor = (bg) => {
    let color = 'black'
    switch(bg) {
        case compareStrings(bg, "dark"):
            color = 'red-600';
            break;
        case compareStrings(bg, "light"):
            color = 'green-400';
            break;
        default:
            color = 'red-500';
    }

    return "blue-400"
}  

const calculateSubtitleColor = (bg) => {
    let color = 'black'
    switch(bg) {
        case compareStrings(bg, "dark"):
            color = 'gray-300';
            break;
        case compareStrings(bg, "light"):
            color = 'gray-500';
            break;
        
        default:
            color = 'black';
    }
    return color
}  

const calculateHeadlineColor = (bg) => {
    let color = 'black'
    switch(bg) {
        case compareStrings(bg, "dark"):
            color = 'gray-300';
            break;
        case compareStrings(bg, "light"):
            color = 'gray-400';
            break;
        default:
            color = 'gray-300';
    }
    return color
}  

function Headline({ children,theme, className, color, fontFamily="montserrat", fontWeight="bold",  ...rest }) {
    
    return (
        <span className={`uppercase ${className} font-${fontFamily} font-${fontWeight} color-${color || calculateHeadlineColor(theme)} text-headline  m-0`} {...rest}>
            {children}
        </span>
    );
};
function Title({ children,theme, className, color, fontFamily="montserrat", fontWeight="black",  ...rest }) {
   
    return (
        <h1 className={`${className} font-${fontFamily} font-${fontWeight} color-${calculateSubtitleColor(theme)} not-prose text-heading-1 m-0 whitespace-pre-line`}>
            {children}
        </h1>
    );
};
function Subtitle({ children,theme, className, color, fontFamily="apercu", fontWeight="800",  ...rest }) {
    
    return (
        <h2 className={`font-${fontFamily} font-apercu text-${calculateSubtitleColor(theme)} not-prose text-subtitle-1 line-tight m-0`} {...rest}>
            {children}
        </h2>
    );
};






export { default as ShadowText } from "./ShadowText";

export { default as ParticleText } from "./ParticleText";
export { Title, Headline, Subtitle}
