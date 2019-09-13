const firebaseMethod = require("../firebase/firebaseStorage");

// Compare current position of items to previous scraped data
(async () => {
  console.log("Creating list...");
  await firebaseMethod.addEscalatedProducts();

  console.log("Disconnecting Firebase...");
  setTimeout(firebaseMethod.disconnectFirebase, 30000);
})();
