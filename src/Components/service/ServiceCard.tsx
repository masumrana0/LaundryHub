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
    <div className="border border-black w-[300px] h-[400px] p-1 rounded-lg">
      <Image
        width={300}
        className="h-[50%]"
        height={100}
        src={service.images[0]}
        alt="service img"
      />
      <div className="mt-3">
        <h2 className="text-2xl font-bold text-center">{service.title}</h2>
        <p className="text-center font-thin ">
          {service.details[0].slice(0, 120)}...
          <Link className="text-violet-400" href="/service/details">
            more
          </Link>
        </p>
        <div className="flex justify-center gap-5 mt-1">
          <button
            onClick={handleSelectService}
            className="rounded px-10 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600"
          >
            Select
          </button>
          <button className="rounded px-10 py-2 shadow-lg font-semibold bg-green-300 transition-colors duration-300 hover:bg-green-500 hover:text-white text-gray-600">
            <Link href={`serviceDetails/${service?._id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
