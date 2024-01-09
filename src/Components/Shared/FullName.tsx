import { IName } from "@/Interface/user";
import React from "react";

const FullName = ({ name }: { name: IName }) => {
  const { firstName, lastName } = name;
  return <span>{firstName + " " + lastName}</span>;
};

export default FullName;
