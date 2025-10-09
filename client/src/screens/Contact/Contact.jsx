import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import TextField from "../../components/textField/textField";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {

  return (
    <div className="">
      <Header />
      
      <div className="min-h-screen flex flex-col">
      {/* ===== Banner ===== */}
      <div>
        <image> <img src="src/assets/images/contact_banner.jpg" alt="Contact Banner" className="mx-auto h-80 object-cover rounded-lg shadow-md" />
        </image>
       {/*<h1 className="text-4xl font-bold">Contact Us</h1>*/}
      </div>

      {/* ===== Main Content ===== */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* === Contact Form === */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form className="flex flex-col space-y-4">
            <TextField
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
            <TextField
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 mb-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white w-full py-2.5 rounded-full font-medium hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* === Contact Details === */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Our Contact Info</h2>
          <br></br>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center space-x-3">
              <FiPhone className="text-blue-600 text-2xl" />
              <span>+49 123 456 789</span>
            </li>
            <br></br>
            <li className="flex items-center space-x-3">
              <FiMail className="text-blue-600 text-2xl" />
              <span>contact@yourcompany.com</span>
            </li>
            <br></br>
            <li className="flex items-center space-x-3">
              <FiMapPin className="text-blue-600 text-2xl" />
              <span>Pestalozzistrasse 9D, Bamberg, Germany</span>
            </li>
          </ul>
        </div>

      </div>

      {/* === Google Map Embed === */}
          <div className="mt-6 rounded-lg overflow-hidden">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.091908699347!2d10.8894!3d49.8904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a20d03b4b7350f%3A0x7e1c64f31ad71a7e!2sOtto-Friedrich-Universit%C3%A4t%20Bamberg!5e0!3m2!1sen!2sde!4v1696169812345!5m2!1sen!2sde"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
    </div>


      <Footer />
    </div>
  );
};

export default Contact;
