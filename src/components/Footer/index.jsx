import React from "react";

import { Img, Line, Radio, RadioGroup, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="h-[440px] md:h-[761px] relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[426px] items-start justify-start mb-[13px] p-[74px] md:px-10 sm:px-5 rounded-[213px]"
                style={{ backgroundImage: "url('images/img_group39.png')" }}
              >
                <div className="flex flex-col items-start justify-start mb-[53px] md:ml-[0] ml-[54px] w-[65%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-[96%] sm:w-full"
                    size="txtFredokaMedium32WhiteA700"
                  >
                    Dhameliya Kidney Hospital
                  </Text>
                  <Text
                    className="mt-3.5 text-sm text-white-A700 w-full"
                    size="txtDMSansRegular14WhiteA700"
                  >
                    Dhameliya Kidney Hospital has born out of the need for a
                    good center which catered to patients with complicated
                    kidney diseases in Surat. It is a judicious blend of high
                    end technology,{" "}
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start mt-[17px] w-[38%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_icbaselinefacebook.svg"
                      alt="icbaselinefaceb"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_phinstagramlogofill.svg"
                      alt="phinstagramlogo"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_entyposociall.svg"
                      alt="entyposociall"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="h-[258px] md:h-auto md:mt-0 mt-[181px] object-cover rounded-[129px]"
                src="images/img_group39.png"
                alt="rectangleThirteen"
              />
            </div>
          </div>
          <div className="absolute bottom-[6%] flex flex-col inset-x-[0] items-end justify-start mx-auto w-[83%]">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[66%] md:w-full">
              <div className="flex flex-col gap-[21px] items-start justify-start w-[41%] md:w-full">
                <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-[36%] md:w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtFredokaMedium20"
                    >
                      Get in Touch
                    </Text>
                    <Line className="bg-white-A700_7f h-px mt-1 w-[54%]" />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-sm text-white-A700 w-[89%] sm:w-full"
                      size="txtDMSansRegular14WhiteA700"
                    >
                      If you have any questions or need help, feel free to
                      contact with our team.
                    </Text>
                    <RadioGroup
                      selectedValue="912612490001"
                      className="flex flex-col w-full"
                      name="radiogroup912612490001"
                    >
                      <Radio
                        value="912612490001"
                        className="font-dmsans leading-[normal] mr-[170px] text-left text-sm text-white-A700"
                        inputClassName="bg-white-A700 h-6 mr-[5px] rounded-[12px] shadow-bs1 w-6"
                        checked={true}
                        name="radiogroup912612490001"
                        label="91 261 2490001"
                        id="912612490001"
                      ></Radio>
                      <Radio
                        value="402AayushDoctorHouseLalDarwajaStationRoadSURAT395002GUJINDIA"
                        className="font-dmsans leading-[normal] mt-3 text-left text-sm text-white-A700"
                        inputClassName="bg-white-A700 h-6 mr-[5px] rounded-[12px] shadow-bs1 w-6"
                        checked={true}
                        name="radiogroup912612490001"
                        label="402 Aayush Doctor House Lal Darwaja Station Road SURAT 395002  GUJ INDIA"
                        id="402AayushDoctorHouseLalDarwajaStationRoadSURAT395002GUJINDIA"
                      ></Radio>
                    </RadioGroup>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start w-[39%] md:w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-[87%] md:w-full">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtFredokaRegular14"
                    >
                      Get Direction
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                    <Text
                      className="text-sm text-white-A700"
                      size="txtFredokaRegular14"
                    >
                      Other Branches
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowright.svg"
                      alt="arrowright_One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[88px] w-1/5 md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtFredokaMedium20"
                  >
                    Medical Services
                  </Text>
                  <Line className="bg-white-A700_7f h-px mt-1 w-[41%]" />
                </div>
                <ul className="flex flex-col items-start justify-start w-[91%] md:w-full common-column-list">
                  <li>
                    <div className="flex flex-row gap-2 items-start justify-start">
                      <Img
                        className="h-2.5 mb-1.5 mt-[3px] w-2.5"
                        src="images/img_star14_9.svg"
                        alt="starFourteen_One"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        Kidney Stone
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-center justify-start mt-[9px]">
                      <Img
                        className="h-2.5 my-1 w-2.5"
                        src="images/img_star15_5.svg"
                        alt="starFifteen"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        Prostate
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-start justify-start mt-3">
                      <Img
                        className="h-2.5 mb-1.5 mt-0.5 w-2.5"
                        src="images/img_star16_5.svg"
                        alt="starSixteen"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        Uro Oncology
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-start justify-start mt-[11px]">
                      <Img
                        className="h-2.5 mb-1.5 mt-0.5 w-2.5"
                        src="images/img_star17_5.svg"
                        alt="starSeventeen"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        Paediatric Urology
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-start justify-start mt-[11px]">
                      <Img
                        className="h-2.5 mb-1.5 mt-0.5 w-2.5"
                        src="images/img_star18_5.svg"
                        alt="starEighteen"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        Female Urology
                      </Text>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[100px] w-[17%] md:w-full">
                <div className="flex flex-col items-start justify-start w-4/5 md:w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtFredokaMedium20"
                  >
                    Quick Links{" "}
                  </Text>
                  <Line className="bg-white-A700_7f h-px mt-1 w-3/5" />
                </div>
                <ul className="flex flex-col gap-[11px] items-start justify-start w-full common-column-list">
                  <li>
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <Img
                        className="h-2.5 my-1 w-2.5"
                        src="images/img_star14_10.svg"
                        alt="starFourteen_Two"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        Home
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <Img
                        className="h-2.5 my-1 w-2.5"
                        src="images/img_star15_6.svg"
                        alt="starFifteen_One"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        About Us
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <Img
                        className="h-2.5 my-1 w-2.5"
                        src="images/img_star16_6.svg"
                        alt="starSixteen_One"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        Medical Services
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <Img
                        className="h-2.5 my-1 w-2.5"
                        src="images/img_star17_6.svg"
                        alt="starSeventeen_One"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        Testimonials
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <Img
                        className="h-2.5 my-1 w-2.5"
                        src="images/img_star18_6.svg"
                        alt="starEighteen_One"
                      />
                      <Text
                        className="text-sm text-white-A700"
                        size="txtDMSansRegular14WhiteA700"
                      >
                        Contact Us
                      </Text>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Line className="bg-white-A700 h-px mt-[45px] w-full" />
            <Text
              className="mt-[23px] text-base text-center text-white-A700"
              size="txtDMSansRegular16WhiteA700"
            >
              Non Copyrighted © 2022 Design and upload by Dhameliya Kidney
              Hospital
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
