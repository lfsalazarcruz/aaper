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

const firebaseMethods = {
  // Update 'previous' key with 'current' key values.
  setPreviousData: async () => {
    let ref = firebase.database().ref("/");

    // Fetching one snapshot of the Firebase DB and updating the 'previous' key with the current 'data' key.
    ref.once("value", snapshot => {
      const data = snapshot.val();

      firebase
        .database()
        .ref()
        .update({
          previous: data.data
        });
    });
  },

  // Updates 'data' key with the data passed as an argument
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
  },

  addCounterKey: async () => {
    let ref = firebase.database().ref("/");

    // Fetching one snapshot of the Firebase DB and updating the 'previous' key with the current 'data' key.
    ref.once("value", snapshot => {
      const data = snapshot.val();
      const currentData = this.compareProductKeys(
        data.previous.scrapes,
        data.data.scrapes
      );

      firebase
        .database()
        .ref("data/")
        .update({
          scrapes: currentData
        });
    });
  },

  // Helper function 1: compare if two objs have the same keys, if it does, it runs the next helper function
  compareProductKeys: async (prev, curr) => {
    for (let key in prev) {
      if (curr.hasOwnProperty(key)) {
        compareItemPosition(prev[key], curr[key]);
      }
    }
    return objb;
  },

  // Helper function 2: compare two sorted arrays and add a counter key, value to the current array of objs
  compareItemPosition: async (prev, curr) => {
    for (let itema of prev) {
      let itemaPosition = prev.indexOf(itema);
      for (let itemb of curr) {
        if (itemb.title === itema.title) {
          let itembPosition = curr.indexOf(itemb);
          itemb.counter = itemaPosition - itembPosition;
        } else if (!itemb.hasOwnProperty("counter")) {
          itemb.counter = 0;
        }
      }
    }
    return curr;
  }
};

module.exports = firebaseMethods;
