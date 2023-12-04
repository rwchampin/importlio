
export const pageview = (GA_MEASUREMENT_ID, url) => {
    // if (process.env.NODE_ENV === "production" && typeof window !== "undefined" && window.location.href.indexOf("localhost") === -1) {
        window.gtag("config", GA_MEASUREMENT_ID, {
            page_path: url,
        });
    // }
};