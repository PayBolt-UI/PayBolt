import { RoutePath } from '@/routes';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="flex  flex-col md:flex-row items-center justify-between md:space-y-0 mx-4 cardTheme rounded-lg px-10 py-10">
        <div className="flex flex-col">
          <div className="flex mb-4 gap-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
              <img
                src="/assets/images/CompanyLogo.png"
                alt="Bulkpe"
                className="w-6 h-6"
              />
            </div>

            <div className="text-2xl font-semibold flex items-end">PayBolt</div>
          </div>
          <div className="flex flex-col items-center">
            <address className="text-center not-italic mb-4">
              PayBolt Technologies Private Limited
              <br />
              Corporation Gymnastics Training Centre,
              <br />
              No.3, 89th Street, Ashok Nagar, Chennai,
              <br />
              Tamil Nadu, India - 600083
            </address>
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700"
              >
                <FaSquareXTwitter className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-700"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center">
          <Link to={RoutePath.HOME} className="mb-2 hover:text-gray-700">
            Home
          </Link>
          <Link
            to={RoutePath.SUB_PRODUCTS[0].path}
            className="mb-2 hover:text-gray-700"
          >
            Products
          </Link>
          <Link to={RoutePath.PRICING} className="mb-2 hover:text-gray-700">
            Pricing
          </Link>
          <Link to={RoutePath.CONTACT} className="mb-2 hover:text-gray-700">
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col ">
          <Link to="/terms-of-service" className="mb-2 hover:text-gray-700">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="mb-2 hover:text-gray-700">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="text-center mt-6">Copyright 2024 Company Name</div>
    </footer>
  );
};

export default Footer;
