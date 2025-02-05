import axios from "axios";

const url = "http://localhost:5000";
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

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

export const deleteQuestion = async (questionId) => {
  try {
    const response = await axios.post(
      `${url}/api/quizzes/admin/delete-question`,
      { questionId },
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting question:", error);
    throw error;
  }
};

export const deleteQuiz = async (type) => {
  try {
    const response = await axios.delete(
      `${url}/api/quizzes/admin/${type}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting quiz:", error);
    throw error;
  }
};
