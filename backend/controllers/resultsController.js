import Result from "../models/resultModel.js";
import asyncHandler from "express-async-handler";

// @desc    Save quiz results
// @route   POST /api/results
// @access  Public (Logged in users)
export const saveResults = asyncHandler(async (req, res) => {
  const { title, type, results } = req.body;
  const user = req.user._id;

  const result = new Result({ title, type, user, results });
  await result.save();

  res.status(201).json({ message: "Results saved successfully", result });
});

// @desc    Delete all quiz results
// @route   DELETE /api/results
// @access  Private/Admin
export const deleteAllResults = asyncHandler(async (req, res) => {
  await Result.deleteMany({});
  res.status(200).json({ message: "All quiz results deleted successfully" });
});
