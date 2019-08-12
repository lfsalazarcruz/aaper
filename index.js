const fs = require("fs");
const amazon = require("./modules/amazon.js");
const urls = require("./urls.js");

(async () => {
  await amazon.initialize();

  let obj = {};
  let results = [];

  for (let url of urls) {
    for (let i = 1; i <= 2; i++) {
      let productList = await amazon.getListOfProducts(`${url}${i}`);

      results = [...results, ...productList];
    }

    let t = url.slice(36);
    let n = t.indexOf("/ref");
    s = t.substring(0, n != -1 ? n : s.length);
    obj[s] = results;
    results = [];
  }
  let currentDate = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(
    `./amazonLists/productData-${currentDate}.json`,
    JSON.stringify(obj),
    "utf-8"
  );
})();
