/**
 * Title: 'Home Header Swiper content-1'
 * Description: 'This is I used LaundryHub home Header Swiper Content'
 * Author: 'Masum Rana'
 * Date: 23-12-2023
 *
 */

const FirstSwiperData = () => {
  const imageStyle: React.CSSProperties = {
    position: "relative",
    // width: "100vw",
    height: "80vh",
    backgroundImage: `
      linear-gradient(to left, rgba(10, 1, 1, 0.475), rgba(100, 100,0.5)),
      url("/HeaderSwiper/photo-7.jpg")
    `,

    backgroundSize: "cover",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    borderEndEndRadius: "5px",
  };

  return (
    <div className="container mx-auto" style={imageStyle}>
      <div className="absolute top-72 left-52">
        <p className="lg:text-5xl tracking-tighter font-thin text-white mb-3">
          The Best Cleaning Service
        </p>
        <p className="font-bold text-white text-3xl mb-3">
          with{" "}
          <span className="text-green-400">
            EcoDrive<span className="text-black">&trade;</span>
          </span>
        </p>

        <div className="bottom-0 border-b-4 border-green-400 w-20 mb-4 "></div>
        <button className="rounded px-10 py-2 shadow-lg font-semibold  transition-colors duration-300 bg-green-500  text-white hover:bg-green-700 ">
          Get Clean
        </button>
      </div>
    </div>
  );
};

export default FirstSwiperData;
