const admin = require("firebase-admin");
const serviceAccount = require("TODO");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "nc-parks.firebaseapp.com",
});

const db = admin.firestore();

module.exports = {
  db
};
