"use client";
import React from "react";
import Dashboard from "@/app/dashboard/Dashboard";
import ProductTable from "./ProductTable";
import URLForn from "./URLForn";

// import puppeteer from 'puppeteer'

 

export default async function Page() {
  const [products, setProducts] = React.useState<any>(null);

 
  // (async () => {
  //   const browser = await puppeteer.launch({
  //     headless: false,
  //     defaultViewport: null,
  //     args: [
  //       '--start-maximized',
  //     ]
  //   })
  //   const page = await browser.newPage()
  //   await page.goto(`https://www.google.com/search?&q=+%22fitness+instructor%22%20AND%20%22%40gmail.com%22%20-intitle:%22profiles%22%20-inurl:%22dir/+%22+site:www.linkedin.com/in/+OR+site:www.linkedin.com/pub/`)

  //   // wait for the button containing the text 'More results' to load
  //   await page.waitForSelector('span:contains("More results")')

  //   // remove all em tags but keep the text

  //   // get all span elements
  //   const elements = await page.$$('span')
  //   // loop through each element
  //   for (let element of elements) {
  //     // turn span into a string
  //     const span = await page.evaluate(element => element.outerHTML, element)

  //     // replace <em> tags with nothing
  //     const em = span.replace(/<em>/g, '').replace(/<\/em>/g, '')

  //     // get the emails
  //     const emailsData = em.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})/g)

  //     // if emails exist
  //     if(emailsData) {
  //     // push emails to emails array
  //     emails = [...emails, ...emailsData]
  //     }

  //   }
  //   console.log(emails)
  // }
  // )()
  return (
    <Dashboard>
      <h3>Scraper</h3>
      
      {!products && <URLForn setProducts={setProducts} />}
      {products && <ProductTable products={products} />}
    </Dashboard>
  );
}
