import { useEffect, useState } from "react";
import productsData from "../../../../public/products.json";
import { Link } from "react-router-dom";

function Recommended() {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const laptops = productsData.filter(
      (product) => product.category === "laptops"
    );
    const tvs = productsData.filter((product) => product.category === "tv");
    const tech_gear = productsData.filter(
      (product) => product.category === "tech_gear"
    );

    setRecommendedProducts([laptops[7], laptops[8], tvs[7], tech_gear[7]]);
  }, []);

  return (
    <section
      id="recommended"
      className="flex flex-col xl:flex-row xl:w-7/12 mx-auto mt-32 gap-10 lg:gap-0 pb-10 px-4"
    >
      <div className="flex flex-col">
        <h4 className="font-bold text-2xl mb-5 text-center lg:text-start">
          Recommended
        </h4>
        <div className="flex flex-col lg:flex-row space-x-4 shadow-2xl gap-4">
          {recommendedProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="grid grid-rows-4 items-start shadow-2xl p-4 rounded-md cursor-pointer min-w-64 min-h-32">
                <img
                  src={product.image}
                  alt={product.name}
                  className="lg:w-64 lg:h-48 mb-2 bg-cover row-span-2 rounded-md"
                />
                <h2 className="text-lg font-bold text-center mb-3">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-center mb-2">
                  {product.description}
                </p>
                <p className="mt-2 font-bold text-center">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recommended;
