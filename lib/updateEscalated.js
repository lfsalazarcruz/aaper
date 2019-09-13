const firebaseMethod = require("../firebase/firebaseStorage");

// Compare current position of items to previous scraped data
(async () => {
  console.log("Creating list...");
  await firebaseMethod.addEscalatedProducts();

  await setTimeout(firebaseMethod.disconnectFirebase(), 20000);
})();
