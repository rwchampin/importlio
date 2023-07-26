import { motion } from "framer-motion";
export default function Outline({children, onClick}) {
    return (
        <motion.button
            type={onClick? "button":"submit"}
            whileHover={{
                scale: 1.02,
                transition: {
                    type: 'spring',
                    duration: .3
                }
            }}
            whileTap={{
                scale: .9,
                transition: {
                    duration: .3
                }
            }}
            onClick={onClick}
            className="outline hover:cursor-pointer h-input bg-transparent hover:bg-offgray hover:text-offwhite text-offgray text-sm  w-full max-w-lg rounded-lg h-input hover:cursor-pointer hover:shadow-lg font-bold font-apercu-bold rounded-lg"
        >
            
            {children}
        </motion.button>
    );
}