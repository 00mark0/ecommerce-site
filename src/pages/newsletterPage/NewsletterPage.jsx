import { useState } from "react";
import "./NewsletterPage.css";

function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(String(phone));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    if (!validatePhone(value)) {
      setPhoneError(
        "Please enter a valid phone number in international format (+1234567890)."
      );
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="newsletterForm"
      className="mt-32 flex flex-col items-center justify-center px-4 mb-10"
    >
      <div className="mb-8 mt-8 text-center p-5 bg-gray-900 rounded-xl">
        <h1 id="logo" className="text-5xl font-bold text-yellow-500">
          ELECTRA
        </h1>
        <p className="text-md text-gray-400">Subscribe to our newsletter</p>
      </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email:"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 block w-full text-black border-b border-gray-400 p-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {emailError && (
              <p className="text-red-500 text-xs italic">{emailError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number (format +1234567890)"
              value={phone}
              onChange={handlePhoneChange}
              className="mt-1 block w-full text-black border-b border-gray-400 p-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {phoneError && (
              <p className="text-red-500 text-xs italic">{phoneError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              className="mt-1 block w-full text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="years"
              className="block text-sm font-medium text-gray-700"
            >
              Years:
            </label>
            <select
              name="years"
              id="years"
              className="mt-1 block w-full text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select</option>
              <option value="18 - 24">18 - 24</option>
              <option value="25 - 34">25 - 34</option>
              <option value="35 - 44">35 - 44</option>
              <option value="45 - 54">45 - 54</option>
              <option value="55 - 64">55 - 64</option>
              <option value="65+">65+</option>
            </select>
          </div>
          <div className="flex items-center w-full">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
              I agree to receive promotional messages
            </label>
          </div>
          <button
            type="submit"
            className="w-32 flex items-center justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterPage;
