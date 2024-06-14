import { useState, useEffect } from "react";
import productData from "../../../public/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Footer from "../landingPage/components/Footer";
import { Link } from "react-router-dom";

function MobileDevices() {
  const [phones, setPhones] = useState([]);
  const [sortMethod, setSortMethod] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    let filteredPhones = productData.filter(
      (product) => product.category === "mobile"
    );

    if (selectedBrand) {
      filteredPhones = filteredPhones.filter(
        (phone) => phone.brand.toLowerCase() === selectedBrand
      );
    }

    switch (sortMethod) {
      case "highest":
        filteredPhones.sort((a, b) => b.price - a.price);
        break;
      case "lowest":
        filteredPhones.sort((a, b) => a.price - b.price);
        break;
      case "name":
        filteredPhones.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setPhones(filteredPhones);
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
          <h1 className="text-2xl font-bold">Mobile Devices</h1>
          <div>
            <select
              name="sort"
              id="sort-dropdown"
              className="bg-gray-400 p-2 rounded-xl font-semibold"
              onChange={handleSortChange}
            >
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
              <option value="samsung">Samsung</option>
              <option value="oneplus">OnePlus</option>
              <option value="google">Google</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="motorola">Motorola</option>
              <option value="nokia">Nokia</option>
              <option value="lg">LG</option>
              <option value="sony">Sony</option>
              <option value="huawei">Huawei</option>
              <option value="asus">Asus</option>
              <option value="oppo">Oppo</option>
              <option value="vivo">Vivo</option>
              <option value="realme">Realme</option>
              <option value="zte">ZTE</option>
            </select>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 p-4"
            id="phonesGrid"
          >
            {phones.map((phone) => (
              <Link
                to={`/product/${phone.id}`}
                key={phone.id}
                style={{ textDecoration: "none" }}
              >
                <div className="max-w-xs rounded overflow-hidden shadow-2xl m-2 flex flex-col items-center min-h-full">
                  <img
                    className="w-full rounded-md bg-cover"
                    src={phone.image}
                    alt={phone.name}
                    style={{ height: "300px" }}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{phone.name}</div>
                    <p className="text-gray-700 text-base">
                      {phone.description}
                    </p>
                  </div>
                  <div className="w-full px-6 pt-4 pb-2 flex justify-between items-center">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      ${phone.price}
                    </span>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                      type="button"
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="text-black"
                      />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MobileDevices;
