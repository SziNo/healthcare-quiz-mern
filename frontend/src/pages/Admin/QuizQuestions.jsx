import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getQuizByTypeAdmin } from "../../api/quizApi";
import { Button } from "@/components/ui/button";
import { FaTrashAlt } from "react-icons/fa";

const QuizQuestions = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["quiz", type],
    queryFn: () => getQuizByTypeAdmin(type),
  });

  useEffect(() => {
    if (data?.length > 0) {
      setQuestions(data[0].questions);
    }
  }, [data]);

  const handleDeleteQuestion = (id) => {
    console.log(`Delete question with ID ${id}`);
    // Add your deletion logic here
  };

  const handleDeleteQuiz = () => {
    console.log(`Delete quiz with type ${type}`);
    // Add your deletion logic here
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching quiz data: {error.message}</div>;
  }

  if (!data?.length || !data[0].questions) {
    return <div>No quiz data available</div>;
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] p-4">
      <h2 className="font-bold text-2xl py-6">{data[0].title} kérdőív</h2>

      {questions.map((question) => (
        <div
          key={question._id}
          className="flex items-center gap-3 px-2 py-4 bg-gray-100 odd:bg-white even:bg-gray-60 shadow-md"
        >
          <div className="flex items-center gap-2">
            <Button
              variant="destructive"
              size="icon"
              onClick={() => handleDeleteQuestion(question._id)}
            >
              <FaTrashAlt />
            </Button>

            {/* More icon(s) in the future */}
          </div>
          <span className="flex-grow block font-semibold md:text-lg">
            {question.question}
          </span>
        </div>
      ))}

      <div className="flex justify-center mt-8 mb-4">
        <Button variant="destructive" size="lg" onClick={handleDeleteQuiz}>
          Kérdőív törlése
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestions;
