"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const ButtonLink = ({ children, href, className }: CustomButtonProps) => {
  return (
    <Button
      asChild
      className={cn(
        "relative rounded-none font-medium -top-1 -left-1 hover:top-0 hover:left-0 transition-all bg-[#7278FF] border-2 border-[#7278FF] hover:bg-[#7278FF] py-2.5 px-5 uppercase text-white before:contents-[''] before:absolute before:top-1.5 before:left-1.5 before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-2 before:border-[#7278FF] before:-z-10 before:transition-all",
        className
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default ButtonLink;
