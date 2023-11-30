import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  image: string;
};

export const TipsArticle = ({ title, children, image }: Props) => {
  return (
    <article className=" px-6 md:grid md:grid-flow-col md:grid-cols-[max-content_1fr] md:items-center md:justify-start md:gap-10 md:px-10 lg:grid-flow-row lg:grid-cols-1 lg:justify-normal lg:gap-[45px]">
      <Image
        src={image}
        width={0}
        height={0}
        className="mb-8 h-16 w-16 lg:mb-0"
        alt=""
      />
      <div>
        <h4 className="mb-6 text-2xl font-semibold tracking-[-1.2px] text-Gunmetal">
          {title}
        </h4>

        <p className="mb-10 leading-6 text-DarkElectricBlue lg:mb-0 lg:w-[365px]">
          {children}
        </p>
      </div>
    </article>
  );
};
