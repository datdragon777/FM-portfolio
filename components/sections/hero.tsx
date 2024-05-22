"use client";

import React from "react";
import Container from "@/components/container";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import WorkHero from "../../public/work-hero.json";
import Lottie from "lottie-react";
import ButtonLink from "@/components/button-link";

const Hero = () => {
  const wordSets = [
    {
      words: [
        { text: "đem", className: "text-[#7278FF] leading-10 font-bold" },
        { text: "đến", className: "text-[#7278FF] leading-10 font-bold" },
        { text: "phần", className: "text-[#7278FF] leading-10 font-bold" },
        { text: "cho.", className: "text-[#7278FF] leading-10 font-bold" },
      ],
    },
    {
      words: [
        { text: "gia", className: "text-[#7278FF] leading-10 font-bold" },
        { text: "nhập", className: "text-[#7278FF] leading-10 font-bold" },
        { text: "FM.", className: "text-[#7278FF] leading-10 font-bold" },
      ],
    },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col">
          <div className="mb-4 px-1">
            <h1 className="text-center text-[35px] leading-10 font-semibold">
              Có làm thì mới có ăn
            </h1>
            <div className="flex justify-center items-center">
              <div className="lg:flex gap-2">
                <p className="text-center text-[35px] font-semibold">
                  Không dưng ai dễ
                </p>
                <TypewriterEffect
                  wordSets={wordSets}
                  className="text-[#7278FF] text-[35px]"
                  typingSpeed={0.1}
                  backspaceSpeed={0.05}
                  pauseTime={2}
                />
              </div>
            </div>
          </div>
          <h2 className="px-3 text-center font-medium text-base ">
            Khởi sự kinh doanh nội thất cực đơn giản cùng FurnitureMaker.vn
          </h2>
        </div>
        <div className="max-w-[500px]">
          <Lottie loop={true} animationData={WorkHero} />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <ButtonLink href="/" className="w-full h-12 md:w-[238px]">
            Bạn là con buôn
          </ButtonLink>
          <ButtonLink
            href="/"
            className="bg-white w-full h-12 md:w-[238px] text-black border-black hover:bg-white before:border-black"
          >
            Bạn là đối tác cung cấp
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
