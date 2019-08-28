const firebase = require("firebase");
const dotenv = require("dotenv");
dotenv.config();

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE,
  projectId: process.env.FIREBASE_PROJECT_ID
};
// Initialize Firebase
firebase.initializeApp(config);

// Update Firebase database
function writeData(data) {
  firebase
    .database()
    .ref()
    .set({
      data: data
    });
}

function disconnectFirebase() {
  firebase.database().goOffline();
  console.log("Disconnected.");
}

module.exports = { writeData, disconnectFirebase };
