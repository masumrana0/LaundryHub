import {
  FaMobileRetro,
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import Link from "next/link";
const ContactUs = () => {
  return (
    <div className=" ">
      <div className=" mx-auto mt-8 p-6 bg-white rounded-md shadow-lg">
        <div className="flex justify-center py-5 my-3">
          <h2 className="inline-block border-b-4 border-blue-500 font-bold lg:text-5xl text-3xl my-10">
            Contact Us
          </h2>
        </div>
        <div className="flex lg:flex-row flex-col">
          <form className="w-full lg:w-1/2">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message or Feedback"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
          <div className="border my-5 lg:my-0  lg:mx-10"> </div>

          <div className=" w-full  lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-500 text-lg  ">
              Our Vision: At Laundry Hub, we envision a future where laundry
              isn&apos;t just a chore but a rejuvenating experience. Our vision
              is to be the beacon of convenience and excellence, providing a
              Wash & Iron service that not only cleans clothes but transforms
              routines. Beyond stains, we aim to erase the burden of laundry,
              granting the gift of time and assurance. Our commitment to
              innovation, sustainability, and customer-centricity propels us
              towards a brighter, cleaner, and more convenient tomorrow for all
              who entrust their clothes to us.
            </p>
            <div className="flex   items-center text-xl my-2 text-blue-500">
              <FaMobileRetro />
              <p>+8801644626735</p>
            </div>
            <div className="flex   items-center text-xl  gap-2 text-blue-500">
              <FaEnvelopeOpen />
              <p>laundryhub@info.com</p>
            </div>
            <div className="flex  items-center text-lg my-5  gap-2 text-blue-500">
              <p>Follow us on</p>
              <Link href="https://www.facebook.com/masumrana02/">
                {" "}
                <FaFacebookF />
              </Link>
              <Link href="https://www.facebook.com/masumrana02/">
                {" "}
                <FaInstagram />
              </Link>
              <Link href="https://www.facebook.com/masumrana02/">
                {" "}
                <FaLinkedin />
              </Link>
              <Link href="https://www.facebook.com/masumrana02/">
                {" "}
                <FaYoutube />
              </Link>
              <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                {" "}
                <FaEnvelopeOpen />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
