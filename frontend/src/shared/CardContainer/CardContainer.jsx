import Card from "./Card";

const CardContainer = ({ items, buttonText }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card
          key={item._id}
          title={item.title}
          type={item.type}
          imageUrl={item.imageUrl || "/card-img.jpg"}
          buttonText={buttonText}
        />
      ))}
    </div>
  );
};

export default CardContainer;
