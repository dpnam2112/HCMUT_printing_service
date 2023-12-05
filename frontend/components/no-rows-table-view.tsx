import React from "react";

const NoRowsTableView = () => {
  <div className="w-full h-full overflow-hidden">
    {Array(50)
      .fill(0)
      .map((value: number, index: number) => {
        return (
          <div
            key={index}
            className={`w-full h-6 ${
              index % 2 === 1 ? "bg-[#f5f5f5]" : "bg-white"
            }`}
          ></div>
        );
      })}
  </div>;
};

export default NoRowsTableView;
