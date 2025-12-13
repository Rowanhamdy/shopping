'use client'
import { useState } from "react";

export default function PriceFilter({ price, onChange, minLimit = 0, maxLimit = 500 }) {
  const [minVal, setMinVal] = useState(price.min);
  const [maxVal, setMaxVal] = useState(price.max);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(value);
    onChange("min", value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
    onChange("max", value);
  };

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Price</h2>

      <div className="relative h-10">
        {/* Range Inputs */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minVal}
          onChange={handleMinChange}
          className="absolute w-full pointer-events-none appearance-none h-1 bg-gray-300 rounded"
          style={{ pointerEvents: "auto" }}
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxVal}
          onChange={handleMaxChange}
          className="absolute w-full pointer-events-none appearance-none h-1 bg-gray-300 rounded"
          style={{ pointerEvents: "auto" }}
        />

        {/* Visual selected range */}
        <div
          className="absolute h-1 bg-black rounded"
          style={{
            left: `${(minVal / maxLimit) * 100}%`,
            right: `${100 - (maxVal / maxLimit) * 100}%`,
          }}
        />
      </div>

      <p className="text-sm text-gray-500 mt-2">
        ${minVal} – ${maxVal}
      </p>
    </div>
  );
}
