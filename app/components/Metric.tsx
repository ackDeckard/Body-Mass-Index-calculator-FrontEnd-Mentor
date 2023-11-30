"use client";
import React, { Suspense, useState } from "react";
import InputValue from "./InputValue";
import { CalculateBmi } from "./CalculateBmi";
import BmiSkeleton from "./BmiSkeleton";

// const recommendedWeightRanges = [
//   { height: "59''", minWeight: 41.28, maxWeight: 52.16 },
//   { height: "60''", minWeight: 42.64, maxWeight: 53.98 },
//   { height: "61''", minWeight: 44.0, maxWeight: 55.79 },
//   { height: "62''", minWeight: 45.36, maxWeight: 57.61 },
//   { height: "63''", minWeight: 46.72, maxWeight: 59.42 },
//   { height: "64''", minWeight: 48.08, maxWeight: 61.23 },
//   { height: "65''", minWeight: 50.0, maxWeight: 63.5 },
//   { height: "66''", minWeight: 51.36, maxWeight: 65.32 },
//   { height: "67''", minWeight: 52.72, maxWeight: 67.13 },
//   { height: "68''", minWeight: 54.08, maxWeight: 68.95 },
//   { height: "69''", minWeight: 55.44, maxWeight: 70.76 },
//   { height: "70''", minWeight: 57.28, maxWeight: 73.03 },
//   { height: "71''", minWeight: 58.64, maxWeight: 74.85 },
//   { height: "72''", minWeight: 60.0, maxWeight: 76.66 },
//   { height: "73''", minWeight: 61.36, maxWeight: 78.48 },
//   { height: "74''", minWeight: 62.72, maxWeight: 80.29 },
//   { height: "75''", minWeight: 64.42, maxWeight: 82.55 },
// ];

const Metric = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleHeight = (unit: number) => {
    setHeight(unit / 100);
  };

  const handleWeight = (unit: number) => {
    setWeight(unit);
  };

  //const renderBmi = height > 0 && weight > 0;

  // const findRecommendedWeight = (height: number) => {
  //   const rec = recommendedWeightRanges.find(
  //     (range) => parseInt(range.height) === height
  //   );
  //   return findRecommendedWeight;
  // };

  return (
    <section className="gap-6 md:grid md:grid-cols-2">
      <div className="mb-4 flex flex-col">
        <InputValue label="Height" onValueChange={handleHeight}>
          cm
        </InputValue>
      </div>

      <div className="flex flex-col ">
        <InputValue label="Weight" onValueChange={handleWeight}>
          kg
        </InputValue>
      </div>

      {/* {renderBmi && ( */}
      <Suspense fallback={<BmiSkeleton />}>
        <CalculateBmi height={height} weight={weight} unit="metric" />
      </Suspense>
      {/* )} */}
    </section>
  );
};

export default Metric;
