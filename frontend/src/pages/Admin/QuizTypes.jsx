import { useQuery } from "@tanstack/react-query";
import { getAllQuizzes } from "@/api/quizApi";
import { CardContainer } from "@/shared";

const QuizTypes = () => {
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
    <section>
      <h2 className="text-xl font-bold my-4 underline">Kérdőívek:</h2>
      <CardContainer
        items={data}
        buttonText="Kérdések megtekintése"
        path="/admin/quiz"
      />
    </section>
  );
};

export default QuizTypes;
