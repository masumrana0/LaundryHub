import { useUpdateProfileMutation } from "@/Redux/api/profileApi";
import { changeProfileUiSection } from "@/Redux/features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { logOut } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Notification from "../Shared/Notification/Notification";

interface IEmail {
  email: string;
}
const ChangeEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmail>();

  // route
  const router = useRouter();

  // redux
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.profile);
  const [profileUpdateMutation] = useUpdateProfileMutation();

  const onSubmit: SubmitHandler<IEmail> = async (data) => {
    const updatedProfile = await profileUpdateMutation(data);

    if (updatedProfile) {
      dispatch(changeProfileUiSection(2));
      logOut();
      router.push("/");
      Notification({
        description: "Your name has Changed. Please Login Again",
        placement: "topLeft",
      });
    }
  };

  return (
    <div className="mx-auto  lg:w-[30rem] p-10 border shadow-xl shadow-green-300 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="lg:mb-3">
          <h3 className="lg:text-xl text-md">Email</h3>
          <div className="border hover:border-green-400 py-2 px-4 rounded-lg focus:border-green-500 focus:outline-none m">
            <input
              {...register("email", { required: "Email is required" })}
              className="w-full outline-none focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter your first name"
              id="firstName"
              defaultValue={profile?.email}
            />
          </div>
          <p className="text-red-500 ms-2">{errors?.email?.message}</p>
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

export default ChangeEmail;
