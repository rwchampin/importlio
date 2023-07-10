import Link from 'next/link'

const Hero = ({ title, subtitle, eyebrow,content, cta, href}) => {

    return (
        <section className="hero flex items-center flex-1">
            <div className="eyebrow">{eyebrow}</div>
            <h1 className='font-montserrat text-3xl md:text-4xl lg:text-5xl font-black'>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{content}</p>
            <Link href={href}>{cta}</Link>
            </section>
    )
}

export default Hero