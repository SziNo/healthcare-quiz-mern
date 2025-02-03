import axios from "axios";

const url = "http://localhost:5000";

// Fetch all quizzes
export const getAllQuizzes = async () => {
  const response = await axios.get(`${url}/api/quizzes`);
  return response.data;
};
