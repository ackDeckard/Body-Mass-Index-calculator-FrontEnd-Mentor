import BmiDashboard from "./components/BmiDashboard";
import { CardsFooterSection } from "./components/CardsFooterSection";
import GradientBackgroundTop from "./components/GradientBackgroundTop";
import { TipsSection } from "./components/TipsSection";
import { WhatItMeansText } from "./components/WhatItMeansText";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen lg:max-w-[1440px]">
      <GradientBackgroundTop />
      <BmiDashboard />
      <WhatItMeansText />
      <TipsSection />
      <CardsFooterSection />
    </main>
  );
}
