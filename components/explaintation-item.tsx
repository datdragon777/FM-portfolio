"use client";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IExplaintationProp {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  isOpen: boolean;
}

const ExplaintationItem = ({
  id,
  title,
  subTitle,
  description,
  isOpen,
}: IExplaintationProp) => {
  return (
    <AccordionItem
      value={`item-${id}`}
      className={`px-5 py-4 rounded-md border-2 ${
        isOpen
          ? "bg-[#7278FF] border-[#7278FF] text-white"
          : "bg-white border-black text-black"
      }`}
    >
      <AccordionTrigger className="text-2xl font-medium uppercase justify-between p-0">
        <p className="text-left w-3/4">{title}</p>
      </AccordionTrigger>
      <AccordionContent className="py-4">
        <h4 className="text-xl font-medium mb-6">{subTitle}</h4>
        <p className="text-base mb-4">{description}</p>
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base font-bold">Hóng thêm</span>
          <ArrowRight size={25} />
        </Link>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ExplaintationItem;
