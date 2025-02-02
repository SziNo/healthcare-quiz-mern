import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

// Use routes
app.use("/api/quizzes", quizRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}!`);
});
