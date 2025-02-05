import express from "express";
import {
  getAllQuizzes,
  getQuizzesByType,
  getQuizzesByTypeAdmin,
  addQuizType,
  addQuestion,
  deleteQuizType,
  deleteQuestion,
} from "../controllers/quizController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllQuizzes);
router.get("/:type", getQuizzesByType);
router.get("/admin/:type", protect, admin, getQuizzesByTypeAdmin);
router.post("/admin/add-quiz", protect, admin, addQuizType);
router.post("/admin/add-question", protect, admin, addQuestion);
router.delete("/admin/:type", protect, admin, deleteQuizType);
router.delete("/admin/delete-question", protect, admin, deleteQuestion);

export default router;
