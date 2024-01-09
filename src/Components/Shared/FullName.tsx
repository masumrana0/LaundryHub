import React from "react";
import { IName } from "@/Interface/user";

const FullName = ({ name }: { name: IName }) => {
  const { firstName, lastName } = name;
  return <span>{firstName + (lastName ? " " + lastName : "")}</span>;
};

export default FullName;
