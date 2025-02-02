import express from "express";
import {
  saveResults,
  deleteAllResults,
} from "../controllers/resultsController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/save", protect, saveResults);
router.delete("/delete", protect, admin, deleteAllResults);

export default router;
