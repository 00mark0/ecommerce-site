import laptops from "../assets/laptops.png";
import pcs from "../assets/pcs.png";
import tvs from "../assets/tvs.png";
import mobiles from "../assets/mobiles.png";
import techGear from "../assets/techGear.png";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <section
        id="categories"
        className="flex flex-col xl:w-7/12 mx-auto mt-5 gap-10 lg:gap-0 pb-10 px-4"
      >
        <h3 className="text-2xl font-bold mb-5 mt-10 text-center lg:text-start">
          Categories
        </h3>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between shadow-2xl p-8 text-center">
          <Link to="/laptops">
            <div className="flex flex-col cursor-pointer">
              <img src={laptops} alt="laptops" width={92} height={92} />
              <p>Laptops</p>
            </div>
          </Link>
          <Link to="/pcs">
            <div className="flex flex-col cursor-pointer">
              <img src={pcs} alt="pcs" width={92} height={92} />
              <p>PCs</p>
            </div>
          </Link>
          <Link to="/tvs">
            <div className="flex flex-col cursor-pointer">
              <img src={tvs} alt="tvs" width={92} height={92} />
              <p>TVs</p>
            </div>
          </Link>
          <Link to="/mobiles">
            <div className="flex flex-col items-center cursor-pointer">
              <img src={mobiles} alt="mobiles" width={92} height={92} />
              <p>Mobile Devices</p>
            </div>
          </Link>
          <Link to="/tech-gear">
            <div className="flex flex-col cursor-pointer">
              <img src={techGear} alt="tech_gears" width={92} height={92} />
              <p>Tech Gear</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Categories;
