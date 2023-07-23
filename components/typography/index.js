

const calculateTitleColor = (bg) => {
    let color = 'black'
    switch(bg) {
        case bg === 'black':
            color = 'white';
            break;
        case bg === 'white':
            color = 'black';
            break;
        case bg === 'dark':
            color = 'white';
            break;
        case bg === 'light':
            color = 'black';
            break;
        default:
            color = 'black';
    }
    return color
}  

const calculateSubitleColor = (bg) => {
    let color = 'black'
    switch(bg) {
        case bg === 'black':
            color = 'white';
            break;
        case bg === 'white':
            color = 'gray-800';
            break;
        case bg === 'dark':
            color = 'white';
            break;
        case bg === 'light':
            color = 'gray-800';
            break;
        default:
            color = 'gray-800';
    }
    return color
}  

function Headline({ children, className, color="gray-400", fontFamily="apercu", fontWeight="bold",  ...rest }) {
    return (
        <span className={`uppercase ${className} font-${fontFamily} font-${fontWeight} text-${color || calculateTitleColor()} text-headline  m-0`} {...rest}>
            {children}
        </span>
    );
};
function Title({ children, className, color="black", fontFamily="montserrat", fontWeight="black",  ...rest }) {
    return (
        <h1 className={`${className} font-${fontFamily} font-${fontWeight} text-${color || calculateSubtitleColor()} text-heading-1 mb-5 whitespace-nowrap`} {...rest}>
            {children}
        </h1>
    );
};
function Subtitle({ children, className, color="gray-300", fontFamily="apercu-bold", fontWeight="800",  ...rest }) {
    return (
        <h2 className={`font-${fontFamily} font-apercu text-${color || calculateColor()} not-prose text-subtitle-1 line-tight m-0`} {...rest}>
            {children}
        </h2>
    );
};






export { default as ShadowText } from "./ShadowText";

export { default as ParticleText } from "./ParticleText";
export { Title, Headline, Subtitle}
