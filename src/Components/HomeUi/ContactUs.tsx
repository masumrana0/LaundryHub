import {
  FaPhoneVolume,
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
      <p className="text-gray-500 text-lg  ">
        Our Vision: At Laundry Hub, we envision a future where laundry
        isn&apos;t just a chore but a rejuvenating experience. Our vision is to
        be the beacon of convenience and excellence, providing a Wash & Iron
        service that not only cleans clothes but transforms routines. Beyond
        stains, we aim to erase the burden of laundry, granting the gift of time
        and assurance. Our commitment to innovation, sustainability, and
        customer-centricity propels us towards a brighter, cleaner, and more
        convenient tomorrow for all who entrust their clothes to us.
      </p>
      <div className="flex   items-center text-xl my-2 gap-2 text-green-500">
        <FaPhoneVolume />
        <p>+8801644626735</p>
      </div>
      <div className="flex   items-center text-xl  gap-2 text-green-500">
        <FaEnvelopeOpen />
        <p>laundryhub@info.com</p>
      </div>
      <div className="flex  items-center text-lg my-5  gap-2 text-green-500">
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
  );
};

export default ContactUs;
