import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllQuizzes } from "@/api/quizApi";
import { CardContainer, EditQuizPopup } from "@/shared";

const QuizTypes = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getAllQuizzes,
  });

  const [editingQuiz, setEditingQuiz] = useState(null);

  const handleEditQuiz = (quiz) => {
    console.log("Editing Quiz:", quiz);
    setEditingQuiz(quiz);
  };

  const closeEditPopup = () => {
    setEditingQuiz(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching quizzes: {error.message}</div>;
  }

  return (
    <section>
      <h2 className="text-xl font-bold my-4 underline">Kérdőívek:</h2>
      <CardContainer
        items={data}
        buttonText="Kérdések megtekintése"
        path="/admin/quiz"
        optionalFunc={handleEditQuiz}
        optionalButtonText="Kérdőív szerkesztése"
      />
      {editingQuiz && (
        <EditQuizPopup quiz={editingQuiz} onClose={closeEditPopup} />
      )}
    </section>
  );
};

export default QuizTypes;
