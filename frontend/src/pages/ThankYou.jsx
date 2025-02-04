import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-gray-100 p-4 md:p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Köszönjük, hogy időt szánt a betegelégedettségi kérdőívünk kitöltésére,
        véleménye fontos számunkra!
      </h1>
      <Link to="/">
        <Button className="text-lg">Vissza a kezdőlapra</Button>
      </Link>
    </div>
  );
};

export default ThankYou;
