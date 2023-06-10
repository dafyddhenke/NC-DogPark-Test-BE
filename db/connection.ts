import admin from "firebase-admin";
import * as path from 'path';

const serviceAccountPath = path.join(__dirname, '../config/serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath),
  databaseURL: "nc-parks.firebaseapp.com",
});

const db = admin.firestore();

export default db;
