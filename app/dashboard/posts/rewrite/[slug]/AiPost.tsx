
import { Configuration, OpenAIApi } from 'openai';
import puppeteer from 'puppeteer';


export default function AiPost() {
    const client = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    });
  const onSubmit = async (e: any) => {
    e.preventDefault();


    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_HOST}/api/posts/rewrite/`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ url: url }),
    //   }
    // );

    // const data = await res.json();
       
    // console.log(data);
  };


  const batchSubmit = () => {



// (async () => {
// //   // Launch the browser
//   const browser = await puppeteer.launch();

//   // Create a page
//   const page = await browser.newPage();

//   // Go to your site
//   await page.goto('https://www.autods.com/blog/dropshipping-tips-strategies/dropshipping-clothes/');

//   // Query for an element handle.
//   const element:any = await page.waitForSelector('div > .class-name');

//   // Do something with element...
//   await element.click(); // Just an example.

//   // Dispose of handle
//   await element.dispose();

//   // Close browser.
//   await browser.close();
// })();


    }
    
 

  

  return (
    <>
   

  <form onSubmit={batchSubmit} className="flex flex-col gap-3">
    <input
      name="batch-url"
      id="batch-url"
      className="w-full p-5 bg-gray-100 rounded-md"
      placeholder="Content"
    />
    <button
      type="submit"
      className="bg-button text-white h-input w-full rounded-lg flex items-center justify-center"
    >
      FUCK
    </button>
  </form>
  </>
  
  )
}
