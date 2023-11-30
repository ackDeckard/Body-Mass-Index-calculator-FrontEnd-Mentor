import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const BmiSkeleton = () => {
  return (
    <div className="mt-6 h-[257px] w-full rounded-2xl bg-bmi-Gradient from-bmiGradient1 to-bmiGradient2 p-8 text-white">
      <Skeleton className="mb-2 h-4 w-full "></Skeleton>
      <Skeleton className="mb-6 h-16 w-1/12"></Skeleton>
      <Skeleton className="mr-5 h-3 w-1/4"></Skeleton>
    </div>
  );
};

export default BmiSkeleton;
