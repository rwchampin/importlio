export const pageview = (GA_MEASUREMENT_ID, url) => {
    if (process.env.NODE_ENV === "production") {
        window.gtag("config", GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};