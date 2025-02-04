import axios from "axios";

const url = "http://localhost:5000";

// Save quiz results
export const saveResults = async (payload) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(`${url}/api/results/save`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error saving quiz results:", error);
    throw error;
  }
};
