import express from "express";
import { getAllanimes, getAnimeById } from "../controllers/Controller.js";

const router = express.Router();

router.get("/", getAllanimes);
router.get("/:id", getAnimeById);

export default router;
 