import Quiz from "../models/quizModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get all quizzes
// @route   GET /api/quizzes
// @access  Public
export const getAllQuizzes = asyncHandler(async (req, res) => {
  const quizzes = await Quiz.find();

  if (quizzes) {
    res.status(200).json(quizzes);
  } else {
    res.status(404).json({ message: "No quizzes found!" });
  }
});

// @desc    Get quizzes by type
// @route   GET /api/quizzes/:type
// @access  Public
export const getQuizzesByType = asyncHandler(async (req, res) => {
  const { type } = req.params;
  const quiz = await Quiz.find({ type });

  if (quiz) {
    res.status(200).json(quiz);
  } else {
    res.status(404).json({ message: "Quiz type not found!" });
  }
});
