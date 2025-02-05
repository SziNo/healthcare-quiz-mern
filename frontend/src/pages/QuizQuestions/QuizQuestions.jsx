import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getQuizByTypeAdmin,
  deleteQuestion,
  deleteQuiz,
} from "../../api/quizApi";
import { Button } from "@/components/ui/button";
import { FaTrashAlt } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AddNewQuestion from "./AddNewQuestion";

const QuizQuestions = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [questions, setQuestions] = useState([]);
  const [deleteItem, setDeleteItem] = useState(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["quiz", type],
    queryFn: () => getQuizByTypeAdmin(type),
  });

  useEffect(() => {
    if (data?.length > 0) {
      setQuestions(data[0].questions);
    }
  }, [data]);

  const deleteQuestionMutation = useMutation({
    mutationFn: (questionId) => deleteQuestion(questionId),
    onSuccess: () => {
      queryClient.invalidateQueries(["quiz", type]);
    },
  });

  const deleteQuizMutation = useMutation({
    mutationFn: (quizType) => deleteQuiz(quizType),
    onSuccess: () => {
      queryClient.invalidateQueries(["quiz"]);
      navigate("/admin");
    },
  });

  const handleDeleteQuestion = (id) => {
    setDeleteItem({ type: "question", id });
  };

  const handleDeleteQuiz = () => {
    setDeleteItem({ type: "quiz", id: type });
  };

  const confirmDelete = () => {
    if (deleteItem.type === "question") {
      deleteQuestionMutation.mutate(deleteItem.id);
    } else {
      deleteQuizMutation.mutate(deleteItem.id);
    }
    setDeleteItem(null);
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="w-8 h-8">
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDeleteQuestion(question._id)}
                >
                  <FaTrashAlt className="w-full h-full" />
                </Button>
              </div>
            </AlertDialogTrigger>
            {deleteItem &&
              deleteItem.id === question._id &&
              deleteItem.type === "question" && (
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Biztosan törlöd a kérdést?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Ezzel véglegesen kitörlöd a kérdést. Biztos vagy benne?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setDeleteItem(null)}>
                      Mégse
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={confirmDelete}>
                      Törlés
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              )}
          </AlertDialog>

          <span className="flex-grow block font-semibold md:text-lg">
            {question.question}
          </span>
        </div>
      ))}

      <section className="flex flex-col md:flex-row justify-center md:justify-between items-start mt-8 mb-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 flex w-full">
          <AddNewQuestion type={type} />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">
            {data[0].title} kérdőív végleges törlése
          </h2>
          <p className="mb-4 font-semibold md:text-left">
            Ezzel véglegesen kitörlöd a kérdőívet és az összes hozzátartozó
            kérdést! <br />
            Ha biztos vagy benne, kattints a gombra!
          </p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="destructive"
                size="lg"
                className="uppercase"
                onClick={handleDeleteQuiz}
              >
                Kérdőív törlése
              </Button>
            </AlertDialogTrigger>
            {deleteItem && deleteItem.type === "quiz" && (
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Biztosan törlöd a kérdőívet?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Ezzel véglegesen kitörlöd a kérdőívet és az összes
                    hozzátartozó kérdést. Biztos hogy folytatod?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setDeleteItem(null)}>
                    Mégse
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={confirmDelete}>
                    Törlés
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialog>
        </div>
      </section>
    </div>
  );
};

export default QuizQuestions;
