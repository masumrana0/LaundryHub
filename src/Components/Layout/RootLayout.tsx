import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
