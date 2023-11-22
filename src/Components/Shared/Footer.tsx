import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import {
  FaMobileRetro,
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhoneVolume,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-[#121921] mt-20 text-gray-200">
      <div className="container flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around mx-auto p-10 lg:p-20">
        {/* about site  */}
        <div className="lg:w-[35%]">
          <div className="flex items-center gap-2  mb-4">
            <Image src={logo} width="50" height="50" alt="logo" />
            <h2 className="font-bold text-2xl">LaundryHub</h2>
          </div>
          <p className="">
            Our Wash & Iron service is designed to make your life easier and
            more convenient. We understand the importance of clean and freshly
            pressed clothes in your daily routine. Whether you&apos;re a busy
            professional, a parent, or simply someone who values their time, our
            service is tailored to meet your laundry needs with the utmost care
            and quality.
          </p>
        </div>

        {/* quick link  */}

        <div>
          <h2 className="text-2xl "> </h2>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">Quick Link</h2>
            <Link className="hover:text-blue-500 text-xl" href="/service">
              Home
            </Link>
            <Link className="hover:text-blue-500 text-xl" href="/service">
              Service
            </Link>
            <Link className="hover:text-blue-500 text-xl" href="/profile">
              Profile
            </Link>
            <a className="hover:text-blue-500 text-xl" href="#about">
              About
            </a>
          </div>
        </div>

        {/* social media  */}

        <div>
          <h2 className="font-bold text-2xl mb-3">Social Media</h2>
          <Link
            className="mb-2 flex items-center text-xl gap-2 hover:text-blue-400"
            href="https://www.facebook.com/masumrana02/"
          >
            {" "}
            <FaFacebookF /> Facebook
          </Link>
          <Link
            className="mb-2 flex items-center text-xl gap-2 hover:text-blue-400"
            href="https://www.facebook.com/masumrana02/"
          >
            {" "}
            <FaInstagram /> Instagram
          </Link>
          <Link
            className="mb-2 flex items-center text-xl gap-2 hover:text-blue-400"
            href="https://www.facebook.com/masumrana02/"
          >
            {" "}
            <FaLinkedin /> Linkedin
          </Link>
          <Link
            className="mb-2 flex items-center text-xl gap-2 hover:text-blue-400"
            href="https://www.facebook.com/masumrana02/"
          >
            {" "}
            <FaYoutube /> YouTube
          </Link>
        </div>
      </div>
      <p className="text-center border-t-2 py-2 ">
        Copyright © 2023 LaundryHub. All Rights Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
