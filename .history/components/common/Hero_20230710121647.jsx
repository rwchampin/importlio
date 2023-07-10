import Link from 'next/link'
import { Title } from '@/components/typography'

export default function Hero({ title, subtitle, eyebrow,content, cta, href}) {

    return (
        <section className="hero flex flex-col items-center flex-1">
            <div className="max-w-lg">
            <div className="eyebrow">{eyebrow}</div>
            <Title>{title}</Title>
            <h2>{subtitle}</h2>
            <p>{content}</p>
            {/* <Link href={href}>{cta}</Link> */}
            </div>
            </section>
    )
}

