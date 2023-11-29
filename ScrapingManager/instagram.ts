
import puppeteer from 'puppeteer'

export const scrapeInstagram = async (url: string) => {

  (async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized']
    })
    const page = await browser.newPage()
    await page.goto(`https://www.instagram.com/`)
    
    // wait for the network to be idle
    await page.waitForNetworkIdle()

    // login
    await page.type('[name="username"]', 'ryanchampin')
    await page.type('[name="password"]', 'Gowithyourgut15!')


    // wait 2 seconds
    await new Promise(r => setTimeout(r, 3000));
    // click the login button
    await page.click('[type="submit"]')


    // wait for the network to be idle
    await page.waitForNetworkIdle()
    // get the aria-label="search" element
    const search = await page.$('[aria-label="Search"]')

    // click the search element
    await search?.click()

    //wait for search bar to be visible
    await page.waitForSelector('[aria-label="Search input:visible"]')

    // type in the search bar shopify
    await page.type('[aria-label="Search input:visible"]', 'shopify')

    // press enter
    await page.keyboard.press('Enter')

    // wait for the network to be idle
    await page.waitForNetworkIdle()
  }
  )()
}