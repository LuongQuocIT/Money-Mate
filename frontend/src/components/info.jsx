import React from "react";

const Info = ({ title, subTitle }) => {
  return (
    <div className="flex-flex-col md:flex-row md:items-center justify-between py-8">
      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-black dark:text-gray-300 mb-2">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Info;
