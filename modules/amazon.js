const puppeteer = require("puppeteer");

let browser = null;
let page = null;

// Constants
const BASE_URL = "https://amazon.com/";

const amazon = {
  initialize: async () => {
    console.log("Starting the scraper...");
    browser = await puppeteer.launch({
      // Check: https://github.com/GoogleChrome/puppeteer/issues/758
      // Issue with deploying puppeteer on heroku (with resolution)
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    page = await browser.newPage();

    await page.setRequestInterception(true);

    // Abort loading images and css styles when scraping to load faster
    page.on("request", request => {
      if (["stylesheet", "image", "font"].includes(request.resourceType())) {
        request.abort();
      } else {
        request.continue();
      }
    });

    await page.goto(BASE_URL, { waitUntil: "networkidle2" });
    console.log("Initialization completed...");
  },

  getListOfProducts: async link => {
    console.log(`Going to URL ${link}`);

    await page.goto(link, { waitUntil: "networkidle2" });

    await page.waitFor("#zg-ordered-list > li").catch(error => {
      console.log(error);
    });

    let itemsArray = await page.$$("#zg-ordered-list > li");
    let items = [];

    for (let item of itemsArray) {
      let place = (await item.$(
        'span[class="zg-badge-text"]',
        element => element.innerText
      ))
        ? await item.$eval(
            'span[class="zg-badge-text"]',
            element => element.innerText
          )
        : null;

      let title = (await item.$(
        'div[class="p13n-sc-truncated"]',
        element => element.innerText
      ))
        ? await item.$eval(
            'div[class="p13n-sc-truncated"]',
            element => element.innerText
          )
        : null;

      let price = (await item.$(
        'span[class="p13n-sc-price"]',
        element => element.innerText
      ))
        ? await item.$eval(
            'span[class="p13n-sc-price"]',
            element => element.innerText
          )
        : null;

      let rating = (await item.$(
        'span[class="a-icon-alt"]',
        element => element.innerText
      ))
        ? await item.$eval(
            'span[class="a-icon-alt"]',
            element => element.innerText
          )
        : null;

      let reviews = (await item.$(
        'a[class="a-size-small a-link-normal"]',
        element => element.innerText
      ))
        ? await item.$eval(
            'a[class="a-size-small a-link-normal"]',
            element => element.innerText
          )
        : null;

      let image = (await item.$("img", element => element.getAttribute("src")))
        ? await item.$eval("img", element => element.getAttribute("src"))
        : null;

      let url = (await item.$('a[class="a-link-normal"]', element =>
        element.getAttribute("href")
      ))
        ? await item.$eval('a[class="a-link-normal"]', element =>
            element.getAttribute("href")
          )
        : null;

      items.push({
        place,
        title,
        price,
        rating,
        reviews,
        image,
        url
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
