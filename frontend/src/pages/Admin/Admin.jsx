import QuizTypes from "./QuizTypes";
import AddNewQuiz from "./AddNewQuiz";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleCreateNewQuiz = () => {
    navigate("/admin/add-quiz");
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gray-100 mx-auto px-4 py-8">
      <AddNewQuiz />
      <QuizTypes />
    </div>
  );
};

export default Admin;
