import React from "react";
import BrandGrid from "./BrandGrid";

function TopBrands() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="text-left">
          <h1 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Top Brands
          </h1>
          <BrandGrid/>
        </div>
      </div>
    </div>
  );
}

export default TopBrands;
