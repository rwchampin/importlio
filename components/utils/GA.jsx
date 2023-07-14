import Script from 'next/script'

export default function GA(){
    return(
        <>
            <Script 
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-V8X4P8V5SZ"
                />
                <Script id="google-analytics" strategy='afterInteractive'>
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-V8X4P8V5SZ');
                `}
                </Script>
        </>
    )
}