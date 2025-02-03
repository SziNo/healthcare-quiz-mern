import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllQuizzes } from "../../api/quizApi";

const Quizzes = () => {
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

  console.log(data);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Kérdőívek</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display data for now */}
    </div>
  );
};

export default Quizzes;
