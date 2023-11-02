
export const getTitle = async ({ page }:any) => {
    try {
        // find the h2 tag in the page and log
        const h2 = await page.$('h2');
        // console.log('***********************************************************************************************');
        // log the text content of the h2 tag
        const title = await page.evaluate((el:any) => el?.textContent, h2)
        return title;

        // console.log(title);
        } catch(err) {
          console.log('no title found for this element');
        }
 
    }



    export const getPrice = async({ page }:any) => {
         // for each element try to retrieve the price
    try {
        const priceElement = await page.$('.a-price');
        const dollarElement = await priceElement?.$('.a-price-whole');
        const centElement = await priceElement?.$('.a-price-fraction');
        const priceDollar = await page.evaluate((el:any) => el?.textContent, dollarElement);
        const priceCent = await page.evaluate((el:any) => el?.textContent, centElement);
  
        // console.log(priceDollar);
        // console.log(priceCent);
      
        return {
            priceDollar,
            priceCent
        }
  
      } catch(err) {
        console.log('no price found for this element');
      }
    }


    export const getImage = async({ page }:any) => {


    // for each element try to retrieve the image url
    try {
        const imageElement = await page.$('.s-image');
        const image = await page.evaluate((el:any) => el?.src, imageElement);

        return image;
        // console.log(image);
      } catch(err) {
        console.log('no image found for element');
      }
    
    }


    export const getProductURL = async({ page }:any) => {
          // for each element try to receive page URL
    try {
        // url = await page.evaluate((el:any) => el.querySelector('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').href, page);
        const urlElement = await page.$('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal');
        const url = await page.evaluate((el:any) => el?.href, urlElement);

        return url;
        // console.log(url);
      } catch (err) {
        console.log('No URL found for this element');
      }
    }


    export const getReviewCount = async({ page }:any) => {
     // for each element try to receive product review count
     try {
        // get the sibling of the review count and move up to the common parent with the class 'a-size-base'
        const ratingCountElement = await page.$('.a-icon-star-small');
        // move up the dom to the closest parent with the class 'a-size-base'
        const reviewCountParent = await ratingCountElement?.$('....');
  
        const reviewElement = await reviewCountParent?.$('span a span');
        // get the text content of that element
        const reviewCount = await page.evaluate((el:any) => el?.textContent, reviewElement); 

        return reviewCount;
        // log the text content
        // console.log(rating);
      } catch (err) {
        console.log('No URL found for this element');
      }
    }
    
    export const getRating = async({ page }:any) => {
         // for each element try to receive product review count
          // for each element try to receive product rating
    try {
        // get the element that has the tet content `out of 5`
        const ratingCountElement = await page.$('.a-icon-star-small span');
        // get the text content of that element
        const rating = await page.evaluate((el:any) => el?.textContent, ratingCountElement); 

        return rating;
        // log the text content
        // console.log(rating);
      } catch (err) {
        console.log('No URL found for this element');
      }

    }