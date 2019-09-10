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

// Update 'previous' key with 'current' key values.
function setPreviousData() {
  let ref = firebase.database().ref("/");

  ref.on("value", snapshot => {
    const data = snapshot.val();
    console.log("===========> Here is the data:", data.data);

    // firebase
    //   .database()
    //   .ref()
    //   .set({
    //     previous: data.data
    //   });
  });
}

// Update Firebase current database
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

module.exports = { writeData, disconnectFirebase, setPreviousData };
