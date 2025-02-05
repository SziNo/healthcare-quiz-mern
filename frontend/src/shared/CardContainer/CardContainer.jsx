import CardComponent from "./CardComponent";

const CardContainer = ({ items, buttonText, path, optionalFunc = null }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <CardComponent
          key={item._id}
          title={item.title}
          type={item.type}
          imageUrl={item.imageUrl || "/card-img.jpg"}
          buttonText={buttonText}
          path={path}
          id={item._id}
          optionalFunc={optionalFunc}
        />
      ))}
    </div>
  );
};

export default CardContainer;
