import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../App.css";
import { Link } from "react-router-dom";
import Footer from "../landingPage/components/Footer";

function ContactPage() {
  const position = [51.505, -0.09];

  return (
    <>
      <section id="contact" className="p-10 mt-32 mb-64">
        <div className="flex flex-col items-center gap-10">
          <div className="h-80 w-full">
            <MapContainer
              center={position}
              zoom={14}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="flex flex-col bg-white md:flex-row gap-4 md:w-1/2">
            <div className="flex flex-col bg-yellow-500 text-black p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-2">
                <strong>Address:</strong> 123 E-commerce St, Shopping City
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="mb-2">
                <strong>Email:</strong> contact@example.com
              </p>
            </div>
            <div className="flex flex-col bg-white text-black p-8">
              <h2 className="text-2xl font-bold mb-4">More Info</h2>
              <p className="mb-2">
                Explore our{" "}
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  FAQ
                </a>{" "}
                section for answers to common questions.
              </p>
              <p className="mb-2">
                Join our mailing list for{" "}
                <Link
                  to="/newsletter"
                  className="text-blue-500 hover:text-blue-700"
                >
                  exclusive offers
                </Link>{" "}
                .
              </p>
              <p className="mb-2">
                Visit our{" "}
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  blog
                </a>{" "}
                for the latest news and updates.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;
