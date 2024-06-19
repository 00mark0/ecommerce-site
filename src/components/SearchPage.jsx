import { useLocation } from "react-router-dom";
import productData from "../../public/products.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useCart from "./UseCart";
import { useState } from "react";
import Footer from "../pages/landingPage/components/Footer";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery();
  const searchQuery = query.get("query");
  const { addItem } = useCart();
  const [sortMethod, setSortMethod] = useState("");
  const [category, setCategory] = useState("");

  const handleSortChange = (e) => {
    setSortMethod(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value === "all" ? "" : e.target.value;
    setCategory(value);
  };

  const filteredProducts = productData
    .filter(
      (product) =>
        (searchQuery === null ||
          searchQuery === "" ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        (category === "" || product.category === category)
    )
    .sort((a, b) => {
      switch (sortMethod) {
        case "highest":
          return b.price - a.price;
        case "lowest":
          return a.price - b.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <>
      <section id="searchResults" className="mt-32">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 p-10">
          <h1 className="text-center lg:text-start mb-5 text-2xl font-medium">
            {searchQuery === null || searchQuery === "" ? (
              <span className="text-2xl font-bold">Shop</span>
            ) : (
              <>
                Search result for &quot;
                <span className="font-bold">{searchQuery}</span>&quot;
              </>
            )}
          </h1>
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
        <div className="flex flex-col items-center">
          <select
            name="sort"
            id="category-dropdown"
            className="bg-gray-400 p-2 rounded-xl font-semibold w-32"
            onChange={handleCategoryChange}
          >
            <option value="all">All</option>
            <option value="laptops">Laptops</option>
            <option value="pc">Pcs</option>
            <option value="tv">Tvs</option>
            <option value="mobile">Mobile Devices</option>
            <option value="tech_gear">Tech Gear</option>
          </select>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-16">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg w-full overflow-hidden shadow-2xl min-h-80 flex flex-col items-center"
                  style={{ minHeight: "300px" }}
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-56 h-56 object-cover rounded-md"
                    />
                  </Link>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                      <p className="text-gray-700 text-base mb-4">
                        {product.description}
                      </p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <p className="font-bold">${product.price}</p>
                      <button
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                        type="button"
                        onClick={() => addItem(product)}
                      >
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="text-black"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">No products found.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchPage;
