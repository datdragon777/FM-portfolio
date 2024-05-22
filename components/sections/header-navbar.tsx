"use client";

import React from "react";
import { Menu } from "lucide-react";
import MenuMobile from "@/components/menu-mobile";
import Container from "@/components/container";
import ButtonLink from "@/components/button-link";
import Link from "next/link";
import Image from "next/image";

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

const HeaderNavbar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <div className="px-3 max-w-[180px] sm:max-w-[200px]">
          <Image
            src="/logo.svg"
            width={200}
            height={40}
            alt="logo"
            className=""
          />
        </div>
        <div className="hidden lg:flex lg:gap-6 xl:gap-7">
          {menuLinks.map((menuLink, index) => (
            <Link
              key={index}
              href={menuLink.path}
              className="font-normal text-base hover:text-[#7278FF]"
            >
              {menuLink.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block lg:pr-3">
          <ButtonLink href="/">Tham gia ngay</ButtonLink>
        </div>
        <div className="lg:hidden">
          <MenuMobile />
        </div>
      </div>
    </Container>
  );
};

export default HeaderNavbar;
