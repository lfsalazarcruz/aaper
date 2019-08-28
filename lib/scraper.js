const amazon = require("../modules/amazon.js");
const urls = require("../urls.js");
const {
  writeData,
  disconnectFirebase
} = require("../firebase/firebaseStorage");

(async () => {
  await amazon.initialize();

  let obj = {};
  let results = [];

  for (let url of urls) {
    for (let i = 1; i <= 2; i++) {
      let productList = await amazon.getListOfProducts(`${url}${i}`);

      results = [...results, ...productList];
    }

    // Manipulating url string to create the JSON object with the appropriate keys
    // Slicing the first 36 characters from the URL.
    let t = url.slice(36);
    // Finding the index of the substring '/ref'
    let n = t.indexOf("/ref");
    // Getting rif off every character after the n variable
    // And replacing the substring 'zgbs/' with nothing.
    let s = t.substring(0, n != -1 ? n : s.length).replace("zgbs/", "");

    // Because some of the URLs are not in the same format, we repeat a similar process
    // If the URL still has a '/'
    if (s.indexOf("/") !== -1) {
      // Get the index of char '/'
      let temp = s.indexOf("/");
      // Get rid of everything after char '/' and replace '-' with a white space
      let k = s.substring(0, temp != -1 ? temp : k.length).replace("-", " ");
      // Create the key
      obj[k] = results;
      results = [];
      // If the URL doesn't have a '/' just create the key
    } else {
      obj[s] = results;
      results = [];
    }
  }

  let scrapes = {
    date: Date.now(),
    scrapes: obj
  };

  console.log("Finished updating file...");
  amazon.end();

  console.log("Updating database...");
  writeData(scrapes);

  // Currently not working. Still need to disconnect firebase after updating database
  // disconnectFirebase()
  console.log("Done");
})();
