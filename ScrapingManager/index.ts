import puppeteer from "puppeteer";
import toast from "react-hot-toast";
// ScrapingManager class that handles the scraping of data from a website with puppeteer

class ScrapingManager {
    private browser: any;
    private page: any;
    private url: string;

    constructor(url: any) {
        this.url = 'https://www.google.com/search?q=+%22fitness+instructor%22%20AND%20%22%40gmail.com%22%20-intitle:%22profiles%22%20-inurl:%22dir/+%22+site:www.linkedin.com/in/+OR+site:www.linkedin.com/pub/';
        this.browser = null;
        this.page = null;

        this.init();
    }

    public async init() {
      toast.loading('Scraper initializing')
        this.browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
            ],
        });
        this.page = await this.browser.newPage();
        await this.page.goto(this.url, { waitUntil: 'networkidle2' });
    }

    public async getBrowserInfo() {
      // const userAgent = await this.
    }

    public async determinePageType() {
      // fn to determine if a single product page or a search page
      let pageType = 'results';
      // get all the divs with text content
      const divs = await this.page.$$('div');
      // loop through the divs
      for (let div of divs) {
        // get the text content of the div
        const text = await this.page.evaluate((el:any) => el?.textContent, div);
        // if the text content includes the word 'results' then it is a search page
        if (
          text?.includes('Product Description') &&
          text?.includes('Product information')
          ) {
          pageType = 'search';
        }
      }
    }

    public async getHtml() {
        return await this.page.evaluate(() => document.body.innerHTML);
    }

    public async close() {
        await this.browser.close();
    }

    public async searchGoogleQuery(query: string) {

        // scroll to bottom of page and click the next button
        await this.page.evaluate(() => {
          window.scrollTo(0, document.body.scrollHeight);
        });
    }
}

export default ScrapingManager;