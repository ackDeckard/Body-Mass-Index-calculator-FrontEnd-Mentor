import React from "react";

export const SimpleBanner = () => {
  return (
    <section className="mb-14 mt-[72px] px-6 lg:w-[564px]">
      <h4 className="pb-8 text-center text-[32px] font-semibold leading-[35.2px] tracking-[-1.6px] text-Gunmetal lg:text-left">
        Limitations of BMI
      </h4>
      <p className="text-center leading-6 text-DarkElectricBlue lg:text-left">
        Although BMI is often a practical indicator of healthy weight, it is not
        suited for every person. Specific groups should carefully consider their
        BMI outcomes, and in certain cases, the measurement may not be
        beneficial to use.
      </p>
    </section>
  );
};
