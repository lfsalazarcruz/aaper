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
const firebaseMethods = {
  setPreviousData: async () => {
    let ref = firebase.database().ref("/");

    ref.once("value", snapshot => {
      const data = snapshot.val();
      console.log("Data here ==========>", data.data);

      firebase
        .database()
        .ref()
        .update({
          previous: data.data
        });
    });
  },

  writeData: async data => {
    firebase
      .database()
      .ref()
      .update({
        data: data
      });
  },

  disconnectFirebase: async () => {
    firebase.database().goOffline();
    console.log("Disconnected.");
  }
};

module.exports = firebaseMethods;
