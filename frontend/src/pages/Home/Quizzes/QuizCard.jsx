import React from "react";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuizCard = ({ title, type, imageUrl }) => {
  return (
    <Card className="flex flex-col p-2">
      <div className="w-full h-48 lg:h-60 overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <CardTitle className="md:text-lg">{title}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Link to={`/quiz/${type}`} className="w-full">
          <Button variant="default" className="w-full">
            Kérdőív kezdése
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
