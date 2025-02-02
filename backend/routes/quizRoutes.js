import express from "express";
import {
  getAllQuizzes,
  getQuizzesByType,
  addQuizType,
  addQuestion,
  deleteQuizType,
  deleteQuestion,
} from "../controllers/quizController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllQuizzes);
router.get("/:type", getQuizzesByType);
router.post("/add-quiz", protect, admin, addQuizType);
router.post("/add-question", protect, admin, addQuestion);
router.delete("/:type", protect, admin, deleteQuizType);
router.delete("/delete-question", protect, admin, deleteQuestion);

export default router;
