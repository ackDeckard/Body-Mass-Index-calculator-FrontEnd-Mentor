import Image from "next/image";
import React from "react";

export const WhatItMeansText = () => {
  return (
    <section className="relative mb-[71px] h-[744px] bg-white md:grid md:h-[411px] md:grid-cols-2 md:items-center  md:gap-[75px] md:pr-12 lg:mx-auto lg:mb-[96px] lg:h-[533px] lg:w-[1160px] lg:gap-[131px]">
      <div className="relative z-10 md:h-full">
        <Image
          src="/image-man-eating.webp"
          width={0}
          height={0}
          className="mb-12 h-auto w-full bg-white md:hidden"
          alt=""
          unoptimized
        />
        <div className="relative hidden h-full md:block">
          <Image
            src="/image-removebg-preview(283) 1.png"
            width={0}
            height={0}
            className="top-0 hidden md:absolute md:z-30 md:block md:h-[412px] md:w-[319px] lg:hidden"
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/image-large.png"
            width={0}
            height={0}
            className="absolute left-1/2 top-1/2 hidden h-[533px] w-[468px] -translate-x-1/2 -translate-y-1/2 md:z-30 lg:block"
            alt=""
            unoptimized
          />
          <div className="absolute bottom-0 z-20 rounded-[32px] bg-[#E7F5FE] md:right-6 md:h-[300px] md:w-[435px] lg:left-1/2 lg:h-[388px] lg:w-[564px] lg:-translate-x-1/2"></div>
        </div>
      </div>

      <div className="relative px-6 md:px-0 lg:self-end lg:pb-10">
        <h4 className="mb-8 text-[32px] font-semibold leading-[35.2px] tracking-[-1.6px] text-Gunmetal lg:text-[48px] lg:leading-[52.8px] lg:tracking-[-2.4px]">
          What your BMI result means
        </h4>
        <p className="text-DarkElectricBlue md:h-auto lg:w-[465px] ">
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight.&apos; Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </p>
      </div>
      <Image
        src="/pattern-curved-line-left.svg"
        alt=""
        width={0}
        height={0}
        className="absolute -top-8 right-32 hidden h-[200px] w-[65px] lg:block"
      />
    </section>
  );
};
