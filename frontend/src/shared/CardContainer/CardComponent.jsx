import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CardComponent = ({ title, path, type, imageUrl, buttonText }) => {
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
        <CardTitle className="md:text-lg">{`${title} kérdőív`}</CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-col justify-between items-center">
        <Link to={`${path}/${type}`} className="w-full">
          <Button variant="default" className="w-full">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
