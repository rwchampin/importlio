export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
    if (process.env.NODE_ENV === "production") {
        window.gtag("config", GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};