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

// Helper function 1: compare if two objs have the same keys, if it does, it runs the next helper function
const helperMethod1 = {
  compareProductKeys: async (prev, curr) => {
    for (let key in prev) {
      if (curr.hasOwnProperty(key)) {
        await helperMethod2.compareItemPosition(prev[key], curr[key]);
      }
    }
    return curr;
  }
};

// Helper function 2: compare two sorted arrays and add a counter key, value to the current array of objs
const helperMethod2 = {
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

const helperMethod3 = {
  countCounterKeys: async obj => {
    let results = [];

    for (let key in obj) {
      for (let item of obj[key]) {
        if (item.counter > 0) {
          results.push({ ...item, category: key });
        }
      }
    }
    return results;
  }
};

const firebaseMethods = {
  // Update 'previous' key with 'current' key values.
  setPreviousData: async () => {
    let ref = firebase.database().ref("/");

    // Fetching one snapshot of the Firebase DB and updating the 'previous' key with the current 'data' key.
    ref.once("value", async snapshot => {
      const data = await snapshot.val();

      await firebase
        .database()
        .ref()
        .update({
          previous: data.data
        });
    });
  },

  // Updates 'data' key with the data passed as an argument
  writeData: async data => {
    await firebase
      .database()
      .ref()
      .update({
        data: data
      });
  },

  // Disconnect firebase from server
  disconnectFirebase: async () => {
    await firebase.database().goOffline();
    console.log("Disconnected.");
  },

  // Counts positions escalated by a product, relative to the previous scrape
  addCounterKey: async () => {
    let ref = firebase.database().ref("/");

    // Fetching one snapshot of the Firebase DB and updating the 'previous' key with the current 'data' key.
    ref.once("value", async snapshot => {
      const curdata = await snapshot.val();

      let cur = await helperMethod1.compareProductKeys(
        curdata.previous.scrapes,
        curdata.data.scrapes
      );

      await firebase
        .database()
        .ref("/data/")
        .update({
          scrapes: cur
        });
    });
  },

  // Push an array of products that escalated more than 1 spot on the list to Firebase DB.
  addEscalatedProducts: async () => {
    let ref = firebase.database().ref("/");

    ref.once("value", async snapshot => {
      const curdata = await snapshot.val();
      let cur = await helperMethod3.countCounterKeys(curdata.data.scrapes);

      await firebase
        .database()
        .ref("/data/")
        .update({
          escalated: cur
        });
    });
  }
};

module.exports = firebaseMethods;
