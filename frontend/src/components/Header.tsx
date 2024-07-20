import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-black-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex mb-3">
          <img
            className="w-auto h-20 mt-5 border-0"
            src="https://i.ibb.co/Kh3Jfkm/d4me.png"
            alt="d4me"
          />
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
