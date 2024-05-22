"use client";

import React, { useState } from "react";
import Container from "@/components/container";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ExplaintationItem from "@/components/explaintation-item";

interface IExplaintationProp {
  id: number;
  title: string;
  subTitle: string;
  description: string;
}

const explaintations: IExplaintationProp[] = [
  {
    id: 1,
    title: "Nhãn trắng",
    subTitle:
      "Khai mở tiềm năng thị trường, kiểm soát giá cả, chiếm thế cạnh tranh và hơn thế nữa",
    description:
      "White label products là cụm từ mô tả các sản phẩm hay dịch vụ được thực hiện và sản xuất bởi một bên thứ ba: Họ sẽ sản xuất sản phẩm/ dịch vụ và bán chúng cho các công ty, cá nhân khác mà không có bất kỳ yếu tố nào thể hiện thương hiệu. Sau khi nhận được sản phẩm, các công ty có thể tùy chỉnh các sản phẩm bằng cách đóng gói, in logo, nhận dạng thương hiệu,...",
  },
  {
    id: 2,
    title: "Chức năng khoá các sản phẩm độc quyền",
    subTitle: "Sông có thể cạn, núi có thể mòn nhưng quyền quyết định là ở bạn",
    description:
      " Trong thị trường bão hòa những sản phẩm nội thất mà “bạn-hẳn-đã-thấy-đâu-đó-rồi”, thì tùy biến chính là vượt trội. Furnituremaker.vn cho phép bạn cá nhân hóa từng chi tiết sản phẩm để tạo nên dấu ấn riêng biệt, bứt phá khỏi ranh giới gò bó và khẳng định vị thế dẫn đầu.",
  },
  {
    id: 3,
    title: "Trang riêng",
    subTitle:
      "Buôn bàn bán giường không bằng ăn dè ra trang kinh doanh cá nhân",
    description:
      " Bạn đang ấp ủ ý tưởng kinh doanh nhưng lại e dè vì chưa có kiến thức lập trình hay chi phí thiết kế web cao? Đừng lo lắng, giờ đây khởi nghiệp trở nên dễ dàng hơn bao giờ hết với nền tảng bán hàng của chúng tôi.",
  },
];

const Explaintation = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleOpenAccordion = (itemId: number | null) => {
    setOpenItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  return (
    <Container>
      <div className="w-full flex flex-col px-3 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col">
          <h3 className="text-3xl font-medium mb-6">Buôn có bạn, bán có</h3>
          <Accordion
            type="single"
            collapsible
            value={openItemId !== null ? `item-${openItemId}` : undefined}
            onValueChange={(value) =>
              handleOpenAccordion(value ? parseInt(value.split("-")[1]) : null)
            }
            className="flex flex-col gap-8 w-full md:w-[392px] lg:w-[480px] xl:w-[632px]"
          >
            {explaintations.map((explaintation) => (
              <ExplaintationItem
                key={explaintation.id}
                {...explaintation}
                isOpen={openItemId === explaintation.id}
              />
            ))}
          </Accordion>
        </div>
        <div className="mt-4 max-w-[336px] md:flex md:justify-end md:mt-0 md:pl-12 md:w-[300px] lg:pl-0 lg:w-[400px] xl:w-[550px]">
          <Image
            src="/why-choose.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="why-choose"
          />
        </div>
      </div>
    </Container>
  );
};

export default Explaintation;
