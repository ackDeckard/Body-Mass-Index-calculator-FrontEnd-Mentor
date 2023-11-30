import React from "react";
import { TipsArticle } from "./TipsArticle";

export const TipsSection = () => {
  return (
    <section className="bg-gradient-290 from-tipsGradient1/25 to-tipsGradient2/25 py-14 lg:mb-[120px] lg:grid lg:h-[402px] lg:grid-flow-col lg:items-center lg:rounded-[35px]">
      <TipsArticle title="Healthy eating" image="/icon-eating.svg">
        Healthy eating promotes weight control, disease prevention, better
        digestion, immunity, mental clarity, and mood.
      </TipsArticle>
      <TipsArticle title="Regular exercise" image="/icon-exercise.svg">
        Exercise improves fitness, aids weight control, elevates mood, and
        reduces disease risk, fostering wellness and longevity.
      </TipsArticle>
      <TipsArticle title="Adequate sleep" image="icon-sleep.svg">
        Sleep enhances mental clarity, emotional stability, and physical
        wellness, promoting overall restoration and rejuvenation.
      </TipsArticle>
    </section>
  );
};
