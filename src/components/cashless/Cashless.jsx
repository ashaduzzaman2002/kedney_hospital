import { Button } from "components";
import Heading from "components/heading/Heading";
import React from "react";

const Cashless = () => {
  return (
    <div className="max-w-[90%] mx-auto lg:pb-[120px] pb-[52px]">
      <Heading
        subHeading="Facility"
        headingFirst="Cashless"
        headingSecond="Facility"
      />

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-7 gap-4 lg:mt-[52px] mt-[26px]">
        <Card
          image="/assets/images/about1.png"
          className={
            "rounded-tl-[124.874px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px]"
          }
        />
        <Card
          image="/assets/images/about2.png"
          className={
            "rounded-tl-[16px] rounded-br-[124.874px] rounded-tr-[16px] rounded-bl-[16px]"
          }
        />
        <Card
          image="/assets/images/about3.png"
          className={
            "rounded-tl-[16px] rounded-tr-[124.874px] rounded-br-[16px] rounded-bl-[16px]"
          }
        />
        <Card
          image="/assets/images/about4.png"
          className={
            "rounded-tl-[16px] lg:rounded-tr-[124.874px] rounded-tr-[16px] rounded-br-[16px] lg:rounded-bl-[16px] rounded-bl-[124.874px]"
          }
        />
        <Card
          image="/assets/images/about5.png"
          className={
            "rounded-tr-[16px] lg:rounded-tl-[16px] rounded-tl-[124.874px] rounded-br-[16px] lg:rounded-bl-[124.874px] rounded-bl-[16px]"
          }
        />
        <Card
          image="/assets/images/about6.png"
          className={
            "rounded-tr-[16px] lg:rounded-tl-[124.874px] rounded-tl-[16px] lg:rounded-br-[16px] rounded-br-[124.874px] rounded-bl-[16px]"
          }
        />
      </div>

      <div className="flex justify-center lg:mt-[76px] mt-[32px]">
        <Button className="rounded-[10px] py-[15px] min-w-[155px] text-[#032342] text-lg font-medium border-[1px] border-[#385182]">
          View More
        </Button>
      </div>
    </div>
  );
};

export default Cashless;

const Card = ({ className, borderRadius, image }) => (
  <div
    className={`lg:h-[249px] h-[220px] w-full ${className} flex items-center justify-center`}
    style={{ borderRadius, backgroundColor: "rgba(98, 133, 202, 0.15)" }}
  >
    <div>
      <img className="lg:w-[253px] w-[228px]" src={image} alt="" />
    </div>
  </div>
);
