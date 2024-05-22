"use client";

import React from "react";
import { InfiniteMovingImages } from "@/components/ui/infinite-moving-images";

interface IImageProp {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const images: IImageProp[] = [
  {
    src: "/ilavska.svg",
    width: 136,
    height: 50,
    alt: "ilavska",
  },
  {
    src: "/in-venture.svg",
    width: 149,
    height: 50,
    alt: "in-venture",
  },
  {
    src: "/momenta.svg",
    width: 61,
    height: 50,
    alt: "momenta",
  },
  {
    src: "/middlegame.svg",
    width: 200,
    height: 19,
    alt: "middlegame",
  },
];

const Brands = () => {
  return (
    <>
      <p className="text-center font-medium text-3xl leading-none mb-4">
        Được các tập đoàn lớn hàng đầu tin cậy
      </p>
      <div className=" rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingImages items={images} direction="right" speed="fast" />
      </div>
    </>
  );
};

export default Brands;
