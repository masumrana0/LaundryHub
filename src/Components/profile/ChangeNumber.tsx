import { useUpdateProfileMutation } from "@/Redux/api/profileApi";
import { changeProfileUiSection } from "@/Redux/features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";
import Notification from "../Shared/Notification/Notification";

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
  const dispatch = useAppDispatch();
  const [profileUpdateMutation] = useUpdateProfileMutation();
  const profile = useAppSelector((state) => state.profile.profile);

  const onSubmit: SubmitHandler<INumber> = async (data) => {
    const updatedProfile = await profileUpdateMutation(data);
    if (updatedProfile) {
      dispatch(changeProfileUiSection(2));
      Notification({
        description: "Your Phone Number has Changed.",
        placement: "topLeft",
      });
    }
  };

  return (
    <div className="mx-auto lg:w-[30rem] p-10 border shadow-xl shadow-green-300 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Phone Number */}
        <div className="lg:mb-3">
          <h3 className="lg:text-xl text-md">PhoneNumber</h3>
          <div className="border hover:border-green-400 py-2 px-4 rounded-lg focus:border-green-500 focus:outline-none m">
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
                minLength: {
                  value: 11,
                  message: "Phone number should be at least 11 digits",
                },
                maxLength: {
                  value: 11,
                  message: "Phone number should be exactly 11 digits",
                },
              })}
              className="w-full outline-none focus:outline-none"
              type="number"
              name="phoneNumber"
              placeholder="Enter your phone number"
              id="phoneNumber"
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
