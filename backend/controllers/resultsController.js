import Result from "../models/resultModel.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import {
  sendPatientEmail,
  sendAdminNotification,
} from "../utils/emailConfig.js";

// @desc    Save quiz results
// @route   POST /api/results/save
// @access  Private (Logged in users)
export const saveResults = asyncHandler(async (req, res) => {
  const { title, type, results } = req.body;
  const user = req.user._id;

  const result = new Result({ title, type, user, results });
  await result.save();

  // Send email to patient
  await sendPatientEmail(req.user.email, results);

  // Find admin users
  const admins = await User.find({ isAdmin: true }).select("email");
  const adminEmails = admins.map((admin) => admin.email);

  // Send notification to admins
  await sendAdminNotification(adminEmails, results);

  res.status(201).json({ message: "Results saved successfully", result });
});

// @desc    Delete all quiz results
// @route   DELETE /api/results
// @access  Private/Admin
export const deleteAllResults = asyncHandler(async (req, res) => {
  await Result.deleteMany({});
  res.status(200).json({ message: "All quiz results deleted successfully" });
});
