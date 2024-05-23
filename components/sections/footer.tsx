"use client";

import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import React from "react";

const Footer = () => {
  const openPDF = (fileName: string) => {
    window.open(fileName, "_blank");
  };

  return (
    <Container>
      <div className="px-3 mb-4">
        <Link href="/">
          <Image src="/logo.svg" width={200} height={40} alt="logo" />
        </Link>
      </div>
      <div className="flex flex-wrap justify-between">
        {/* Fetures */}
        <div className="w-1/2 mb-2 px-3 md:w-1/5">
          <h4 className="mb-3 text-xl font-bold">Tính năng</h4>
          <ul className="mb-4">
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Quản lý danh mục đầu tư</Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Giám sát danh mục đầu tư</Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Báo cáo LP</Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Báo cáo nhà đầu tư khởi nghiệp</Link>
            </li>
          </ul>
        </div>

        {/* Our services */}
        <div className="w-1/2 mb-2 px-3 md:w-1/5">
          <h4 className="mb-3 text-xl font-bold">Dịch vụ</h4>
          <ul className="mb-4">
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">FM cho VC & PE</Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">FM cho công ty</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="w-1/2 mb-2 px-3 md:w-1/5">
          <h4 className="mb-3 text-xl font-bold">Tài nguyên</h4>
          <ul className="mb-4">
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Tin tức</Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Blog</Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Hệ thống hỗ trợ</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="w-1/2 mb-2 px-3 md:w-1/5">
          <h4 className="mb-3 text-xl font-bold">Công ty</h4>
          <ul className="mb-4">
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link className="cursor-pointer" href="../sales-policy">
                Chính sách bán hàng
              </Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link className="cursor-pointer" href="/privacy-policy">
                Chính sách bảo mật
              </Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link className="cursor-pointer" href="../term-of-use">
                Điều khoản sử dụng
              </Link>
            </li>
          </ul>
        </div>

        {/* FM */}
        <div className="w-1/2 px-3 md:w-1/5 md:order-1">
          <h4 className="mb-3 text-xl font-bold">FM</h4>
          <ul className="mb-3">
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Quản lý danh mục đầu tư</Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Giám sát danh mục đầu tư</Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Báo cáo LP</Link>
            </li>
            <li className="mb-2 text-base text-black hover:text-[#7278FF]">
              <Link href="/">Báo cáo nhà đầu tư khởi nghiệp</Link>
            </li>
          </ul>
          <ul className="w-full flex gap-5 md:gap-2 lg:gap-4">
            <li className="text-black hover:text-[#7278FF]">
              <Link href="/">
                <FaFacebook size={20} />
              </Link>
            </li>
            <li className="text-black hover:text-[#7278FF]">
              <Link href="/">
                <FaInstagram size={20} />
              </Link>
            </li>
            <li className="text-black hover:text-[#7278FF]">
              <Link href="/">
                <FaTwitter size={20} />
              </Link>
            </li>
            <li className="text-black hover:text-[#7278FF]">
              <Link href="/">
                <FaLinkedin size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
