import { useEffect, useState } from "react";
import productsData from "../../../../public/products.json";
import girlWithPhone from "../assets/girlWithPhone.jpg";
import { Link } from "react-router-dom";

function Phones() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const ids = [61, 62, 64, 63, 66, 67];
    const selectedProducts = productsData.filter((product) =>
      ids.includes(product.id)
    );
    setPhones(selectedProducts);
  }, []);

  return (
    <section
      id="phones"
      className="flex flex-col xl:flex-row xl:w-7/12 mx-auto mt-32 gap-10 lg:gap-0 pb-10"
    >
      <div className="p-4">
        <h4 className="text-center lg:text-start font-bold text-2xl mb-4">
          Phones
        </h4>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center items-center shadow-2xl p-4">
            <img
              src={girlWithPhone}
              alt="girl with a phone"
              className="bg-cover w-64 h-96 rounded-md"
            />
            <Link to="/mobiles">
              <p className="text-center mt-5 lg:ml-0 cursor-pointer text-blue-500 text-xl font-semibold">
                Phones Category
              </p>
            </Link>
          </div>
          <div
            id="phoneContainer"
            className="grid lg:grid-cols-3 gap-4 p-10 cursor-pointer"
          >
            {phones.map((phone) => (
              <Link to={`/product/${phone.id}`} key={phone.id}>
                <div className="flex flex-col items-center shadow-2xl p-4 rounded-md">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="w-32 h-32 object-cover mb-2 rounded-md"
                  />
                  <h2 className="text-lg font-bold text-center">
                    {phone.name}
                  </h2>
                  <p className="text-gray-500 text-center">
                    {phone.description}
                  </p>
                  <p className="mt-2 font-bold text-center">${phone.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Phones;
