 
export default function Headline({ children }) {

    return (
        <span  className={`uppercase font-montserrat font-bold text-gray-400  text-headline  m-0`}>
            {children}
        </span>
    );
};