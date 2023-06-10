import { addNewUser, getUserByID } from "../models/users.models";
import { Request, Response } from "express";

export function addUser(req: Request, res: Response) {
  addNewUser()
    .then(() => res.status(201).send())
    .catch((error: Object) => {
      console.error("Error creating user:", error);
      res.status(500).send("Internal Server Error");
    });
}

export function getUser(req: Request, res: Response) {
  getUserByID()
    .then((user) => res.status(200).send(user))
    .catch((error: Object) => {
      console.error("Error getting user:", error);
      res.status(500).send("Internal Server Error");
    });
}
