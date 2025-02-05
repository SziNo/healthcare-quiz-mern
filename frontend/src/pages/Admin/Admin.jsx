import QuizTypes from "./QuizTypes";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleCreateNewQuiz = () => {
    navigate("/admin/add-quiz");
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gray-100 mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Admin Felület</h1>
      <QuizTypes />
      <Button onClick={handleCreateNewQuiz} className="my-6">
        Új kérdőív létrehozása
      </Button>
    </div>
  );
};

export default Admin;
