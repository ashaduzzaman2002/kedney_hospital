import "./heading.css";

const Heading1 = ({subHeading, headingStart, headingMid, headingLast}) => {
  return (
    <div className="heading-container">
      <h4 className="">{subHeading}</h4>
      <h1 className=" text-left">
        {headingStart} <span> {headingMid} </span> {headingLast}
      </h1>
    </div>
  );
};
export default Heading1