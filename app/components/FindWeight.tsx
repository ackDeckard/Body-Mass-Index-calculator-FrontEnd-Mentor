import React from "react";

type WeightRange = {
  minWeight: number;
  maxWeight: number;
};

type Props = {
  height: number;
  unit: string;
};

const imperialWeight = [
  { height: 58, minWeight: 91, maxWeight: 118 },
  { height: 59, minWeight: 94, maxWeight: 123 },
  { height: 60, minWeight: 97, maxWeight: 127 },
  { height: 61, minWeight: 100, maxWeight: 131 },
  { height: 62, minWeight: 104, maxWeight: 135 },
  { height: 63, minWeight: 107, maxWeight: 140 },
  { height: 64, minWeight: 110, maxWeight: 144 },
  { height: 65, minWeight: 114, maxWeight: 149 },
  { height: 66, minWeight: 118, maxWeight: 154 },
  { height: 67, minWeight: 121, maxWeight: 158 },
  { height: 68, minWeight: 125, maxWeight: 163 },
  { height: 69, minWeight: 128, maxWeight: 168 },
  { height: 70, minWeight: 132, maxWeight: 173 },
  { height: 71, minWeight: 136, maxWeight: 178 },
  { height: 72, minWeight: 140, maxWeight: 183 },
  { height: 73, minWeight: 144, maxWeight: 188 },
  { height: 74, minWeight: 148, maxWeight: 193 },
  { height: 75, minWeight: 152, maxWeight: 199 },
  { height: 76, minWeight: 156, maxWeight: 204 },
];

const metricWeight = [
  { height: 147, minWeight: 41.28, maxWeight: 53.52 },
  { height: 148, minWeight: 42.64, maxWeight: 55.79 },
  { height: 149, minWeight: 42.64, maxWeight: 55.79 },
  { height: 150, minWeight: 43.64, maxWeight: 56.79 },
  { height: 151, minWeight: 43.64, maxWeight: 56.79 },
  { height: 152, minWeight: 44.0, maxWeight: 57.61 },
  { height: 153, minWeight: 44.5, maxWeight: 58.61 },
  { height: 154, minWeight: 45.36, maxWeight: 59.42 },
  { height: 155, minWeight: 45.36, maxWeight: 59.42 },
  { height: 156, minWeight: 46.0, maxWeight: 60.07 },
  { height: 157, minWeight: 46.72, maxWeight: 61.23 },
  { height: 158, minWeight: 47.72, maxWeight: 62.23 },
  { height: 159, minWeight: 47.92, maxWeight: 63.0 },
  { height: 160, minWeight: 48.08, maxWeight: 63.5 },
  { height: 161, minWeight: 49.08, maxWeight: 64.5 },
  { height: 162, minWeight: 50.0, maxWeight: 65.32 },
  { height: 163, minWeight: 50.0, maxWeight: 65.32 },
  { height: 164, minWeight: 51.0, maxWeight: 66.32 },
  { height: 165, minWeight: 51.36, maxWeight: 67.13 },
  { height: 166, minWeight: 52.0, maxWeight: 67.73 },
  { height: 167, minWeight: 52.72, maxWeight: 68.95 },
  { height: 168, minWeight: 53.72, maxWeight: 69.95 },
  { height: 169, minWeight: 53.72, maxWeight: 69.95 },
  { height: 170, minWeight: 54.08, maxWeight: 70.76 },
  { height: 171, minWeight: 54.08, maxWeight: 71.76 },
  { height: 172, minWeight: 55.44, maxWeight: 73.03 },
  { height: 173, minWeight: 56.44, maxWeight: 73.03 },
  { height: 174, minWeight: 56.84, maxWeight: 74.03 },
  { height: 175, minWeight: 57.28, maxWeight: 74.85 },
  { height: 176, minWeight: 58.18, maxWeight: 75.85 },
  { height: 177, minWeight: 58.64, maxWeight: 76.66 },
  { height: 178, minWeight: 59.14, maxWeight: 77.66 },
  { height: 179, minWeight: 59.14, maxWeight: 77.66 },
  { height: 180, minWeight: 60.0, maxWeight: 78.48 },
  { height: 181, minWeight: 61.0, maxWeight: 79.48 },
  { height: 182, minWeight: 61.36, maxWeight: 80.29 },
  { height: 183, minWeight: 61.36, maxWeight: 81.29 },
  { height: 184, minWeight: 62.36, maxWeight: 82.29 },
  { height: 185, minWeight: 62.72, maxWeight: 82.55 },
  { height: 186, minWeight: 63.72, maxWeight: 83.55 },
  { height: 187, minWeight: 64.42, maxWeight: 84.82 },
  { height: 188, minWeight: 64.42, maxWeight: 84.82 },
  { height: 189, minWeight: 65.42, maxWeight: 85.82 },
  { height: 190, minWeight: 65.78, maxWeight: 86.64 },
  { height: 191, minWeight: 66.78, maxWeight: 87.64 },
  { height: 192, minWeight: 67.78, maxWeight: 88.0 },
  { height: 193, minWeight: 67.14, maxWeight: 88.45 },
];

const FindWeight = ({ height, unit }: Props): WeightRange | null => {
  const findWeight = (unit === "imperial" ? imperialWeight : metricWeight).find(
    (range) => {
      if (unit === "imperial") {
        return range.height === height;
      } else {
        return range.height === height * 100;
      }
    }
  );

  return findWeight
    ? { minWeight: findWeight.minWeight, maxWeight: findWeight.maxWeight }
    : null;
};

export default FindWeight;
