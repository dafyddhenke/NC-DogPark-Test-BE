import db from "../db/connection";

export function getAllParks(): Promise<any[]> {
  return db
    .collection("parks")
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()));
}

export function addNewPark(): Promise<void> {
  const data = {
    park_name: "hello world",
  };
  return db.collection("parks").doc().set(data).then();
}
