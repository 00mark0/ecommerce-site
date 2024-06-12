import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Sliders.css";
import productsData from "../../../../public/products.json";

function Sliders() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      const laptops = productsData.filter(
        (product) => product.category === "laptops"
      )[0];
      const pcs = productsData.filter(
        (product) => product.category === "pc"
      )[0];
      const tvs = productsData.filter(
        (product) => product.category === "tv"
      )[0];
      const mobiles = productsData.filter(
        (product) => product.category === "mobile"
      )[0];
      const tech_gears = productsData.filter(
        (product) => product.category === "tech_gear"
      )[0];
      setProducts([laptops, pcs, tvs, mobiles, tech_gears]);
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id="slideShow">
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="slider-item flex flex-col justify-center items-center mt-10"
          >
            <img
              src={product.image}
              alt={product.name}
              className="slider-image"
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="slider-price">Sale: ${product.price}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Sliders;
