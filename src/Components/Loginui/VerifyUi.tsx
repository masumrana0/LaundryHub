import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import verificationimg from "public/login/verify.png";
import Image from "next/image";
import { useSendVerificationEmailQuery } from "@/Redux/api/authApi";
import { authKey } from "@/constants/storageKey";
import { getUseAbleToken } from "@/services/auth.service";
import { useGetProfileQuery } from "@/Redux/api/profileApi";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/Redux/hook";
import { setIsLoading } from "@/Redux/features/Loading/loadingSlice";
import { set } from "react-hook-form";

const VerificationWaitingUi: React.FC = () => {
  const router = useRouter();
  const dispath = useAppDispatch();
  const [isEmailVerified, setEmailVerified] = useState(false);
  console.log("fast", isEmailVerified);
  const usersendVerificationEmailRequest = useSendVerificationEmailQuery(null);
  const { data } = useGetProfileQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 2000,
  });
  console.log(data)

  const [message, setMessage] = useState<string>(
    "Please Check Your E-mail for Verification"
  );
  const [timeLeft, setTimeLeft] = useState<number>(120);

  useEffect(() => {
    const intervel = setInterval(() => {
      if (isEmailVerified) {
        dispath(setIsLoading(false));
        router.push("/");
      }
    }, 2000);
    if (isEmailVerified) {
      clearInterval(intervel);
    }
  }, [isEmailVerified]);

  // for showing  toast
  useEffect(() => {
    if (usersendVerificationEmailRequest.data?.statusCode === 200) {
      toast.success("Check your Email and verify your account");
    }
  }, [usersendVerificationEmailRequest.data]);

  const reSendVerificationMail = () => {
    usersendVerificationEmailRequest.refetch();
    return;
  };

  // timimg utilites
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
      if (data?.statusCode === 200) {
        setEmailVerified(data?.data?.isEmailVerified);
      }
      console.log(data?.data.isEmailVerified);
      console.log("seting is emial verifiled ", isEmailVerified);
    }, 1000); // Update every second

    const countdown = setTimeout(() => {
      setMessage(
        "Your verification link has expired. Please request a new email."
      );
      clearInterval(timer);
    }, 120000);

    return () => {
      clearInterval(timer);
      clearTimeout(countdown);
    };
  }, []);
  console.log("last", isEmailVerified);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-green-400">
      <div className="  h-[100vh] lg:container text-white text-center flex justify-center items-center lg:flex-row lg:gap-0 gap-10 flex-col ">
        <div className="lg:w-[50%] w-[85%]  ">
          <Image src={verificationimg} width={600} alt="verification img" />
        </div>
        <div className="lg:w-[50%]  ">
          <h2 className="lg:text-5xl text-2xl  mb-2  font-thin   ">
            {message}
          </h2>
          <p className="lg:text-4xl text-2xl flex flex-col font-bold mb-4">
            Time remaining:
            <span className="font-extrabold lg:text-6xl text-4xl ">
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </span>
          </p>
          <button
            onClick={reSendVerificationMail}
            className="border-2 border-white rounded-xl px-5 py-2 shadow-lg shadow-gray-100 font-semibold bg-green-400 transition-colors duration-300 hover:bg-green-600 hover:text-white text-gray-600"
          >
            Resend mail
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationWaitingUi;
