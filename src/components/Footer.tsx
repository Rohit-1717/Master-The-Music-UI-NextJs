import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-300">
            We’re a passionate music academy dedicated to nurturing talent
            through expert instruction in vocals, instruments, and theory. Join
            us to begin your musical journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: info@musicacademy.com</li>
            <li>Phone: +91-9876543210</li>
            <li>Location: Mumbai, India</li>
            <li>
              <a href="#" className="hover:underline">
                Get Directions
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl text-gray-300">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Music Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
