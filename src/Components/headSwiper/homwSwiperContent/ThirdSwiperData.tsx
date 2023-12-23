/**
 * Title: 'Home Header Swiper content-3'
 * Description: 'This is I used LaundryHub home Header Swiper Content.'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

import Image from "next/image";
import icon1 from "../../../../public/HeaderSwiper/icons/slide-icon4.png";
import icon2 from "../../../../public/HeaderSwiper/icons/slide-icon5.png";
import icon3 from "../../../../public/HeaderSwiper/icons/slide-icon6.png";

const ThirdSwiperData = () => {
  const imageStyle: React.CSSProperties = {
    position: "relative",
    height: "80vh",
    backgroundImage: `
      linear-gradient(to right, rgba(222, 217, 219, 0.20), rgba(0, 150, 255, 0.7)),
      url("/HeaderSwiper/photo-5.jpg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    borderRadius: "5px",
  };

  return (
    <div className="  font-sans" style={imageStyle}>
      <div className="absolute top-40 right-32">
        <p className="lg:text-5xl tracking-tighter font-thin   mb-3">
          The Better Solution
        </p>
        <p className="font-bold  lg:text-5xl  mb-3">
          for <span className="text-green-600">DryCleaners</span>
        </p>

        <div className="mt-12">
          {/* first  */}
          <div className="flex  items-center gap-2 mb-5">
            <Image src={icon1} alt="icon" />
            <div>
              <p className="lg:text-xl font-thin text-gray-200  ">
                01.So Fast Delivery
              </p>
              <h3 className="font-semibold text-2xl text-[#ffc908]">
                {" "}
                Withthin 30 mins
              </h3>
            </div>
          </div>

          {/* second */}
          <div className="flex  items-center gap-2">
            <Image src={icon2} alt="icon" />
            <div>
              <p className="lg:text-xl tracking-tighter font-thin text-gray-300  ">
                02.Memberships
              </p>
              <h3 className="font-semibold text-2xl text-[#8dd7f7]">
                {" "}
                Eco Friendly
              </h3>
            </div>
          </div>
        </div>

        {/* Third */}
        <div className="flex  items-center gap-2 mt-5 mb-5">
          <Image src={icon3} alt="icon" />
          <div>
            <p className="lg:text-lg tracking-tighter font-thin text-gray-300">
              03.Make Your Day
            </p>
            <h3 className="font-semibold text-2xl text-[#40afac]">
              {" "}
              Best Offers
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSwiperData;
