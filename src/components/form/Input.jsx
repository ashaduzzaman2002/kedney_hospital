import React from "react";

const Input = ({ placeholder }) => {
  return (
    <div className="bg-[#f5f6f7] h-[52px] rounded-[10px] overflow-hidden">
      <input
        className="w-full bg-transparent h-full px-5"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
