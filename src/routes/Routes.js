import express from "express";
import { createAnime, deleteAnime, getAllanimes, getAnimeById, updateAnime } from "../controllers/Controller.js";

const router = express.Router();

router.get("/", getAllanimes);
router.get("/:id", getAnimeById);
router.post("/", createAnime);
router.delete("/:id", deleteAnime);
router.put("/:id", updateAnime);

export default router;
 