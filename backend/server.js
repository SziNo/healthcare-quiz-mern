import express from "express";
import { connectDB } from "./config/db.js";
import { quizRoutes, userRoutes, resultsRoutes } from "./routes/index.js";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Use routes
app.use("/api/quizzes", quizRoutes);
app.use("/api/users", userRoutes);
app.use("/api/results", resultsRoutes);

// Serve static files in production
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}!`);
});
