
import React from 'react'
import Dashboard from '@/app/dashboard/Dashboard'
import ScrapingManager from '@/ScrapingManager'
import puppeteer from 'puppeteer'
export default function Page() {

  (async () => {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized']
    })
    const page = await browser.newPage()
    await page.goto('https://www.google.com/search?q=+%22fitness+instructor%22%20AND%20%22%40gmail.com%22%20-intitle:%22profiles%22%20-inurl:%22dir/+%22+site:www.linkedin.com/in/+OR+site:www.linkedin.com/pub/')
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // get body
    const body = await page.evaluate(() => document.body.innerHTML)
    console.log(body)
  }
  )()
  return (
    <Dashboard>
        <h3>
            Scraper
        </h3>
    </Dashboard>
  )
}
