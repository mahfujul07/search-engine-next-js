import React from "react";

const HeaderOption = ({ Icon, title, selected }) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className={`h-4 text-gray-500`} />
      <p className="hidden sm:inline-flex ml-1 text-gray-500">{title}</p>
    </div>
  );
};

export default HeaderOption;
