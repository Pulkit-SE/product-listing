import React from "react";
import { RangeSlider } from "./RangeSlider";

export interface FilterBarProps {
  categories: string[];
  onFilterChange: any;
  filters: any;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories = [],
  onFilterChange,
  filters = {},
}) => {
  const handleCategoryChange = (event: any) => {
    onFilterChange({ selectedCategory: event.target.value });
  };

  return (
    <div className="filter-wrapper">
      <p>Categories</p>
      <select
        name="selectCategory"
        value={parseInt(filters?.selectedCategory)}
        onChange={handleCategoryChange}
      >
        {categories.map((item: any) => {
          return <option value={item?.id}>{item?.name}</option>;
        })}
      </select>
      <p>
        Price Range (${filters.priceRange[0]} - ${filters.priceRange[1]})
      </p>
      <RangeSlider
        step={3}
        min={0}
        max={2000}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

export default FilterBar;
