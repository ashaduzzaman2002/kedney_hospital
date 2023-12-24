import { RightArrow, Star, TiltArrow } from "assets/svg/Icon";
import Heading from "components/heading/Heading";
import HeroSecondary from "components/secondary-hero/HeroSecondary";
import { services, services2 } from "data/data";
import Layout from "layout/Layout";
import React from "react";

const Services = () => {
  return (
    <Layout>
      <HeroSecondary title="Medical Services" />

      <div className="mt-28 lg:mb-12 mb-6">
        <Heading subHeading="Our Services" headingFirst="Medical Services" />
      </div>

      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
        {services?.map((item, i) => (
          <Card key={i} data={item} />
        ))}
      </div>

      <div className="bg-[#F5F6F9] lg:py-[90px] py-[50px] lg:mt-28 mt-12 relative">
        <div className="hidden absolute w-full lg:flex justify-around items-center">
          <div className="w-[18px] h-[18px] bg-[#FB142F] rounded-full" />
          <Star />
        </div>

        <Heading subHeading="services" headingFirst="Treatments" />

        <div className="max-w-[90%] lg:mt-[52px] mt-[35px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[21px]">
          {services2?.map((item, i) => (
            <Card2 key={i} data={item} />
          ))}
        </div>

        <div className="hidden absolute w-full lg:flex justify-center items-center bottom-10">
          <div className="w-[16px] h-[16px] bg-[#FEC107] rounded-full border-[1px] border-[#000]" />
        </div>
      </div>
    </Layout>
  );
};

export default Services;

const Card = ({ data }) => (
  <div
    className="bg-[#E8EDF7] col-span-1 aspect-square rounded-[30px] p-5 lg:p-10 flex justify-center flex-col relative overflow-hidden"
    style={{ alignItems: "center" }}
  >
    <img className="relative z-10 w-[150px] lg:w-auto" src={data?.image} alt="" />
    <p className="text-[#032342] font-medium text-2xl lg:text-3xl font-fredoka">
      {data?.name}
    </p>

    <button className="mt-6 flex gap-2 align-center justify-center font-dmsans text-white-A700 font-medium bg-[#385182] rounded-[10px] h-[48px] w-[190px]">
      Read More <RightArrow />
    </button>

    <div
      className="bg-[#354d7c] opacity-10 w-[222px] aspect-square rounded-full absolute"
      style={{ top: "-15%", right: "-15%" }}
    ></div>
  </div>
);

const Card2 = ({ data }) => (
  <div
    className="bg-[#E6E9EF] col-span-1 aspect-square rounded-[12px] p-5 flex justify-between flex-col relative overflow-hidden"
    style={{ alignItems: "center" }}
  >
    <div className="bg-white-A700 w-[38px] aspect-square rounded-full absolute flex items-center justify-center right-12 top-12">
      <TiltArrow />
    </div>
    <img className="w-full h-[90%] rounded-xl" src={data?.image} alt="" />
    <p className="text-[#032342] font-medium text-xl mt-5 font-fredoka">
      {data?.title}
    </p>
  </div>
);
