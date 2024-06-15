import useCart from "./UseCart";
import Newsletter from "../pages/landingPage/components/Newsletter";
import Footer from "../pages/landingPage/components/Footer";

function CartPage() {
  const [cart, removeItem, clearCart] = useCart();

  return (
    <>
      <section>
        <div id="cartCards"></div>
        <div id="cartOverview"></div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default CartPage;
