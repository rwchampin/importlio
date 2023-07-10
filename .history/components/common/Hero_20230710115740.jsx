export const Hero = ({ title, subtitle, eyebrow,content, cta}) => {

    return (
        <section className="hero flex items-center flex-1">
            <div className="eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{content}</p>
            <button>{cta}</button>
            </section>
    )
}