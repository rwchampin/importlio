
import puppeteer from 'puppeteer';

async function findElementsWithText(url:any, searchString:any) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
  
    const elementsWithText = await page.evaluate((searchString:any) => {
      const elements = Array.from(document.querySelectorAll('*'));
      const matchingElements = elements.filter((element:any) => {
        if (element.textContent.toLowerCase().includes(searchString.toLowerCase())) {
          return true;
        }
        return false;
      });
      return matchingElements.map((element:any) => element.textContent);
    }, searchString);
  
    // await browser.close();
  
    return elementsWithText;
  }

export const getPrice = async (page:any) => {
    // for each element try to retrieve the price
try {
   const priceSymbolElement = await page.$('.a-price-symbol');
   const priceElement = await page.$('.a-price');
   const dollarElement = await priceElement?.$('.a-price-whole');
   const centElement = await priceElement?.$('.a-price-fraction');
   const priceSymbol = await page.evaluate((el:any) => el?.textContent, priceSymbolElement);
   const priceDollar = await page.evaluate((el:any) => el?.textContent, dollarElement);
   const priceCent = await page.evaluate((el:any) => el?.textContent, centElement);

   // console.log(priceDollar);
   // console.log(priceCent);
   return {
       priceSymbol,
       priceDollar,
       priceCent
   }

 } catch(err) {
   console.log('no price found for this element');
 }
}