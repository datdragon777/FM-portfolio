"use client";

import Container from "@/components/container";
import StatusItem from "@/components/status-item";
import React from "react";

interface IStatusProp {
  name: string;
  data: string;
}

const statuses: IStatusProp[] = [
  {
    name: "Quản lý quỹ",
    data: "2000+",
  },
  {
    name: "Đất nước",
    data: "30+",
  },
  {
    name: "Trên thị trường",
    data: "6+",
  },
];

const Status = () => {
  return (
    <Container>
      <div className="px-3 flex justify-center items-center">
        <ul className="relative z-10 w-full flex flex-col justify-between gap-6 items-center bg-[#7278FF] py-5 rounded-[20px] sm:flex-row md:px-6 xl:max-w-[856px]">
          {statuses.map((status, index) => (
            <StatusItem key={index} {...status} />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Status;
