import React, { useMemo } from "react";
import debounce from "lodash/debounce";

type Props = {
  children: string;
  label?: string;
  onValueChange: (value: number) => void;
};

const InputValue = ({ children, label, onValueChange }: Props) => {
  const debouncedHandleSearch = useMemo(
    () => debounce((value: number) => onValueChange(value), 2000),
    [onValueChange]
  );

  return (
    <div className="relative w-full">
      {/* Absolute positioning because if there's no label, the layout gets shifted */}
      <label className="absolute mb-2 text-sm text-DarkElectricBlue">
        {label}
      </label>
      <div className="relative mt-[28px] flex items-center justify-between gap-6 ">
        <input
          type="number"
          className="w-full cursor-pointer rounded-xl border border-borderInput px-6 py-5 text-2xl font-semibold  text-Gunmetal [appearance:textfield] hover:border-[#345FF6] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          onChange={(e) => debouncedHandleSearch(parseFloat(e.target.value))}
        />
        <div className="absolute right-5 cursor-pointer select-none text-2xl font-semibold tracking-[-1.2px] text-inputBlue">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InputValue;
