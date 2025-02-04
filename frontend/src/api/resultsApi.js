import axios from "axios";

const url = "http://localhost:5000";

// Save quiz results
export const saveResults = async (payload) => {
  try {
    const response = await axios.post(`${url}/api/results/save`, payload);
    return response.data;
  } catch (error) {
    console.error("Error saving quiz results:", error);
    throw error;
  }
};
