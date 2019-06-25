const amazon = require("./modules/amazon.js");

(async () => {
  await amazon.initialize();

  let productList = await amazon.getListOfProducts(
    "https://www.amazon.com/Best-Sellers/zgbs/amazon-devices/ref=zg_bs_nav_0"
  );

  debugger;
})();
