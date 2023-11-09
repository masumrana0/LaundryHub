import AboutSection from "@/Components/Shared/HomeUi/AboutSection";
import IntroduceService from "@/Components/Shared/HomeUi/IntroduceServices/IntroduceService";
import { FileDoneOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <div className=" lg:px-0">
      {/* introduce-section  */}
      <div className="mt-8 px-5">
        <IntroduceService />
      </div>

      {/* about Section  */}
      <div className=" bg-[#5cb8ff] lg:p-20 mt-10 p-5  lg:pt-0  ">
        <AboutSection />
      </div>
      {/* how to work section  */}
      <div className="mt-10 flex justify-center items-center">
        <table className="w-[500px]">
          <tbody>
            <tr className="">
              <td className="  shadow-lg p-2 w-[200px]">Alfreds Futterkiste</td>
              <td className="w-[60px] h-[60px]  rounded-full bg-blue-500  flex items-center  justify-center ">
                <FileDoneOutlined className="text-4xl bg-white" />
              </td>
              <td className="  shadow-lg p-2 w-[200px]">Alfreds Futterkiste</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
