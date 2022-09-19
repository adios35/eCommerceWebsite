import data from "../../data/data";
import Card from "./Card";
const MainPage = () => {
  console.log(data);
  return (
    <div className="product-wrapper mt-16 p-5">
      <h1 className="text-center text-3xl">Our Products</h1>
      <div className="w-xl mx-auto flex flex-wrap justify-around gap-5 pt-20">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              item={item}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
