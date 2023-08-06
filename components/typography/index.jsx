``
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
 
function Headline({ children, theme }) {

    return (
        <span data-lag=".3" data-enter className={`uppercase font-montserrat font-bold text-gray-400  text-headline  m-0`}>
            {children}
        </span>
    );
};
function Title({ children, theme }) {

    return (
        <h1 data-enter className="text-heading-1 font-black font-montserrat text-button">
            {children}
        </h1>
    );
};

function Subtitle({ children, theme }) {

    return (
        <h2 data-speed=".9" data-enter className={`font-apercu font-bold text-${theme === 'dark' ? 'gray-400' : 'gray-400'}  not-prose text-subtitle-1 line-tight m-0`}>
            {children}
        </h2>
    );
};






export { default as ShadowText } from "./ShadowText";

export { default as ParticleText } from "./ParticleText";
export { Title, Headline, Subtitle }
