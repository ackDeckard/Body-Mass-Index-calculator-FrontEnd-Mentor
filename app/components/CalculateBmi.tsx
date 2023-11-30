import FindWeight from "./FindWeight";
import { FaSpinner } from "react-icons/fa";

type Props = {
  height: number;
  weight: number;
  unit: string;
};

export function CalculateBmi({ height, weight, unit }: Props) {
  let newBmi = 0;
  let weightclassification;

  const weightRange = FindWeight({ height, unit });

  if (unit === "imperial") {
    newBmi = (weight / (height * height)) * 703;
  } else {
    newBmi = weight / (height * height);
  }
  const roundedBmi = parseFloat(newBmi.toFixed(1));

  if (roundedBmi < 18.5) {
    weightclassification = "Underweight";
  } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
    weightclassification = "a Healthy weight";
  } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
    weightclassification = "Overweight";
  } else {
    weightclassification = "Obese";
  }

  return (
    <div className="mt-6 h-[257px] w-full rounded-2xl bg-bmi-Gradient from-bmiGradient1 to-bmiGradient2 p-8 text-white md:col-span-2 md:mt-0 md:grid md:h-[149px] md:grid-flow-col md:grid-cols-2 md:items-center md:gap-6 md:rounded-l-2xl md:rounded-r-[74.5px] md:p-8">
      <div className="md:rounded-3xl">
        {roundedBmi ? (
          <>
            <p className="mb-2 font-semibold leading-[24px] ">Your BMI is...</p>
            <div className="mb-6 text-5xl font-semibold leading-[52.8px] tracking-[-2.4px] md:mb-0">
              {roundedBmi}
            </div>
          </>
        ) : (
          <FaSpinner size={24} className="animate-spin" />
        )}
      </div>
      {!height && !weight ? (
        <p>
          Please insert a valid <br /> Height and Weight
        </p>
      ) : (
        <p className="mr-5 text-sm font-normal leading-[21px] md:mr-0 md:w-[267px] lg:w-[206px]">
          Your BMI suggests you&apos;re{" "}
          <span className="font-bold">{weightclassification}</span>. Your ideal
          weight is between {weightRange?.minWeight}
          {unit === "imperial" ? "lbs" : "kgs"} - {weightRange?.maxWeight}
          {unit === "imperial" ? "lbs" : "kgs"}.
        </p>
      )}
    </div>
  );
}
