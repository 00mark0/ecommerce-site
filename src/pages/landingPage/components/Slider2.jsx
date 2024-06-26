import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import "../styles/Sliders.css";
import productsData from "../../../../public/products.json";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function Slider2() {
  const [products, setProducts] = useState([]);
  const [autoplaySpeed, setAutoplaySpeed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const fetchProducts = () => {
      const categories = ["laptops", "pc", "tv", "mobile", "tech_gear"];
      const productsByCategory = categories.map((category) =>
        productsData.filter((product) => product.category === category)
      );
      const secondSliderItems = productsByCategory
        .map((products) => products[14])
        .filter(Boolean);
      setProducts(secondSliderItems);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const timerStart = localStorage.getItem("timerStart");
    const now = new Date().getTime();
    const sixteenHours = 16 * 60 * 60 * 1000;

    if (!timerStart || now - timerStart > sixteenHours) {
      localStorage.setItem("timerStart", now);
      setAutoplaySpeed(0);
      setTimeLeft(sixteenHours / 1000);
    } else {
      const remainingTime = sixteenHours - (now - timerStart);
      setAutoplaySpeed(remainingTime);
      setTimeLeft(Math.floor(remainingTime / 1000));
    }

    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => Math.max(timeLeft - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  return (
    <div id="slideShow2" className="w-64 mx-auto cursor-pointer shadow-2xl">
      <Slider {...settings}>
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="no-underline"
          >
            <div className="slider-item flex flex-col justify-center items-center mt-10">
              <p className="text-red-500 text-lg font-semibold mb-4">
                Time left: {formatTime(timeLeft)}
              </p>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md h-48 lg:h-72 w-64 lg:w-96 bg-cover"
              />
              <h2 className="text-xl font-bold mt-4 mb-4">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <p className="slider-price mt-4">Sale: ${product.price}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default Slider2;
