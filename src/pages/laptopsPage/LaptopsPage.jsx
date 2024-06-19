import { useState, useEffect } from "react";
import productData from "../../../public/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Footer from "../landingPage/components/Footer";
import { Link } from "react-router-dom";
import useCart from "../../components/UseCart";

function LaptopsPage() {
  const [laptops, setLaptops] = useState([]);
  const [sortMethod, setSortMethod] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const { addItem } = useCart();

  useEffect(() => {
    let filteredLaptops = productData.filter(
      (product) => product.category === "laptops"
    );

    if (selectedBrand) {
      filteredLaptops = filteredLaptops.filter(
        (laptop) => laptop.brand.toLowerCase() === selectedBrand
      );
    }

    switch (sortMethod) {
      case "highest":
        filteredLaptops.sort((a, b) => b.price - a.price);
        break;
      case "lowest":
        filteredLaptops.sort((a, b) => a.price - b.price);
        break;
      case "name":
        filteredLaptops.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setLaptops(filteredLaptops);
  }, [sortMethod, selectedBrand]);

  const handleSortChange = (e) => {
    setSortMethod(e.target.value);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <>
      <section className="mt-48 lg:mt-32 w-full min-h-screen">
        <div className="flex justify-between items-center p-10">
          <h1 className="text-2xl font-bold">Laptops</h1>
          <div>
            <select
              name="sort"
              id="sort-dropdown"
              className="bg-gray-400 p-2 rounded-xl font-semibold"
              onChange={handleSortChange}
            >
              <option value="">Sort by</option>
              <option value="highest">Highest Price</option>
              <option value="lowest">Lowest Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start w-full mt-32">
          <div id="filters" className="p-4">
            <select
              name="brands"
              id="brand-dropdown"
              className="bg-gray-400 p-2 rounded-xl font-semibold"
              onChange={handleBrandChange}
            >
              <option value="">Brand</option>
              <option value="apple">Apple</option>
              <option value="acer">Acer</option>
              <option value="dell">Dell</option>
              <option value="hp">HP</option>
              <option value="lenovo">Lenovo</option>
              <option value="gigabyte">Gigabyte</option>
              <option value="tesla">Tesla</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-16">
            {laptops.map((laptop) => (
              <div
                className="rounded-lg w-full overflow-hidden shadow-2xl min-h-80 flex flex-col items-center"
                key={laptop.id}
                style={{ minHeight: "300px" }}
              >
                <Link to={`/product/${laptop.id}`}>
                  <img
                    className="w-56 h-56 object-cover rounded-md"
                    src={laptop.image}
                    alt={laptop.name}
                  />
                </Link>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="font-bold text-lg mb-2">{laptop.name}</h2>
                    <p className="text-gray-700 text-base mb-4">
                      {laptop.description}
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <p className="font-bold">${laptop.price}</p>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                      type="button"
                      onClick={() => addItem(laptop)}
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="text-black"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LaptopsPage;
