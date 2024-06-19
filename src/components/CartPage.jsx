import useCart from "./UseCart";
import Newsletter from "../pages/landingPage/components/Newsletter";
import Footer from "../pages/landingPage/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, removeItem, totalPrice, cartItemCount, updateQuantity } =
    useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  return (
    <>
      <section className="p-4 mt-32">
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div id="cartCards" className="flex flex-col gap-4 w-full lg:w-5/12">
            {cartItemCount === 0 ? (
              <p className="text-lg text-center mt-5">Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center shadow-lg rounded-lg overflow-hidden relative"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-40 h-40 object-cover"
                  />
                  <div className="flex flex-col flex-grow p-4">
                    <p className="text-lg font-bold mb-5">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="flex items-center justify-center mt-2 rounded-full border-2 border-gray-400 w-32">
                      <button
                        className="text-xl font-semibold px-3 py-1 rounded-lg"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        className="text-xl font-semibold px-3 py-1 rounded-lg"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="text-lg font-semibold mt-2">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              ))
            )}
          </div>
          <div id="cartOverview" className="flex flex-col justify-between">
            <h1 className="text-center lg:text-start mb-10">Order Overview</h1>
            <div className="border-2 border-gray-400 p-4 mb-10">
              <Link to="/register">
                <p className="text-blue-500">Create a new account or log in</p>
              </Link>
              <p>to the existing one for easier shopping.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-20 lg:gap-32 justify-between items-center">
                <p>Purchase amount</p>
                <p className="text-lg font-bold">${totalPrice}</p>
              </div>
              <button className="mt-5 py-2 px-8 bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold rounded-full">
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default CartPage;
