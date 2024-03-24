import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { useGetFQAQuery } from "@/Redux/api/siteContentApi";
import { IFQA } from "@/Interface/home";
import UseCollapse from "../Shared/Collapse/Collapse";

const FQA = () => {
  const { data } = useGetFQAQuery(null);
  const fqas: IFQA[] = data;

  const FQAItems: CollapseProps["items"] = [];

  fqas?.forEach((fqa: IFQA, index) => {
    FQAItems.push({
      key: `${index + 1}`,
      label: (
        <div className="">
          <p className="font-bold text-sm md:text-lg  ">{fqa.question}</p>
        </div>
      ),
      children: <p className="font-semibold text-sm  px-5">{fqa.answer}</p>,
    });
  });

  return (
    <div className=" my-5 md:mb-20">
      <div className="flex justify-center">
        <h3 className="text-center font-bold sm:text-xl  md:text-2xl  lg:text-4xl lg:my-16 my-8 border-b-4 inline-block border-green-400 text-gray-700 ">
          {" "}
          Frequently Asked Questions
        </h3>
      </div>{" "}
      <UseCollapse items={FQAItems} />
    </div>
  );
};

export default FQA;
