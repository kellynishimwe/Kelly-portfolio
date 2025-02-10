import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; 



const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          {/* Left Section */}
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            &copy; 2024 Kelly Nishimwe. All rights reserved.
          </p>

          {/* Right Section - Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/kellynishimwe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nishimwe-kelly-9664852b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/intent/retweet?tweet_id=1870091785340629094"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61558160842876"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
