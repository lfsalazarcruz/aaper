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

    for (let itemElement of itemsArray) {
      let place = await itemElement
        .$eval('span[class="zg-badge-text"]', element => element.innerText)
        .catch(error => {
          console.log(error);
        });

      let title = await itemElement
        .$eval('div[class="p13n-sc-truncated"]', element => element.innerText)
        .catch(error => {
          console.log(error);
        });

      let price = await itemElement
        .$eval('span[class="p13n-sc-price"]', element => element.innerText)
        .catch(error => {
          console.log(error);
        });

      let rating = await itemElement
        .$eval('span[class="a-icon-alt"]', element => element.innerText)
        .catch(error => {
          console.log(error);
        });

      let reviews = await itemElement
        .$eval(
          'a[class="a-size-small a-link-normal"]',
          element => element.innerText
        )
        .catch(error => {
          console.log(error);
        });

      let image = await itemElement
        .$eval("img", element => element.getAttribute("src"))
        .catch(error => {
          console.log(error);
        });

      let url = await itemElement
        .$eval('a[class="a-link-normal"]', element =>
          element.getAttribute("href")
        )
        .catch(error => {
          console.log(error);
        });

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
