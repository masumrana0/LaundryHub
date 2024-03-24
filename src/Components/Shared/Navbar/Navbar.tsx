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
    <nav className="bg-gray-100 w-full ">
      {isClient && (
        <>
          <div className="hidden md:block">
            <DesktopScreenNavbar />
          </div>
          <div className="md:hidden">
            <MobileScreenNavbar />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
