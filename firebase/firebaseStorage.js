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
// async function setPreviousData() {
//   let ref = firebase.database().ref("/data");
// let data = (await ref.on("value", snapshot => snapshot.val()))
//   ? await ref.on("value", snapshot => snapshot.val())
//   : null;

//   console.log("===========> Here is the data:", data);

//   firebase
//     .database()
//     .ref()
//     .set({
//       previous: data
//     });
// }

const firebaseMethods = {
  setPreviousData: async () => {
    let ref = firebase.database().ref("/");
    let data = null;

    // ref.on("value", snapshot => {
    //   data = snapshot.val();
    // });

    ref
      .on(
        "value",
        async function(snapshot) {
          data = await snapshot.val();
          console.log("Here ===========", data);
        },
        async function(errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      )
      .then(
        firebase
          .database()
          .ref()
          .set({
            previous: data
          })
      )
      .catch(error => {
        console.log("ERROR!!!: ", error);
      });
  },

  writeData: async data => {
    firebase
      .database()
      .ref()
      .set({
        data: data
      });
  }
};

// Update Firebase current database
// async function writeData(data) {
//   firebase
//     .database()
//     .ref()
//     .set({
//       data: data
//     });
// }

// async function disconnectFirebase() {
//   firebase.database().goOffline();
//   console.log("Disconnected.");
// }

module.exports = firebaseMethods;
