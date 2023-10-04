import Link from 'next/link'
import Icon from './Icon'
export default function SocialIcons() {
    const socials = [{
        name: 'Instagram',
        url: 'https://www.instagram.com/importlio',
        icon: <Icon type="instagram" />
    }, {
        name: 'Twitter',
        url: 'https://www.twitter.com/importlio',
        icon: <Icon type="twitter" />
    }, {
        name: 'Facebook',
        url: 'https://www.facebook.com/importlio',
        icon: <Icon type="facebook" />
    },{
        name: 'Youtube',
        url: 'https://www.youtube.com/importlio',
        icon: <Icon type="youtube" />
    }]
    return (
        <div className="flex gap-5">
            {socials.map((social, idx) => (
                <Link 
                key={idx}
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