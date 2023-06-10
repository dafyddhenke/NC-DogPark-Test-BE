import db from "../connection";
import * as admin from "firebase-admin";
import parksData from "../data/test-data/parks.json";
import usersData from "../data/test-data/users.json";

const auth = admin.auth();

function deleteCollections() {
  return db.listCollections().then((collections) => {
    const parkDeletionPromises = collections.map((collection) =>
      collection.get().then((querySnapshot) => {
        const batch = db.batch();
        querySnapshot.docs.forEach((doc) => {
          batch.delete(doc.ref);
        });
        return batch.commit();
      })
    );
    return Promise.all(parkDeletionPromises);
  });
}

function deleteAllUsers() {
  return auth.listUsers().then((listUsersResult) => {
    const userDeletionPromises = listUsersResult.users.map((userRecord) => {
      auth.deleteUser(userRecord.uid);
    });
    return Promise.all(userDeletionPromises);
  });
}

function createParks() {
  const parkCreationPromises = parksData.map((park) =>
    db.collection("parks").add({
      name: park.park_name,
      description: park.description,
    })
  );
  return Promise.all(parkCreationPromises);
}

function createUsers() {
  const userCreationPromises = usersData.map((user) =>
    auth.createUser(user).then((createdUser) => {
      db.collection("users")
        .doc(createdUser.uid)
        .set({ email: createdUser.email });
    })
  );
  return Promise.all(userCreationPromises);
}

export function seedDatabase() {
  return deleteCollections()
    .then(() => {
      console.log("deleted collections");
      return deleteAllUsers();
    })
    .then(() => {
      console.log("deleted users");
      return createParks();
    })
    .then(() => {
      console.log("created parks");
      return createUsers();
    })
    .then(() => console.log("Seed successful"))
    .catch((error) => console.error("Error seeding the database:", error));
}