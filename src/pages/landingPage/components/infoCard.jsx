import tag from "../assets/tag.png";
import discount from "../assets/discount.png";
import paymentPlan from "../assets/paymentPlan.png";
import delivery from "../assets/delivery.png";

function InfoCard() {
  return (
    <section
      id="infoCard"
      className="flex items-center justify-center gap-4 mx-auto mt-10 p-4"
    >
      <div className="shadow-2xl flex flex-col lg:flex-row gap-4 p-8">
        <div className="flex items-center">
          <img src={tag} alt="tag" />
          <p className="text-xl font-semibold">Best Deals</p>
        </div>
        <div className="flex items-center">
          <img src={discount} alt="discount" />
          <p className="text-xl font-semibold">Win Discounts</p>
        </div>
        <div className="flex items-center">
          <img src={paymentPlan} alt="payment plan" />
          <p className="text-xl font-semibold">Payment Plans</p>
        </div>
        <div className="flex items-center">
          <img src={delivery} alt="delivery" />
          <p className="text-xl font-semibold">Delivery</p>
        </div>
      </div>
    </section>
  );
}

export default InfoCard;
