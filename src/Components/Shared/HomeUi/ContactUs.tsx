import {
  FaPhoneVolume,
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFeedback } from "@/Interface/feedback";
import { FieldError } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFeedback>();

  const onSubmit: SubmitHandler<IFeedback> = (data) => {
    console.log(data); // Replace this with your form submission logic
  };

  return (
    <div className="mx-auto mt-8 p-6 bg-white rounded-md shadow-lg">
      <div className="flex justify-center py-5 my-3">
        <h2 className="inline-block border-b-4 border-green-500 font-bold lg:text-5xl text-3xl my-10">
          Contact Us
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col">
        <form className="w-full lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              {...register("name", { required: "Your name is required" })}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors && errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: "Your message is required" })}
              id="message"
              name="message"
              placeholder="Write your message or Feedback"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              rows={4}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
        <div className="border my-5 lg:my-0  lg:mx-10"> </div>
        {/* ... Rest of the code */}
        <div className=" w-full  lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-500 text-lg  ">
            Our Vision: At Laundry Hub, we envision a future where laundry
            isn&apos;t just a chore but a rejuvenating experience. Our vision is
            to be the beacon of convenience and excellence, providing a Wash &
            Iron service that not only cleans clothes but transforms routines.
            Beyond stains, we aim to erase the burden of laundry, granting the
            gift of time and assurance. Our commitment to innovation,
            sustainability, and customer-centricity propels us towards a
            brighter, cleaner, and more convenient tomorrow for all who entrust
            their clothes to us.
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
      </div>
    </div>
  );
};

export default ContactUs;
