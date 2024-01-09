import React from "react";
import { IName } from "@/Interface/user";

const FullName = ({ name }: { name: IName } | any) => {
  return (
    <span>
      {name?.firstName + (name?.lastName ? " " + name?.lastName : "")}
    </span>
  );
};

export default FullName;
