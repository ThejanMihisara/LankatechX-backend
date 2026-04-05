import express from "express";
import {
	createContactMessage,
	getAllContactMessages,
	deleteContactMessage,
} from "../controllers/contactController.js";

const contactRouter = express.Router();

contactRouter.post("/", createContactMessage);
contactRouter.get("/", getAllContactMessages);
contactRouter.delete("/:id", deleteContactMessage);

export default contactRouter;