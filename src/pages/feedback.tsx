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
import RootLayout from "@/Components/Layout/RootLayout";
import { ReactElement } from "react";
import ContactUs from "@/Components/Shared/HomeUi/ContactUs";

const FeedBack = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFeedback>();

  const onSubmit: SubmitHandler<IFeedback> = (data) => {
    console.log(data); // Replace this with your form submission logic
  };

  return (
    <div className="mx-auto container mt-8 p-6 bg-white rounded-md shadow-lg">
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
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default FeedBack;

FeedBack.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
