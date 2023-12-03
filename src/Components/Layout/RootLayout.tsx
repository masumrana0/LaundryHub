import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
