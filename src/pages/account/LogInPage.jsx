import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../landingPage/components/Footer";
import Newsletter from "../landingPage/components/Newsletter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}/.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters, include a number, an uppercase letter, and a symbol.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid");
    }
  };

  return (
    <>
      <section
        id="logIn"
        className="mt-64 flex justify-center items-center mb-80 px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-2xl font-bold mb-4 text-center sm:text-3xl">
            Your Account
          </h1>
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register">
              <span className="text-blue-500 cursor-pointer">
                Register here.
              </span>
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-500"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </form>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FontAwesomeIcon icon={faGoogle} size="xl" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              <FontAwesomeIcon icon={faFacebookF} size="xl" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <FontAwesomeIcon icon={faMobileAlt} size="xl" />
            </button>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default LogInPage;
