import admin from "firebase-admin";

const serviceAccountPath = require("../../serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath),
  databaseURL: "nc-parks.firebaseapp.com",
});

const db = admin.firestore();

export default db;
