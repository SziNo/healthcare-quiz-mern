import axios from "axios";

const url = "http://localhost:5000";

export const getAllQuizzes = async () => {
  const response = await axios.get(`${url}/api/quizzes`);
  return response.data;
};

export const getQuizByType = async (type) => {
  try {
    const response = await axios.get(`${url}/api/quizzes/${type}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz by type:", error);
    throw error;
  }
};

export const getQuizByTypeAdmin = async (type) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      `${url}/api/quizzes/admin/${type}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz by type:", error);
    throw error;
  }
};
