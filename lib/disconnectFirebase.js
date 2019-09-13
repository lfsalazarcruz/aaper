const firebaseMethod = require("../firebase/firebaseStorage");

// Disconnecting firebase from backend
(async () => {
  console.log("Disconnecting...");
  await firebaseMethod.disconnectFirebase();
})();
