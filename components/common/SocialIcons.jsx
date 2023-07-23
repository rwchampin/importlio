import Link from 'next/link'
import {BsInstagram, BsTwitter, BsFacebook} from 'react-icons/bs'
import {TfiYoutube} from 'react-icons/tfi'
export default function SocialIcons() {
    return (
        <div className="flex gap-5">
        <Link href="www.instagram.com" className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black" aria-label="Reddit">
            <BsInstagram
                className="font-gray-300 hover:font-black text-lg"
            />
        </Link>

        <Link href="www.twitter.com" className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black" aria-label="Facebook">
            <BsTwitter/>
        </Link>

        <Link href="www.facebook.com" className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black" aria-label="Github">
            <BsFacebook/>
        </Link>

        <Link href="www.youtube.com" className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black" aria-label="Github">
            <TfiYoutube/>
        </Link>
    </div>
    )
}