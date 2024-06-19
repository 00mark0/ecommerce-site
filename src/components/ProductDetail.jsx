import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../pages/landingPage/components/Footer";
import useCart from "../components/UseCart";
import "../styles/ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((products) => {
        const currentProduct = products.find(
          (product) => product.id === Number(id)
        );
        setProduct(currentProduct);

        const related = products
          .filter(
            (p) =>
              p.category === currentProduct.category &&
              p.id !== currentProduct.id
          )
          .slice(0, 4);
        setRelatedProducts(related);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem({ ...product, product });
    }
  };

  return (
    <>
      <section
        id="productDetail"
        className="flex flex-col xl:flex-row xl:w-7/12 mx-auto mt-32 gap-10 lg:gap-0 pb-10"
      >
        <div className="w-full shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            <div className="p-10">
              <img
                id="productImage"
                src={product?.image}
                alt={product?.name}
                width={500}
                height={500}
                className="rounded-md bg-cover"
              />
            </div>
            <div className="flex flex-col gap-10 lg:gap-0 justify-between p-20">
              <div>
                <h2
                  id="productName"
                  className="text-2xl font-bold text-center mb-3"
                >
                  {product?.name}
                </h2>
                <p
                  id="productPrice"
                  className="mt-2 font-bold text-center text-xl"
                >
                  ${product?.price}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                <button
                  onClick={handleAddToCart}
                  className="py-2 px-8 rounded-full bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="p-10">
            <p id="productBrand" className="text-xl font-bold text-center mb-3">
              {product?.brand}
            </p>
            <p
              id="productDescription"
              className="text-gray-500 text-center mb-2"
            >
              {product?.description}
            </p>
          </div>
        </div>
      </section>
      <section id="relatedProducts" className="p-10">
        <h2 className="font-bold text-2xl mb-5 text-center lg:text-start">
          Related Products
        </h2>
        <div className="flex flex-row justify-around flex-wrap">
          {relatedProducts.map((rp) => (
            <Link
              to={`/product/${rp.id}`}
              key={rp.id}
              className="max-w-sm rounded overflow-hidden shadow-2xl m-4 no-underline"
            >
              <div>
                <img src={rp.image} alt={rp.name} className="w-full h-64" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{rp.name}</div>
                  <p className="text-gray-700 text-base">${rp.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDetail;
