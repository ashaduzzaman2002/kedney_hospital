import { RightArrow, RightArrowWhite } from "assets/svg/Icon";
import { Button } from "components";
import Form from "components/form/Form";
import Input from "components/form/Input";
import TextArea from "components/form/TextArea";
import HeroSecondary from "components/secondary-hero/HeroSecondary";
import Layout from "layout/Layout";
import React from "react";

const Career = () => {
  return (
    <Layout>
      <HeroSecondary title="Career" />

      <div className="bg-[#F5F6F9]">
        <div className="help-container-wrapper">
          <div className="help-container">
            <div className="self-center">
              <div className="">
                <p
                  className="!text-[#6285CA] !font-fredoka lg:text-base text-sm !font-medium !uppercase"
                  style={{ letterSpacing: 3 }}
                >
                  Career
                </p>
                <h2 className="!text-[#032342] !font-fredoka lg:text-[40px] text-[24px] !font-medium !leading-[55px]">
                  Leave A <span className="text-[#385182]">Message</span>
                </h2>
                <p className="!text-[#888] !font-dmsans !lg:text-[20px] !text-sm !font-medium !leading-[18px] !lg:leading-[32px] !max-w-[1024px] lg:mt-6 mt-2">
                  Please feel welcome to contact our friendly reception staff
                  with any general or medical enquiry. Our doctors will receive
                  or return any urgent calls.
                </p>
              </div>

              <Form className="p-6 mt-6">
                <div className=" grid grid-cols-2 gap-[22px]">
                  <div className="lg:col-span-1 col-span-2">
                    <Input placeholder="Name" />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <Input placeholder="Email" />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <Input placeholder="Phone Number" />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <Input placeholder="Experience" />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <Input placeholder="Choose file" />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <Input placeholder="Designation" />
                  </div>
                  <div className="col-span-2">
                    <TextArea placeholder="Message" />
                  </div>
                </div>

                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[189px] text-center text-lg rounded-[19px] mt-[32px] flex gap-2 items-center justify-center"
                  shape="round"
                  color="blue_gray_700"
                  size="md"
                  variant="fill"
                >
                  Submit <RightArrowWhite />
                </Button>
              </Form>
            </div>

            <div className="">
              <div
                className="bg-[#fff] lg:w-[85%] w-full rounded-[30px] lg:h-[97%] h-full p-2"
                style={{ boxShadow: "18px 39px 73px 0px rgba(0, 0, 0, 0.15)" }}
              >
                <img
                  src="/assets/images/career.png"
                  className="w-full h-full object-cover rounded-[30px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
