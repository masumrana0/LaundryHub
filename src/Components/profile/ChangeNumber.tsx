import { useForm, SubmitHandler } from "react-hook-form";
import { IName } from "@/Interface/user";
import { useAppSelector } from "@/Redux/hook";

interface INumber {
  phoneNumber: string;
}
const ChangePhoneNumber = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INumber>();

  // redux
  const profile = useAppSelector((state) => state.profile.profile);

  const onSubmit: SubmitHandler<INumber> = (data) => {
    console.log(data);
  };
  console.log(errors.phoneNumber?.message)

  return (
    <div className="mx-auto  w-[30%] p-10 border shadow-xl shadow-green-300 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Phone Number */}
        <div className="lg:mb-3">
          <h3 className="lg:text-xl text-md">PhoneNumber</h3>
          <div className="border hover:border-blue-400 py-2 px-4 rounded-lg focus:border-blue-500 focus:outline-none m">
            <input
              {...register("phoneNumber", { required:"phoneNumber is required", maxLength: 11 })}
              className="w-full outline-none focus:outline-none"
              type="number"
              name="phoneNumber"
              placeholder="Enter your first name"
              id="firstName"
              defaultValue={profile?.phoneNumber}
            />
          </div>
          <p className="text-red-500 ms-2">{errors?.phoneNumber?.message}</p>
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

export default ChangePhoneNumber;
