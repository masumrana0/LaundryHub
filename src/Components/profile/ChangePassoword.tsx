import { IChangePassword } from "@/Interface/auth";
import { useUpdatePasswordMutation } from "@/Redux/api/profileApi";
import { changeProfileUiSection } from "@/Redux/features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";
import Notification from "../Shared/Notification/Notification";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>();

  // redux
  const dispatch = useAppDispatch();
  const [passwordUpdateMutation] = useUpdatePasswordMutation();

  const onSubmit: SubmitHandler<IChangePassword> = async (data) => {
    const updatedPassword = await passwordUpdateMutation(data);
    if (updatedPassword) {
      dispatch(changeProfileUiSection(2));
      Notification({
        description: "Your Password has Changed Successfully!.",
        placement: "topLeft",
      });
    }
  };

  return (
    <div className="py-10">
      <div className="mx-auto lg:w-[30rem] p-10 border shadow-lg shadow-green-300 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Phone Number */}
          <div className="lg:mb-3">
            <h3 className="lg:text-xl text-md">OldPassword</h3>
            <div className="border hover:border-green-400 py-2 px-4 rounded-lg focus:border-green-500 focus:outline-none m">
              <input
                {...register("oldPassword", {
                  required: "old password is required",
                })}
                className="w-full outline-none focus:outline-none"
                type="string"
                name="oldPassword"
                placeholder="Enter your old password"
                id="oldPassword"
              />
            </div>
            <p className="text-red-500 ms-2">{errors?.oldPassword?.message}</p>
          </div>
          <div className="lg:mb-3">
            <h3 className="lg:text-xl text-md">newPassword</h3>
            <div className="border hover:border-green-400 py-2 px-4 rounded-lg focus:border-green-500 focus:outline-none m">
              <input
                {...register("newPassword", {
                  required: "new password is required",
                })}
                className="w-full outline-none focus:outline-none"
                type="string"
                name="newPassword"
                placeholder="Enter your new password"
                id="newPassword"
              />
            </div>
            <p className="text-red-500 ms-2">{errors?.newPassword?.message}</p>
          </div>

          <div className="flex justify-center mt-3 lg:mt-5">
            <button
              type="submit"
              className="px-3 rounded bg-green-400 shadow-lg shadow-gray-400 hover:text-white font-semibold text-lg py-2 hover:bg-green-700 transition-colors duration-300 text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
