import DesktopScreenNavbar from "./DesktopScreenNavbar";
import MobileScreenNavbar from "./MobileScreenNavbar";

const Navbar = () => {
  return (
    <nav className="bg-[#396bb7] text-white ease-in-out duration-300">
      <div className="hidden lg:block">
        <DesktopScreenNavbar />
      </div>
      <div className="lg:hidden">
        <MobileScreenNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
