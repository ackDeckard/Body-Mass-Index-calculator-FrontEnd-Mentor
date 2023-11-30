import Image from "next/image";
import React from "react";

const GradientBackgroundTop = () => {
  return (
    <section className="h-[640px] w-full rounded-b-[35px] bg-gradient-290 from-color1 to-color2 px-6 lg:mb-[65px] lg:ml-6 lg:h-[737px] lg:w-[978px]">
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="logo"
        className="mx-auto pb-6 pt-8 md:pb-10 lg:ml-[116px] lg:pb-[127px] lg:pt-[75px]"
      ></Image>
      <h1 className="mb-6 text-center text-[48px] font-semibold leading-[52.8px] tracking-[-2.4px] text-Gunmetal md:px-7 lg:mb-0 lg:ml-[116px] lg:px-0 lg:pb-[35px] lg:text-left">
        Body Mass <span className="hidden md:block"></span> Index Calculator
      </h1>
      <p className="pb-12 text-center text-DarkElectricBlue lg:ml-[116px] lg:w-[465px] lg:text-left">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </section>
  );
};

export default GradientBackgroundTop;
