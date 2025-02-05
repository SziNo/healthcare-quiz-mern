import { useQuery } from "@tanstack/react-query";
import { getAllQuizzes } from "@/api/quizApi";
import { CardContainer } from "@/shared";

const QuizQuestions = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getAllQuizzes,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching quizzes: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Eredmények</h2>
      <CardContainer
        items={data}
        buttonText="Kérdések megtekintése"
        path="/admin/quiz"
      />
    </div>
  );
};

export default QuizQuestions;
