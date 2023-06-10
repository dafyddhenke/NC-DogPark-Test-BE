import db from "../db/connection";

export function getAllParks(): Promise<any[]> {
  return db
    .collection("Parks")
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()));
}

export function addNewPark(): Promise<void> {
  const data = {
    park_name: "hello world",
  };
  return db.collection("Parks").doc().set(data).then();
}
