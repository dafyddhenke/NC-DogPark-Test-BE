import 'dotenv/config';
import admin, { ServiceAccount } from 'firebase-admin';

const env = process.env.NODE_ENV || "emulator";

if (env === "emulator") {
  process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';
  process.env.FIREBASE_AUTH_EMULATOR_HOST = '127.0.0.1:9099';
}

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID as string,
  privateKey: process.env.FIREBASE_PRIVATE_KEY as string,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export default db;
