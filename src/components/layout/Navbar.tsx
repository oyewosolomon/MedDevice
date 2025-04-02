import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex gap-2 items-center">
          <svg fill="#3b82f6" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 372"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Layer_5_15_"> <g> <g> <circle cx="120.862" cy="186" r="28.956"></circle> <path d="M120.862,221.955c-19.826,0-35.956-16.129-35.956-35.955s16.13-35.956,35.956-35.956s35.955,16.13,35.955,35.956 S140.688,221.955,120.862,221.955z M120.862,164.044c-12.107,0-21.956,9.85-21.956,21.956s9.849,21.955,21.956,21.955 c12.106,0,21.955-9.849,21.955-21.955S132.969,164.044,120.862,164.044z"></path> </g> <path d="M337,30H35C15.701,30,0,45.701,0,65v242c0,19.299,15.701,35,35,35h302c19.299,0,35-15.701,35-35V65 C372,45.701,356.299,30,337,30z M120.862,266.728c-44.514,0-80.729-36.214-80.729-80.728s36.215-80.729,80.729-80.729 c44.513,0,80.729,36.215,80.729,80.729S165.375,266.728,120.862,266.728z M263.867,162.313c0,6.065-4.935,11-11,11 c0,0-3.334,0.258-3.334,2.758c0,15.103,0,60.409,0,60.409c0,3.866-3.134,7-7,7s-7-3.134-7-7c0,0,0-45.307,0-60.409 c0-2.667-3.333-2.758-3.333-2.758c-6.065,0-11-4.935-11-11v-13.666c0-6.065,4.935-11,11-11c0,0,3.333-0.159,3.333-3.493 c0-3.418,0-13.674,0-13.674c0-3.866,3.134-7,7-7s7,3.134,7,7c0,0,0,10.256,0,13.674c0,2.917,3.334,3.493,3.334,3.493 c6.065,0,11,4.935,11,11V162.313z M331.867,196.146c0,6.065-4.935,11-11,11c0,0-3.334,0.091-3.334,2.257 c0,6.77,0,27.076,0,27.076c0,3.866-3.134,7-7,7s-7-3.134-7-7c0,0,0-20.307,0-27.076c0-2.583-3.333-2.257-3.333-2.257 c-6.065,0-11-4.935-11-11v-13.667c0-6.065,4.935-11,11-11c0,0,3.333-0.097,3.333-3.284c0-11.929,0-47.716,0-47.716 c0-3.866,3.134-7,7-7s7,3.134,7,7c0,0,0,35.787,0,47.716c0,3.438,3.334,3.284,3.334,3.284c6.065,0,11,4.935,11,11V196.146z"></path> </g> </g> </g> </g></svg>
            <a href="#" className="text-2xl font-bold text-blue-600">
              MedDevice
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="#stats" className="text-gray-700 hover:text-blue-600">
              Stats
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 p-2  text-gray-200 px-8  rounded-lg font-semibold hover:text-white transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600">
                Features
              </a>
              <a href="#stats" className="text-gray-700 hover:text-blue-600">
                Stats
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">
                Testimonials
              </a>
              <a href="#cta" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 text-gray-200 px-8  rounded-lg font-semibold hover:bg-gray-100 hover:text-white transition">
              Get Started
            </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
