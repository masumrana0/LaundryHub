import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import FullName from "../Shared/FullName";
import Image from "next/image";
import privecyimg from "/public/profile/privecy.png";
import verifiedimg from "/public/profile/isVerified.png";
import { FaCircleXmark } from "react-icons/fa6";
import Link from "next/link";
import { useAppSelector } from "@/Redux/hook";

const HomeProfile = () => {
  const profile = useAppSelector((state) => state.profile.profile);
  const isEmailVerified = profile?.isEmailVerified;

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-1 mt-10 sm:mt-0  ">
        <Avatar size={64} icon={<UserOutlined />} />
        <h2 className="text-2xl md:text-3xl     font-bold  ">
          WelCome, <FullName name={profile?.name} />
        </h2>
        <p className="text-gray-500 text-xl my-4 text-center">
          Manage your info, privacy and security to make LaundryHub work better
          for you.
        </p>
      </div>

      <div className="">
        <div className="mt-3 flex flex-col lg:flex-row justify-center content-center  items-center flex-wrap gap-10 ">
          {/* card 1 */}
          <div className="xl:w-[30%]   border bg-gray-100  p-7 rounded ">
            <h3 className="sm:text-3xl md:text-4xl text-2xl  font-thin mb-4">
              Privacy & Personalisation
            </h3>
            <div className="flex  justify-start items-center">
              <p className="lg:text-xl">
                Privacy safeguards personal data, granting control over its use
                and ensuring confidentiality.
              </p>
              <Image src={privecyimg} width={100} alt="privecy" />
            </div>
          </div>
          {/* card 2 */}

          {isEmailVerified ? (
            <div className="xl:w-[30%]   border bg-gray-100 p-7 rounded ">
              <h3 className="md:text-3xl lg:text-3xl text-2xl  font-thin mb-4">
                Your account is Verified
              </h3>
              <div className="flex  justify-start items-center">
                <p className="lg:text-xl">
                  LaundryHub provide User verification ensures identity
                  authenticity, enhancing security and trust. It validates
                  users' legitimacy.
                </p>
                <Image src={verifiedimg} width={100} alt="privecy" />
              </div>
            </div>
          ) : (
            <div className="xl:w-[30%]   border bg-gray-100 p-7 rounded ">
              <h3 className="md:text-xl lg:text-3xl text-2xl  font-thin mb-4  ">
                Your account is{" "}
                <span className="font-bold text-red-600">not Verified</span>
              </h3>
              <div className="flex  justify-start items-center">
                <p className="lg:text-xl">
                  LaundryHub provide User verification ensures identity.Please
                  <Link href="/verified" className="text-violet-700 underline">
                    {" "}
                    verifiy your account
                  </Link>
                </p>
                <FaCircleXmark className="text-8xl text-red-500 " />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
