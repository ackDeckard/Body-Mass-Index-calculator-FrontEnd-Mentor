import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  image: string;
  children: ReactNode;
};

export const Card = ({ title, image, children }: Props) => {
  return (
    <article className="mb-4 h-auto w-full rounded-2xl bg-white p-6 shadow-[16px_32px_56px_0_rgba(143,174,207,0.25)] md:w-[335px] lg:w-[365px]">
      <div className="mb-4 flex items-center gap-4">
        <Image src={image} alt="" width={0} height={0} className="h-8 w-8" />
        <h4 className="text-[20px] font-semibold tracking-[-1px] text-Gunmetal">
          {title}
        </h4>
      </div>
      <p className="leading-6 text-DarkElectricBlue">{children}</p>
    </article>
  );
};
