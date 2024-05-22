"use client";

import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import ButtonLink from "@/components/button-link";

interface MenuLinkProp {
  name: string;
  path: string;
}

const menuLinks: MenuLinkProp[] = [
  { name: "Sản phẩm", path: "/" },
  { name: "Về chúng tôi", path: "/" },
  { name: "Tài nguyên", path: "/" },
  { name: "Đăng nhập", path: "/" },
];

const MenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="w-8 h-8 flex items-center">
        <Menu size={32} className="text-[#7278FF]" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-6">
          {menuLinks.map((menuLink, index) => (
            <Link
              key={index}
              href={menuLink.path}
              className="uppercase font-medium py-3 border-b border-b-gray-300"
            >
              {menuLink.name}
            </Link>
          ))}

          <div className="mt-5">
            <ButtonLink href="/">Tham gia ngay</ButtonLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
