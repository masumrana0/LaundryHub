import RootLayout from "@/Components/Layout/RootLayout";
import ContactUs from "@/Components/Shared/HomeUi/ContactUs";
import { ReactElement } from "react";

const FeedBack = () => {
  return (
    <div className="container mx-auto">
      <ContactUs />
    </div>
  );
};

export default FeedBack;

FeedBack.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
