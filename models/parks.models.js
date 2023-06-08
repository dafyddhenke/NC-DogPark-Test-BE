const { db } = require("../db/connection");

exports.getAllParks = () => {
  return db
    .collection("Parks")
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()));
};