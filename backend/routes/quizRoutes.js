import express from "express";
import {
  getAllQuizzes,
  getQuizzesByType,
} from "../controllers/quizController.js";

const router = express.Router();

// Route to get all quizzes
router.get("/", getAllQuizzes);

// Route to get quizzes by type
router.get("/:type", getQuizzesByType);

export default router;
