
import gsap, { SplitText } from 'gsap/all';



export default function Title({ children, className, ...rest }) {
 

    return (
        <h1 className={`font-montserrat font-black text-black text-3xl md:text-4xl lg:text-5xl`} {...rest}>
            {children}
        </h1>
    );
};



