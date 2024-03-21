import { ISelectService } from "@/Interface/booking";
import { IService } from "@/Interface/service";
import { addSelectService } from "@/Redux/features/order/orderSlice";
import { useAppDispatch } from "@/Redux/hook";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ServiceCard = ({ service }: { service: IService }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSelectService = () => {
    const selectedService: ISelectService = {
      service: service?._id as string,
      title: service.title,
    };
    dispatch(addSelectService(selectedService));
    router.push("/laundry");
  };

  return (
    <div className="hover:scale-[1.2] transition-transform duration-1000 ease-in-out max-w-md  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl md:h-50">
      <div className="md:flex border-2 ">
        <div className="md:shrink-0">
          <Image
            className=" h-48 w-full   object-cover   md:w-48"
            width={500}
            height={500}
            src={service.images[2]}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg text-green-500 font-semibold">
            {service?.title}
          </div>

          <p className=" font-thin ">
            {service.details[0].slice(0, 120)}...
            <Link className="text-violet-400" href="/service/details">
              more
            </Link>
          </p>
          <div className="flex justify-center gap-5 mt-3">
            <button
              onClick={handleSelectService}
              className="rounded px-5 py-1 shadow-lg font-semibold bg-green-400 transition-colors duration-300 hover:bg-green-500  text-white  "
            >
              Select
            </button>
            <button className="rounded px-5  py-1  shadow-lg font-semibold bg-green-400 transition-colors duration-300 hover:bg-green-500  text-white  ">
              <Link href={`serviceDetails/${service?._id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
