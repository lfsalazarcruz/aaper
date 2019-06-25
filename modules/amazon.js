const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

let browser = null;
let page = null;

// Constants
const BASE_URL = "https://amazon.com/";

amazon = {
  initialize: async () => {
    console.log("Starting the scraper...");
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();

    await page.goto(BASE_URL, { waitUntil: "networkidle2" });
    console.log("Initialization completed...");
  },

  getListOfProducts: async link => {
    console.log(`Going to URL ${link}`);

    await page.goto(link, { waitUntil: "networkidle2" });

    // let titles = await page.evaluate(() => {
    //   const tds = Array.from(document.querySelectorAll(".p13n-sc-truncated"));
    //   return tds.map(td => td.innerHTML);
    // });

    let itemsArray = await page.$$("#zg-ordered-list > li");
    let items = [];

    for (let itemElement of itemsArray) {
      let item = await itemElement.$eval(
        'div[class="p13n-sc-truncated"]',
        element => element.innerText
      );

      let reviewCount = await itemElement.$eval(
        'div[class="a-icon-row a-spacing-none"]',
        element => element.innerText
      );

      items.push({
        title: item,
        reviews: reviewCount
      });
    }

    return items;
  },

  end: async () => {
    console.log("Stopping the scraper...");

    await browser.close();
  }
};

module.exports = amazon;
