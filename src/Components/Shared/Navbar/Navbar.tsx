import { useEffect, useState } from "react";
import DesktopScreenNavbar from "./DesktopScreenNavbar";
import MobileScreenNavbar from "./MobileScreenNavbar";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if running on the client-side
    setIsClient(true);
  }, []);

  return (
    <nav className="bg-green-100 text-black ease-in-out duration-300">
      {isClient && (
        <>
          <div className="hidden lg:block">
            <DesktopScreenNavbar />
          </div>
          <div className="lg:hidden">
            <MobileScreenNavbar />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
