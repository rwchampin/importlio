import Link from 'next/link'

import {
    BsInstagram,
    BsTwitter,
    BsFacebook,
    BsYoutube,
} from 'react-icons/bs'
import { BiLogoShopify } from 'react-icons/bi'
export default function SocialIcons() {
    const style = "text-sm lg:text-md xl:text-lg"
    const socials = [{
        name: 'Instagram',
        url: 'https://www.instagram.com/importlio',
        icon: <BsInstagram className={style} />
    }, {
        name: 'Twitter',
        url: 'https://www.twitter.com/importlio',
        icon: <BsTwitter className={style} />
    }, {
        name: 'Facebook',
        url: 'https://www.facebook.com/importlio',
        icon: <BsFacebook className={style} />
    },{
        name: 'Youtube',
        url: 'https://www.youtube.com/importlio',
        icon: <BsYoutube className={style} />
    }, {
        name: 'Shopify',
        url: 'https://apps.shopify.com/importlio',
        icon: <BiLogoShopify className={style} />
    }]
    return (
        <div className="gap-3 flex text-2xl">
            {socials.map((social, idx) => (
                <Link 
                key={idx}
                target="_blank" 
                href={social.url} 
                className="text-black transition-colors duration-300 transform dark:text-black hover:text-gray-500 dark:hover:text-black text-4xl" 
                aria-label={`Importlio's ${social.name} page about Amazon Dropshipping`}
                >
                    {social.icon}
                </Link>
            ))}

        </div>
    )
}