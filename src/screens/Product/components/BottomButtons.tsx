import React from "react";

interface ProductGridProps {
  handleNextClick: any;
  handlePrevClick: any;
  currentoffset: number;
  productLength: number;
}

const BottomButtons = (props: ProductGridProps) => {
  const { currentoffset, handlePrevClick, handleNextClick, productLength } =
    props;
  return (
    <div className="product-grid-btn">
      <button
        className="grid-btn"
        disabled={currentoffset === 0}
        onClick={handlePrevClick}
      >
        Previous
      </button>
      {productLength % 12 === 0 && (
        <button className="grid-btn-next" onClick={handleNextClick}>
          Next
        </button>
      )}
    </div>
  );
};

export default BottomButtons;
