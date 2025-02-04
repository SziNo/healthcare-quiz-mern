import React, { useState } from "react";
import { useParams } from "react-router-dom";
import QuizRadioField from "./QuizRadioField";
import { Button } from "@/components/ui/button";

const Quiz = () => {
  const { type } = useParams();
  const [responses, setResponses] = useState([]);

  const questions = [
    { id: 1, text: "Question 1" },
    { id: 2, text: "Question 2" },
    { id: 3, text: "Question 3" },
    { id: 4, text: "Question 4" },
    { id: 5, text: "Question 5" },
    { id: 6, text: "Question 6" },
  ];

  const handleValueChange = (id, value) => {
    setResponses((prevResponses) => {
      const newResponses = [...prevResponses];
      const index = newResponses.findIndex((resp) => resp.id === id);

      index === -1
        ? newResponses.push({ id, answer: value })
        : (newResponses[index].answer = value);

      return newResponses;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send responses to backend
    console.log(responses);
  };

  return (
    <div className="h-[90vh] p-4">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl py-6">Quiz Type: {type}</h2>

        {questions.map((question) => (
          <QuizRadioField
            key={question.id}
            question={question}
            onValueChange={handleValueChange}
          />
        ))}

        <Button type="submit" className="my-6">
          Elküldés
        </Button>
      </form>
    </div>
  );
};

export default Quiz;
