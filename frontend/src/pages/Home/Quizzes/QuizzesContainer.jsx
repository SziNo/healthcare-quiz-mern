import React from "react";
import QuizCard from "./QuizCard";

const QuizzesContainer = ({ quizzes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {quizzes.map((quiz, index) => (
        <QuizCard
          key={index}
          type={quiz.type}
          title={quiz.title}
          imageUrl="/card-img.jpg"
        />
      ))}
    </div>
  );
};

export default QuizzesContainer;
