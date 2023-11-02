
export const getTitle = async (page:any) => {
    try {
        // find the h2 tag in the page and log
        const titleElement = await page.$('#title span');
        // console.log('***********************************************************************************************');
        // log the text content of the h2 tag
        return await page.evaluate((el:any) => el?.textContent, titleElement)
        // console.log(title);
        } catch(err) {
          console.log('no title found for this element');
        }
 
    }




    export const getImage = async(page:any) => {

        const imgSources:any = [];
    // for each element try to retrieve the image url
    try {
        const featuredImageElement = await page.$('#landingImage');
        const thumbnailImageElements = await page.$$('.imageThumbnail img');
        const featuredImage = await page.evaluate((el:any) => el?.src, featuredImageElement);

        thumbnailImageElements.forEach(async (el:any) => {
            const imgSource = await page.evaluate((el:any) => el?.src, el);
            imgSources.push(imgSource);
        })

        return {
            featuredImage,
            thumbnails: imgSources
        }
      } catch(err) {
        console.log('no image found for element');
      }
    
    }


    export const getProductURL = async(page:any) => {

    try {
        // get page url
        return page.url();
        // console.log(url);
      } catch (err) {
        console.log('No URL found for this element');
      }
    }


    export const getReviewCount = async (page:any) => {
     // for each element try to receive product review count
     try {
        // get the sibling of the review count and move up to the common parent with the class 'a-size-base'
        const reviewCountElement = await page.$('#acrCustomerReviewText');

        // get the text content of that element
        const reviews = await page.evaluate((el:any) => el?.textContent, reviewCountElement); 

        return reviews;
        // log the text content
        // console.log(rating);
      } catch (err) {
        console.log('No URL found for this element');
      }
    }
    
    export const getRating = async (page:any) => {
         // for each element try to receive product review count
          // for each element try to receive product rating
    try {
        // get the element that has the tet content `out of 5`
        const ratingElement = await page.$('.a-icon-star span');
        // get the text content of that element
        const rating = await page.evaluate((el:any) => el?.textContent, ratingElement);     

        return rating;

      } catch (err) {
        console.log('No URL found for this element');
      }

    }


    export const getDescription = async (page:any) => {

        // get element containing this text ' Product Description  '
        const descriptionElement = await page.$('#productDescription p');


    }