import { useForm, SubmitHandler } from "react-hook-form";
import { IName } from "@/Interface/user";
import { useAppSelector } from "@/Redux/hook";

const ChangeName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IName>();

  // redux
  const profile = useAppSelector((state) => state.profile.profile);
  const name = profile?.name;
  const onSubmit: SubmitHandler<IName> = (data) => {
    // console.log(name);
  };

  return (
    <div className="mx-auto  w-[30%] p-10 border shadow-xl shadow-green-300 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* firstName */}
        <div className="lg:mb-3">
          <h3 className="lg:text-xl text-md">First Name</h3>
          <div className="border hover:border-blue-400 py-2 px-4 rounded-lg focus:border-blue-500 focus:outline-none m">
            <input
              {...register("firstName", { required: "First name is required" })}
              className="w-full outline-none focus:outline-none"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              id="firstName"
              defaultValue={name?.firstName}
            />
          </div>
          <p className="text-red-500 ms-2">{errors?.firstName?.message}</p>
        </div>

        {/* lastName */}
        <div className="lg:mb-3">
          <h3 className="lg:text-xl text-md">Last Name</h3>
          <div className="border hover:border-blue-400 py-2 px-4 rounded-lg focus:border-blue-500 focus:outline-none m">
            <input
              {...register("lastName", { required: "Last name is required" })}
              className="w-full outline-none focus:outline-none"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
              defaultValue={name?.lastName}
            />
          </div>
          <p className="text-red-500 ms-2">{errors?.lastName?.message}</p>
        </div>

        <div className="flex justify-center lg:mt-5">
          <button
            type="submit"
            className="px-3 rounded bg-green-400 shadow-lg shadow-gray-400 hover:text-white font-semibold text-lg py-2 hover:bg-green-700 transition-colors duration-300 text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeName;
