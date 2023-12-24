import React from "react";
import "./heading.css";

const Heading = ({subHeading, headingFirst, headingSecond}) => {
  return (
    <div className="heading-container">
      <h4 className="text-center">{subHeading}</h4>
      <h1 className="text-center">
        {headingFirst} <span> {headingSecond} </span>
      </h1>
    </div>
  );
};

export default Heading;
