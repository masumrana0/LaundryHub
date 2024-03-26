import { IUpdateName } from "@/Interface/user";
import { useUpdateProfileMutation } from "@/Redux/api/profileApi";
import { changeProfileUiSection } from "@/Redux/features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";
import Notification from "../Shared/Notification/Notification";

const ChangeName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateName>();

  // redux
  const dispatch = useAppDispatch();
  const [profileUpdateMutation] = useUpdateProfileMutation();
  const profile = useAppSelector((state) => state.profile.profile);
  const name = profile?.name;

  const onSubmit: SubmitHandler<IUpdateName> = async (data) => {
    const updatedProfile = await profileUpdateMutation(data);
    console.log(updatedProfile);

    if (updatedProfile) {
      dispatch(changeProfileUiSection(2));
      Notification({
        description: "Your name has Changed.",
        placement: "topLeft",
      });
    }
  };

  return (
    <div className="py-10">
      <div className="mx-auto  lg:w-[30rem] p-10 border shadow-xl shadow-green-300 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* firstName */}
          <div className="lg:mb-3">
            <h3 className="lg:text-xl text-md">First Name</h3>
            <div className="border hover:border-green-300 py-2 px-4 rounded-lg focus:border-green-500 focus:outline-none m">
              <input
                {...register("name.firstName", {
                  required: "First name is required",
                })}
                className="w-full outline-none focus:outline-none"
                type="text"
                name="name.firstName"
                placeholder="Enter your first name"
                id="firstName"
                defaultValue={name?.firstName}
              />
            </div>
            <p className="text-red-500 ms-2">
              {errors?.name?.firstName?.message}
            </p>
          </div>

          {/* lastName */}
          <div className="lg:mb-3">
            <h3 className="lg:text-xl text-md">Last Name</h3>
            <div className="border hover:border-green-400 py-2 px-4 rounded-lg focus:border-green-500 focus:outline-none m">
              <input
                {...register("name.lastName", {
                  required: "Last name is required",
                })}
                className="w-full outline-none focus:outline-none"
                type="text"
                name="name.lastName"
                placeholder="Enter your last name"
                id="lastName"
                defaultValue={name?.lastName}
              />
            </div>
            <p className="text-red-500 ms-2">
              {errors?.name?.lastName?.message}
            </p>
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
    </div>
  );
};

export default ChangeName;
