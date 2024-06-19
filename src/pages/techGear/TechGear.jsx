import { useState, useEffect } from "react";
import productData from "../../../public/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Footer from "../landingPage/components/Footer";
import { Link } from "react-router-dom";
import useCart from "../../components/UseCart";

function TechGear() {
  const [techGear, setTechGear] = useState([]);
  const [sortMethod, setSortMethod] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const { addItem } = useCart();

  useEffect(() => {
    let filteredGear = productData.filter(
      (product) => product.category === "tech_gear"
    );

    if (selectedBrand) {
      filteredGear = filteredGear.filter(
        (gear) => gear.brand.toLowerCase() === selectedBrand
      );
    }

    switch (sortMethod) {
      case "highest":
        filteredGear.sort((a, b) => b.price - a.price);
        break;
      case "lowest":
        filteredGear.sort((a, b) => a.price - b.price);
        break;
      case "name":
        filteredGear.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setTechGear(filteredGear);
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
          <h1 className="text-2xl font-bold">Tech Gear</h1>
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
              <option value="logitech">Logitech</option>
              <option value="sony">Sony</option>
              <option value="amazon">Amazon</option>
              <option value="fitbit">Fitbit</option>
              <option value="samsung">Samsung</option>
              <option value="razer">Razer</option>
              <option value="elgato">Elgato</option>
              <option value="netgear">Netgear</option>
              <option value="bose">Bose</option>
              <option value="google">Google</option>
              <option value="jbl">JBL</option>
              <option value="oculus">Oculus</option>
              <option value="dji">DJI</option>
              <option value="canon">Canon</option>
              <option value="gopro">GoPro</option>
              <option value="sonos">Sonos</option>
              <option value="nintendo">Nintendo</option>
              <option value="ring">Ring</option>
            </select>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
            id="techGearGrid"
          >
            {techGear.map((gear) => (
              <div
                className="rounded overflow-hidden shadow-lg m-4 flex flex-col items-center"
                key={gear.id}
              >
                <Link
                  to={`/product/${gear.id}`}
                  className="w-full flex flex-col items-center text-decoration-none"
                >
                  <img
                    className="w-full rounded-md object-cover"
                    src={gear.image}
                    alt={gear.name}
                    style={{ minHeight: "250px" }}
                  />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-xl mb-2">{gear.name}</div>
                      <p className="text-gray-700 text-base">
                        {gear.description}
                      </p>
                    </div>
                    <div className="w-full pt-4 pb-2 flex justify-between items-center">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700">
                        ${gear.price}
                      </span>
                      <button
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                        type="button"
                        onClick={() => addItem(gear)}
                      >
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="text-black"
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TechGear;
