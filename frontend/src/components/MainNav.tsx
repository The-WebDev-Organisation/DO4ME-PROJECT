import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <header className="bg-[#FCF8F1] bg-opacity-30 h-15">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 lg:h-14">
          {/* Navigation for larger screens */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10 pr-[20px]">
            <Link to="/" title="Home">Home</Link>
            <Link to="/services">services </Link>
            <Link to="/about" title="About" >About</Link>
            <Link to="/contact" title="Contact">Contact</Link>
          </div>

          <div className="flex items-center justify-between">
            <div className="hidden lg:flex space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to="/order-status" className="font-bold hover:text-blue-500 px-7 pt-2">
                    Booking Status
                  </Link>
                  <UsernameMenu />
                </>
              ) : (
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-[#68f0fa] rounded-full"
                  role="button"
                  onClick={async () => await loginWithRedirect()}
                >
                  Log In
                </Button>
              )}
              <Link
                to="/sign"
                className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                role="button"
              >
                Join Now
              </Link>
            </div>

            {/* Menu button for smaller screens */}
            <button
              className="lg:hidden text-black focus:outline-none ml-4"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown menu for smaller screens */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 space-y-2">
            <Link to="/" title="Home">Home</Link>
            <Link to="/services">services </Link>
            <Link to="/about" title="About" >About</Link>
            <Link to="/contact" title="Contact">Contact</Link>

            <Link
              to="/login"
              className="block px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-[#68f0fa] rounded-full"
              role="button"
            >
              Login
            </Link>

            <Link
              to="/sign"
              className="block px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
              role="button"
            >
              Join Now
            </Link>
          </div>
        )}
      </div>
    </header>
  </div>
  );
};

export default MainNav;
