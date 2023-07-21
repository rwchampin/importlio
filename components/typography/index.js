




function Title({ children, className, color="black", fontFamily="montserrat", fontWeight="black",  ...rest }) {
    return (
        <h1 className={`${className} font-${fontFamily} font-${fontWeight} text-${color} text-heading-1 mb-1`} {...rest}>
            {children}
        </h1>
    );
};


function Headline({ children, className, color="gray-300", fontFamily="apercu-bold", fontWeight="bold",  ...rest }) {
    return (
        <span className={`${className} font-${fontFamily} font-${fontWeight} text-${color} text-heading-1 m-0`} {...rest}>
            {children}
        </span>
    );
};

function Subtitle({ children, className, color="gray-300", fontFamily="apercu", fontWeight="medium",  ...rest }) {
    return (
        <h2 className={`${className} font-${fontFamily} font-${fontWeight} text-${color} text-heading-3 m-0`} {...rest}>
            {children}
        </h2>
    );
};



export { default as ParticleText } from "./ParticleText";
export { Title, Headline, Subtitle}
