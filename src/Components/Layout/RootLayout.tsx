import { Provider } from "react-redux";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { store } from "@/Redux/store";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </Provider>
    </div>
  );
};

export default RootLayout;
