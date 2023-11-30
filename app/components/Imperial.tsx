import React, { Suspense, useState } from "react";
import InputValue from "./InputValue";
import { CalculateBmi } from "./CalculateBmi";
import BmiSkeleton from "./BmiSkeleton";

// const recommendedWeightRanges = [
//   { height: "59''", minWeight: 91, maxWeight: 115 },
//   { height: "60''", minWeight: 94, maxWeight: 119 },
//   { height: "61''", minWeight: 97, maxWeight: 123 },
//   { height: "62''", minWeight: 100, maxWeight: 127 },
//   { height: "63''", minWeight: 103, maxWeight: 131 },
//   { height: "64''", minWeight: 106, maxWeight: 135 },
//   { height: "65''", minWeight: 110, maxWeight: 140 },
//   { height: "66''", minWeight: 113, maxWeight: 144 },
//   { height: "67''", minWeight: 116, maxWeight: 148 },
//   { height: "68''", minWeight: 119, maxWeight: 152 },
//   { height: "69''", minWeight: 122, maxWeight: 156 },
//   { height: "70''", minWeight: 126, maxWeight: 161 },
//   { height: "71''", minWeight: 129, maxWeight: 165 },
//   { height: "72''", minWeight: 132, maxWeight: 169 },
//   { height: "73''", minWeight: 135, maxWeight: 173 },
//   { height: "74''", minWeight: 138, maxWeight: 177 },
//   { height: "75''", minWeight: 142, maxWeight: 182 },
// ];

const Imperial = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  // const findRecommendedWeight = (height: number) => {
  //   const rec = recommendedWeightRanges.find(
  //     (range) => parseInt(range.height) === height
  //   );
  //   return findRecommendedWeight;
  // };

  const handleFeet = (feet: number) => {
    setHeight((prevValue) => {
      const inches = feet * 12;
      return inches;
    });
  };

  const handleInches = (inches: number) => {
    setHeight((prevHeightInInches) => prevHeightInInches + inches);
  };

  const handleSt = (stone: number) => {
    setWeight((prevValue) => {
      const lbs = stone * 14;
      return lbs;
    });
  };

  const handleLbs = (lbs: number) => {
    setWeight((prevWeightInlbs) => prevWeightInlbs + lbs);
  };

  return (
    <section>
      <div className="mb-4 flex items-center gap-4">
        <InputValue label="Height" onValueChange={handleFeet}>
          ft
        </InputValue>
        <InputValue label="" onValueChange={handleInches}>
          in
        </InputValue>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <InputValue label="Weight" onValueChange={handleSt}>
          st
        </InputValue>
        <InputValue label="" onValueChange={handleLbs}>
          lbs
        </InputValue>
      </div>
      <Suspense fallback={<BmiSkeleton />}>
        <CalculateBmi height={height} weight={weight} unit="imperial" />
      </Suspense>
    </section>
  );
};

export default Imperial;
