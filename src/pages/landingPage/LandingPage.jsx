import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import InfoCard from "./components/infoCard";
import Categories from "./components/Categories";
import Recommended from "./components/Recommended";
import Phones from "./components/Phones";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div className="w-full">
        <section
          id="saleSliders"
          className="flex flex-col xl:flex-row xl:w-7/12 mx-auto mt-32 gap-10 lg:gap-0 pb-10"
        >
          <Slider1 />
          <Slider2 />
        </section>
        <InfoCard />
        <Categories />
        <Recommended />
        <Phones />
      </div>
    </>
  );
}

export default LandingPage;
