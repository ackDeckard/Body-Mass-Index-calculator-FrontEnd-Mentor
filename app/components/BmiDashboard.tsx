"use client";
import React, { useState } from "react";
import Metric from "./Metric";
import Imperial from "./Imperial";

const BmiDashboard = () => {
  const [selected, setSelected] = useState("Metric");

  return (
    <section className="m-6 -mt-[170px] mb-[72px] rounded-2xl bg-white p-6 px-6 shadow-2xl md:mx-10 md:-mt-[276px] md:mb-[96px] md:p-8 lg:absolute  lg:left-[59%] lg:top-1/2 lg:mt-0 lg:min-h-[484px] lg:w-[564px]  lg:-translate-x-1/3 lg:-translate-y-2/3">
      <h4 className="text-2xl font-semibold tracking-[-1.2px] text-Gunmetal ">
        Enter your details below
      </h4>

      <div className="grid grid-flow-col justify-between py-6 md:grid-cols-2 md:justify-normal md:gap-6">
        <div className="flex items-center gap-[18px]">
          <input
            type="radio"
            name="imperial"
            value="Metric"
            onChange={(e) => setSelected(e.target.value)}
            checked={selected === "Metric"}
            className="h-[31px] w-[31px] hover:cursor-pointer hover:accent-pink-500"
          />
          <label className="peer font-semibold leading-6 text-Gunmetal">
            Metric
          </label>
        </div>
        <div className="flex items-center gap-[18px]">
          <input
            type="radio"
            name="imperial"
            value="Imperial"
            onChange={(e) => setSelected(e.target.value)}
            checked={selected === "Imperial"}
            className="h-[31px] w-[31px] hover:cursor-pointer hover:accent-pink-500"
          />
          <label className="font-semibold leading-6 text-Gunmetal ">
            Imperial
          </label>
        </div>
      </div>

      {selected === "Metric" && <Metric />}
      {selected === "Imperial" && <Imperial />}
    </section>
  );
};

export default BmiDashboard;
