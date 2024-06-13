import newsletter from "../assets/newsletter.png";
import "../styles/Newsletter.css";

function Newsletter() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-20">
      <img
        id="newsletterIcon"
        src={newsletter}
        alt="newsletter"
        className="transform rotate-15"
      />
      <p className="text-center text-xl font-semibold">
        Sign up for our newsletter, don&apos;t miss our biggest discounts and
        sales
      </p>
      <button className="py-2 px-8 bg-yellow-400 rounded-full text-black font-semibold hover:bg-yellow-500">
        Sign Up
      </button>
    </div>
  );
}

export default Newsletter;
