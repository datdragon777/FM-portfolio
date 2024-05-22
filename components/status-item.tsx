"use client";

import React from "react";

const StatusItem = ({ name, data }: { name: string; data: string }) => {
  return (
    <li className="w-full flex flex-col gap-1 md:col-span-3">
      <p className="text-white text-3xl font-bold leading-none text-center">
        {data}
      </p>
      <p className="text-black text-2xl font-medium leading-none text-center ">
        {name}
      </p>
    </li>
  );
};

export default StatusItem;
