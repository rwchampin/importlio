import Link from 'next/link'
import { Title } from '@/components/typography/Title'

export default function Hero({ title, subtitle, eyebrow,content, cta, href}) {

    return (
        <section className="hero flex items-center flex-1">
            <div className="eyebrow">{eyebrow}</div>
            <Title title={title} subtitle={subtitle} />
            <h2>{subtitle}</h2>
            <p>{content}</p>
            <Link hrƒef={href}>{cta}</Link>
            </section>
    )
}

