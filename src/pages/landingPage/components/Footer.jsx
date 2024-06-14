import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="w-full bg-blue-950">
      <div className="flex flex-col xl:flex-row xl:w-7/12 mx-auto mt-32 gap-10 lg:gap-0 pb-10 pt-20">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between border-b border-gray-400 pb-10">
          <Link to="/">
            <div>
              <h4 className="text-2xl text-yellow-500">ELECTRA</h4>
            </div>
          </Link>
          <div>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                size="xl"
                className="rounded-full p-4 text-blue-600"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className="rounded-full p-4 text-blue-600"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faYoutube}
                size="xl"
                className="rounded-full p-4 text-red-600"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                className="rounded-full p-4 text-purple-500"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row xl:w-7/12 mx-auto mt-10 gap-10 lg:gap-0 pb-20 text-white font-semibold items-center  justify-between">
        <p className="cursor-pointer">Shop</p>
        <p className="cursor-pointer">Contact</p>
        <p className="cursor-pointer">Account</p>
        <p className="cursor-pointer">About us</p>
      </div>
    </footer>
  );
}

export default Footer;
