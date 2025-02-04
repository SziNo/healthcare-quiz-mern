import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import QuizRadioField from "./QuizRadioField";
import { Button } from "@/components/ui/button";
import { getQuizByType } from "@/api/quizApi";

const Quiz = () => {
  const { type } = useParams();
  const [responses, setResponses] = useState([]);
  const defaultValue = "3";

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["quiz", type],
    queryFn: () => getQuizByType(type),
  });

  useEffect(() => {
    if (data?.length > 0) {
      const initialResponses = data[0].questions.map((question) => ({
        id: question._id,
        answer: defaultValue,
      }));
      setResponses(initialResponses);
    }
  }, [data]);

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
    if (data?.length > 0) {
      if (data[0].questions.length !== responses.length) {
        console.error("Mismatch in the number of questions and responses.");
        return;
      }

      const results = data[0].questions.reduce((arr, questionObj) => {
        const responseObj = responses.find((el) => el.id === questionObj._id);
        if (responseObj) {
          const newObj = {
            question: questionObj.question,
            answer: +responseObj.answer,
            questionType: questionObj.type,
          };
          arr.push(newObj);
        }
        return arr;
      }, []);

      const payload = {
        title: data[0].title,
        type: data[0].type,
        results,
      };

      console.log(payload);
      // Send payload to the backend or handle it accordingly
    }
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
    <div className="h-[90vh] p-4">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl py-6">{data[0].title}</h2>

        {data[0].questions.map((question) => (
          <QuizRadioField
            key={question._id}
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
