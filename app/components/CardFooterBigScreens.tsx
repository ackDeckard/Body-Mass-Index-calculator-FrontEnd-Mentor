import React from "react";
import { Card } from "./Card";
import { SimpleBanner } from "./SimpleBanner";
import Image from "next/image";

export const CardFooterBigScreens = () => {
  return (
    <div className="hidden lg:grid lg:w-[1200px] lg:auto-rows-[min-content_min-content_min-content] lg:grid-cols-12 lg:gap-[32px] lg:pb-[120px]">
      <div className="lg:col-auto lg:col-start-1 lg:row-start-1">
        <SimpleBanner />
      </div>
      <div className="lg:col-start-8 lg:row-start-1">
        <Card title="Gender" image="/icon-gender.svg">
          The development and body fat composition of girls and boys vary with
          age. Consequently, a child&apos;s age and gender are considered when
          evaluating their BMI.
        </Card>
      </div>
      <div className="lg:col-start-3 lg:row-start-2">
        <Image
          src="/pattern-curved-line-right.svg"
          alt=""
          width={0}
          height={0}
          className="h-[122px] w-[94px]"
        />
      </div>
      <div className="lg:col-auto lg:col-start-5 lg:row-start-2">
        <Card title="Age" image="/icon-age.svg">
          In aging individuals, increased body fat and muscle loss may cause BMI
          to underestimate body fat content.
        </Card>
      </div>

      <div className="lg:col-auto lg:col-start-9 lg:row-start-2">
        <Card title="Muscle" image="/icon-muscle.svg">
          BMI may misclassify muscular individuals as overweight or obese, as it
          doesn&apos;t differentiate muscle from fat.
        </Card>
      </div>

      <div className="lg:col-auto lg:col-end-4 lg:row-start-3">
        <Card title="Pregnancy" image="/icon-pregnancy.svg">
          Expectant mothers experience weight gain due to their growing baby.
          Maintaining a healthy pre-pregnancy BMI is advisable to minimise
          health risks for both mother and child.
        </Card>
      </div>
      <div className="lg:col-auto lg:col-start-7 lg:row-start-3">
        <Card title="Race" image="/icon-race.svg">
          Certain health concerns may affect individuals of some Black and Asian
          origins at lower BMIs than others. To learn more, it is advised to
          discuss this with your GP or practice nurse.
        </Card>
      </div>
    </div>
  );
};
