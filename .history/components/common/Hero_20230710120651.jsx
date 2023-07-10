import Link from 'next/link'

const Hero = ({ title, subtitle, eyebrow,content, cta, href}) => {

    return (
        <section className="hero flex items-center flex-1">
            <div className="eyebrow">{eyebrow}</div>
    <Title>{title}</Title>
            <h2>{subtitle}</h2>
            <p>{content}</p>
            <Link href={href}>{cta}</Link>
            </section>
    )
}

export default Hero