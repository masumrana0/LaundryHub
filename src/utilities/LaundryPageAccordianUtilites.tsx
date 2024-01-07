/**
 * Title: 'Laundry page accordion Utilites'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 12-12-2023
 *
 */

import { IAccordionItem, ILaundryProduct } from "@/Interface/types";
import fetchData from "@/fetchData(CSR)/fetchData";
import { useEffect, useState } from "react";
import menImg from "../../public/laundrypageimg/men.png";
import womenImg from "../../public/laundrypageimg/woman.png";
import homeImg from "../../public/laundrypageimg/home.png";
import { useGetAllCleaningProductQuery } from "@/Redux/api/serviceApi";

export const AccrodianContent = () => {
  // data collections
  const [datas, setData] = useState<ILaundryProduct[] | null>(null);

  const [menCollection, setMenCollection] = useState<ILaundryProduct[]>([]);
  const [womanCollection, setWomanCollection] = useState<ILaundryProduct[]>([]);
  const [homeCollection, setHomeCollection] = useState<ILaundryProduct[]>([]);

  const { data } = useGetAllCleaningProductQuery(null);
  const cleaningProducts = data?.data;
  useEffect(() => {
    if (data?.statusCode === 200) {
      setData(cleaningProducts);
    }
  }, [data]);

  // create new separte data collections
  if (datas) {
    datas?.map((data: ILaundryProduct) => {
      if (data?.category === "men") {
        const doesExist = menCollection.find(
          (isExist) => isExist?._id == data?._id
        );
        if (!doesExist) {
          return menCollection.push(data);
        }
      } else if (data?.category === "woman") {
        const doesExist = womanCollection.find(
          (isExist) => isExist?._id == data?._id
        );
        if (!doesExist) {
          return womanCollection.push(data);
        }
      } else {
        const doesExist = homeCollection.find(
          (isExist) => isExist?._id == data?._id
        );
        if (!doesExist) {
          return homeCollection.push(data);
        }
      }
    });
  }

  // accordion's data
  const accordionContent: IAccordionItem[] = [
    {
      id: 1,
      isOpen: false,
      title: "Men's Cloths",
      imgUrl: menImg,
      contents: menCollection,
    },
    {
      id: 2,
      isOpen: false,
      title: "Woman's Cloth",
      imgUrl: womenImg,
      contents: womanCollection,
    },
    {
      id: 3,
      isOpen: false,
      title: "Household & Accessories",
      imgUrl: homeImg,
      contents: homeCollection,
    },
  ];

  return accordionContent;
};
