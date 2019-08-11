const amazon = require("./modules/amazon.js");

const urls = [
  "https://www.amazon.com/Best-Sellers/zgbs/amazon-devices/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Amazon-Launchpad/zgbs/boost/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Appliances/zgbs/appliances/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Appstore-Android/zgbs/mobile-apps/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Arts-Crafts-Sewing/zgbs/arts-crafts/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Audible-Audiobooks/zgbs/audible/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Automotive/zgbs/automotive/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Baby/zgbs/baby-products/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Beauty/zgbs/beauty/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/best-sellers-music-albums/zgbs/music/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/best-sellers-camera-photo/zgbs/photo/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Cell-Phones-Accessories/zgbs/wireless/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers/zgbs/fashion/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Collectible-Coins/zgbs/coins/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Computers-Accessories/zgbs/pc/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Entertainment-Collectibles/zgbs/entertainment-collectibles/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Gift-Cards/zgbs/gift-cards/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Grocery-Gourmet-Food/zgbs/grocery/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Handmade/zgbs/handmade/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Health-Personal-Care/zgbs/hpc/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Home-Kitchen/zgbs/home-garden/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Industrial-Scientific/zgbs/industrial/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Kindle-Store/zgbs/digital-text/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Kitchen-Dining/zgbs/kitchen/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Magazines/zgbs/magazines/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/best-sellers-movies-TV-DVD-Blu-ray/zgbs/movies-tv/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Musical-Instruments/zgbs/musical-instruments/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Office-Products/zgbs/office-products/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Garden-Outdoor/zgbs/lawn-garden/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Pet-Supplies/zgbs/pet-supplies/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Prime-Pantry/zgbs/pantry/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/best-sellers-software/zgbs/software/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Sports-Outdoors/zgbs/sporting-goods/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Sports-Collectibles/zgbs/sports-collectibles/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Home-Improvement/zgbs/hi/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/Best-Sellers-Toys-Games/zgbs/toys-and-games/ref=zg_bs_pg_1?_encoding=UTF8&pg=",
  "https://www.amazon.com/best-sellers-video-games/zgbs/videogames/ref=zg_bs_pg_1?_encoding=UTF8&pg="
];

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

  debugger;
})();
