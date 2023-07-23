import {BsInstagram, BsTwitter, BsFacebook} from 'react-icons/bs'
import {TfiYoutube} from 'react-icons/tfi'
export default function SocialIcons() {
    return (
        <div className="flex gap-5 bg-red-400">
        <a href="#" className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black" aria-label="Reddit">
            <BsInstagram/>
        </a>

        <a href="#" className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black" aria-label="Facebook">
            <BsTwitter/>
        </a>

        <a href="#" className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black" aria-label="Github">
            <BsFacebook/>
        </a>

        <a href="#" className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black" aria-label="Github">
            <TfiYoutube/>
        </a>
    </div>
    )
}