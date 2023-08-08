import Link from 'next/link'
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'
// import {TfiYoutube} from 'react-icons/tfi'
export default function SocialIcons() {
    const socials = [{
        name: 'Instagram',
        url: 'www.instagram.com/importlio',
        icon: <BsInstagram className="font-gray-300 hover:font-black text-lg" />
    }, {
        name: 'Twitter',
        url: 'www.twitter.com/importlio',
        icon: <BsTwitter className="font-gray-300 hover:font-black text-lg" />
    }, {
        name: 'Facebook',
        url: 'www.facebook.com/importlio',
        icon: <BsFacebook className="font-gray-300 hover:font-black text-lg" />
    }]
    return (
        <div className="flex gap-5">
            {socials.map((social, idx) => (
                <Link 
                target="_blank" 
                href={social.url} 
                className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black" 
                aria-label={social.name}
                >
                    {social.icon}
                </Link>
            ))}

        </div>
    )
}