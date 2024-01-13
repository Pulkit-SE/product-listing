import React, { useCallback } from "react";

import { debounce } from "../../../functions";
import './styles.css'

export const RangeSlider = ({ step, min, max, onFilterChange }: any) => {
  const [minValue, setMinValue] = React.useState(min);
  const [maxValue, setMaxValue] = React.useState(max);

  const debouncedFilterChange = useCallback(
    debounce((filter: any) => {
      onFilterChange(filter);
    }, 500),
    []
  );

  const handleMinChange = (event: any) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    const newMinVal = Math.min(value, maxValue - step);
    setMinValue(newMinVal);
    debouncedFilterChange({ priceRange: [newMinVal, maxValue] });
  };

  const handleMaxChange = (event: any) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    const newMaxVal = Math.max(value, minValue + step);
    setMaxValue(newMaxVal);
    debouncedFilterChange({ priceRange: [minValue, newMaxVal] });
  };

  return (
    <div>
      <input
        className="min-range"
        max={max}
        min={min}
        onChange={handleMinChange}
        step={step}
        type="range"
        value={minValue}
      />
      <input
        className="min-range"
        max={max}
        min={min}
        onChange={handleMaxChange}
        step={step}
        type="range"
        value={maxValue}
      />
    </div>
  );
};
