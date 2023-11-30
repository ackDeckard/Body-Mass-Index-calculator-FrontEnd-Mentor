import React from "react";
import { Card } from "./Card";
import { SimpleBanner } from "./SimpleBanner";
import { CardFooterBigScreens } from "./CardFooterBigScreens";

export const CardsFooterSection = () => {
  return (
    <div>
      <div className="lg:hidden">
        <SimpleBanner />
        <section className="mb-[96px] ml-[19px] mr-[29px] shadow-cardShadow md:flex md:flex-wrap md:justify-center md:gap-[15px] ">
          <Card title="Gender" image="/icon-gender.svg">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child&apos;s age and gender are considered when
            evaluating their BMI.
          </Card>
          <Card title="Age" image="/icon-age.svg">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </Card>
          <Card title="Muscle" image="/icon-muscle.svg">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn&apos;t differentiate muscle from fat.
          </Card>
          <Card title="Pregnancy" image="/icon-pregnancy.svg">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </Card>
          <Card title="Race" image="/icon-race.svg">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </Card>
        </section>
      </div>
      <CardFooterBigScreens />
    </div>
  );
};
