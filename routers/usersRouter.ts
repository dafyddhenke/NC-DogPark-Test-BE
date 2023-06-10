const usersRouter = require('express').Router();
import { addUser, getUser } from "../controllers/users.controllers";

usersRouter.route('/').get(getUser);
usersRouter.route('/').post(addUser);

export default usersRouter;