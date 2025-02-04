import axios from "axios";

const url = "http://localhost:5000";

export const getAllQuizzes = async () => {
  const response = await axios.get(`${url}/api/quizzes`);
  return response.data;
};

// Fetch quiz by type
export const getQuizByType = async (type) => {
  try {
    const response = await axios.get(`${url}/api/quizzes/${type}`);
    console.log("API Response:", response.data); // Debugging line
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz by type:", error);
    throw error;
  }
};
