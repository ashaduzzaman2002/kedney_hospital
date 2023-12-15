import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import Footer from "components/Footer";

const MedicalServicesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-fredoka items-center justify-end mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-indigo-50_02 flex flex-col items-end justify-start mx-auto p-2 w-full">
            <div className="flex flex-col justify-start mb-8 mt-[23px] w-[96%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[55px] w-[88%] md:w-full">
                <div className="flex flex-row font-fredoka gap-2 items-center justify-start w-[17%] md:w-full">
                  <Img
                    className="h-[52px] md:h-auto object-cover w-[52px]"
                    src="images/img_logo7701.png"
                    alt="logo7701"
                  />
                  <Text
                    className="text-blue_gray-900 text-lg w-[70%] sm:w-full"
                    size="txtFredokaSemiBold18"
                  >
                    Dhameliya Kidney Hospital
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[52px] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                  size="txtDMSansRegular18"
                >
                  Home
                </Text>
                <Text
                  className="ml-8 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                  size="txtDMSansRegular18"
                >
                  About
                </Text>
                <div className="flex flex-col font-dmsans items-center justify-start ml-8 md:ml-[0] md:mt-0 mt-2 w-[15%] md:w-full">
                  <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-700 text-lg"
                      size="txtDMSansMedium18"
                    >
                      Medical Services
                    </Text>
                    <Img
                      className="h-4 mt-[3px] w-4"
                      src="images/img_checkmark_blue_gray_700.svg"
                      alt="checkmark"
                    />
                  </div>
                  <div className="bg-blue_gray-700 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                </div>
                <a
                  href="javascript:"
                  className="ml-8 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                >
                  <Text size="txtDMSansRegular18">Career</Text>
                </a>
                <Text
                  className="ml-8 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                  size="txtDMSansRegular18"
                >
                  News
                </Text>
                <Text
                  className="ml-8 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                  size="txtDMSansRegular18"
                >
                  Contact
                </Text>
                <div className="flex flex-row font-fredoka gap-5 items-center justify-between md:ml-[0] ml-[73px] w-[23%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_user.svg"
                    alt="lock"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[214px] text-center text-lg"
                      shape="round"
                      color="blue_gray_700"
                      size="md"
                      variant="fill"
                    >
                      Make Appointment
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Img
                  className="h-[95px] md:h-auto md:mt-0 mt-[102px] object-cover w-[95px]"
                  src="images/img_65781551_95x95.png"
                  alt="65781551"
                />
                <div className="bg-red-A100 border border-black-900 border-solid h-4 mb-[85px] md:ml-[0] ml-[369px] md:mt-0 mt-24 rounded-[50%] w-4"></div>
                <div className="bg-blue-A200 border border-solid border-white-A700 h-[13px] mb-[120px] md:ml-[0] ml-[552px] md:mt-0 mt-16 rounded-md w-[13px]"></div>
                <Img
                  className="h-[105px] md:h-auto mb-[91px] ml-52 md:ml-[0] object-cover w-[105px]"
                  src="images/img_87919741_105x105.png"
                  alt="87919741"
                />
              </div>
            </div>
          </div>
          <div className="h-[184px] md:h-[92px] mt-[-92px] mx-auto w-[70%] md:w-full z-[1]">
            <Img
              className="h-[184px] m-auto object-cover rounded-[92px] w-full"
              src="images/img_rectangle4376.png"
              alt="rectangle4376"
            />
            <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between left-[15%] my-auto w-[51%]">
              <Img
                className="h-[51px] mt-[11px] w-[51px]"
                src="images/img_minimize.svg"
                alt="Four"
              />
              <div className="flex flex-col gap-3 items-center justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtFredokaMedium40WhiteA700"
                >
                  Medical Services
                </Text>
                <div className="flex flex-row font-dmsans gap-4 items-center justify-between w-[87%] md:w-full">
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtDMSansMedium20"
                  >
                    Home
                  </Text>
                  <div className="bg-white-A700 h-[9px] my-2 rounded w-[9px]"></div>
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtDMSansBold20"
                  >
                    Medical Services
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[7px] items-center justify-start mt-[117px] md:px-5">
          <Text
            className="text-base text-indigo-300 tracking-[3.00px] uppercase"
            size="txtDMSansMedium16"
          >
            Our Services
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
            size="txtFredokaMedium40"
          >
            Medical Services
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1184px] mt-[68px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="gap-[52px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
              <div className="h-[360px] relative w-[360px]">
                <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                  <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col gap-[35px] inset-x-[0] items-center justify-start mx-auto w-[53%]">
                  <Img
                    className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                    src="images/img_ellipse247.png"
                    alt="ellipse247"
                  />
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                      size="txtFredokaMedium32"
                    >
                      Kidney Stone
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[188px]"
                      rightIcon={
                        <Img
                          className="h-[23px] mt-px ml-2.5"
                          src="images/img_arrowright.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="blue_gray_700"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[360px] items-center justify-start w-[360px]">
                <div className="h-[360px] relative w-[360px]">
                  <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                    <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                  </div>
                  <div className="absolute bottom-[9%] flex flex-col gap-6 items-center justify-start right-[21%] w-[53%]">
                    <div className="flex flex-col font-fredoka gap-[42px] items-start justify-start w-[68%] md:w-full">
                      <Img
                        className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                        src="images/img_ellipse247_116x116.png"
                        alt="ellipse247_One"
                      />
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                        size="txtFredokaMedium32"
                      >
                        Prostate
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[188px]"
                      rightIcon={
                        <Img
                          className="h-[23px] mt-px ml-2.5"
                          src="images/img_arrowright.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="blue_gray_700"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="h-[360px] relative w-[360px]">
                <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                  <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                </div>
                <div className="absolute bottom-[9%] flex flex-col gap-[45px] items-center justify-start right-[20%] w-[56%]">
                  <Img
                    className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                    src="images/img_ellipse247_1.png"
                    alt="ellipse247_Two"
                  />
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                      size="txtFredokaMedium32"
                    >
                      Uro Oncology
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[188px]"
                      rightIcon={
                        <Img
                          className="h-[23px] mt-px ml-2.5"
                          src="images/img_arrowright.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="blue_gray_700"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:gap-5 gap-[41px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[99%]">
              <div className="h-[360px] relative w-full">
                <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                  <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[70%]">
                  <Img
                    className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                    src="images/img_ellipse247_2.png"
                    alt="ellipse247"
                  />
                  <Text
                    className="mt-[35px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                    size="txtFredokaMedium32"
                  >
                    Pediatric Urology
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[188px] mt-5"
                    rightIcon={
                      <Img
                        className="h-[23px] mt-px ml-2.5"
                        src="images/img_arrowright.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="round"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="h-[360px] relative w-full">
                <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                  <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[64%]">
                  <Img
                    className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                    src="images/img_ellipse247_3.png"
                    alt="ellipse247"
                  />
                  <Text
                    className="mt-[35px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                    size="txtFredokaMedium32"
                  >
                    Female Urology
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[188px] mt-5"
                    rightIcon={
                      <Img
                        className="h-[23px] mt-px ml-2.5"
                        src="images/img_arrowright.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="round"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="h-[360px] relative w-full">
                <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                  <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[86%]">
                  <Img
                    className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                    src="images/img_ellipse247_4.png"
                    alt="ellipse247"
                  />
                  <Text
                    className="mt-8 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                    size="txtFredokaMedium32"
                  >
                    Reconstructive Urol...
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[188px] mt-[23px]"
                    rightIcon={
                      <Img
                        className="h-[23px] mt-px ml-2.5"
                        src="images/img_arrowright.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="round"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="h-[360px] relative w-full">
                <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                  <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[53%]">
                  <Img
                    className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                    src="images/img_ellipse247_5.png"
                    alt="ellipse247"
                  />
                  <Text
                    className="mt-[35px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                    size="txtFredokaMedium32"
                  >
                    Andrology
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[188px] mt-5"
                    rightIcon={
                      <Img
                        className="h-[23px] mt-px ml-2.5"
                        src="images/img_arrowright.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="round"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="h-[360px] relative w-full">
                <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                  <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[83%]">
                  <Img
                    className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                    src="images/img_ellipse247_6.png"
                    alt="ellipse247"
                  />
                  <Text
                    className="mt-[35px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                    size="txtFredokaMedium32"
                  >
                    Laproscopic Urology
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[188px] mt-5"
                    rightIcon={
                      <Img
                        className="h-[23px] mt-px ml-2.5"
                        src="images/img_arrowright.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="round"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="h-[360px] relative w-full">
                <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                  <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[85%]">
                  <Img
                    className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                    src="images/img_ellipse247_7.png"
                    alt="ellipse247"
                  />
                  <Text
                    className="mt-[35px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                    size="txtFredokaMedium32"
                  >
                    Cystoscopy & Urete...
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[188px] mt-5"
                    rightIcon={
                      <Img
                        className="h-[23px] mt-px ml-2.5"
                        src="images/img_arrowright.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="round"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="h-[360px] relative w-full">
                <div className="bg-indigo-50_01 flex flex-col h-full items-end justify-start m-auto pb-[179px] md:pl-10 sm:pl-5 pl-[179px] rounded-[30px] w-[360px]">
                  <div className="bg-blue_gray-700_19_01 h-[181px] rounded-[90px] w-[89%]"></div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[53%]">
                  <Img
                    className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                    src="images/img_ellipse247_8.png"
                    alt="ellipse247"
                  />
                  <Text
                    className="mt-8 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center"
                    size="txtFredokaMedium32"
                  >
                    PCNL
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[188px] mt-[23px]"
                    rightIcon={
                      <Img
                        className="h-[23px] mt-px ml-2.5"
                        src="images/img_arrowright.svg"
                        alt="arrow_left"
                      />
                    }
                    shape="round"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-end mt-[120px] p-8 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1184px] mt-[57px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[64%] md:w-full">
              <div className="bg-red-A400 border border-solid border-white-A700 h-[18px] mb-[46px] md:mt-0 mt-[13px] rounded-[50%] w-[18px]"></div>
              <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[254px]">
                <Text
                  className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                  size="txtFredokaMedium16"
                >
                  services
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
                  size="txtFredokaMedium40"
                >
                  Treatments
                </Text>
              </div>
              <Img
                className="h-[41px] md:ml-[0] ml-[226px] md:mt-0 mt-2.5 w-[42px]"
                src="images/img_cut.svg"
                alt="settings"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[49px] w-full"
              orientation="horizontal"
            >
              <div className="bg-indigo-50_02 flex flex-1 flex-col gap-[21px] items-center justify-end p-[21px] sm:px-5 rounded-[12px] w-full">
                <div className="h-[281px] md:h-[283px] mt-0.5 relative w-[99%]">
                  <Img
                    className="h-[281px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle4359.png"
                    alt="rectangle4359"
                  />
                  <Button
                    className="absolute flex h-[38px] items-center justify-center right-[7%] rounded-[50%] top-[9%] w-[38px]"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-[25px]"
                      src="images/img_maximize.svg"
                      alt="arrowleft"
                    />
                  </Button>
                </div>
                <Text
                  className="text-blue_gray-900 text-xl"
                  size="txtFredokaMedium20Bluegray900"
                >
                  URS – Ureteroscopy
                </Text>
              </div>
              <div className="bg-indigo-50_02 flex flex-1 flex-col gap-[21px] items-center justify-end p-[21px] sm:px-5 rounded-[12px] w-full">
                <div className="h-[281px] md:h-[283px] mt-0.5 relative w-[99%]">
                  <Img
                    className="h-[281px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle4359_281x333.png"
                    alt="rectangle4359"
                  />
                  <Button
                    className="absolute flex h-[38px] items-center justify-center right-[7%] rounded-[50%] top-[9%] w-[38px]"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-[25px]"
                      src="images/img_maximize.svg"
                      alt="arrowleft"
                    />
                  </Button>
                </div>
                <Text
                  className="text-blue_gray-900 text-xl"
                  size="txtFredokaMedium20Bluegray900"
                >
                  Retrograde Intrarenal Surgery
                </Text>
              </div>
              <div className="bg-indigo-50_02 flex flex-1 flex-col gap-[19px] items-center justify-end p-[23px] sm:px-5 rounded-[12px] w-full">
                <div className="h-[281px] relative w-full">
                  <Img
                    className="h-[281px] m-auto object-cover rounded-[12px] w-full"
                    src="images/img_rectangle4359_1.png"
                    alt="rectangle4359"
                  />
                  <Button
                    className="absolute flex h-[38px] items-center justify-center right-[7%] rounded-[50%] top-[9%] w-[38px]"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-[25px]"
                      src="images/img_maximize.svg"
                      alt="arrowleft"
                    />
                  </Button>
                </div>
                <Text
                  className="text-blue_gray-900 text-xl"
                  size="txtFredokaMedium20Bluegray900"
                >
                  ESWL
                </Text>
              </div>
            </List>
            <div className="bg-amber-500 border border-black-900 border-solid h-4 mt-[42px] rounded-[50%] w-4"></div>
          </div>
        </div>
        <div className="bg-blue_gray-700 flex flex-col items-center justify-start max-w-[1184px] mt-[120px] mx-auto pl-0.5 md:px-5 rounded-[20px] w-full">
          <div
            className="bg-cover bg-no-repeat flex md:flex-col flex-row md:gap-5 h-[330px] items-start justify-end p-[9px] w-full"
            style={{ backgroundImage: "url('images/img_group486.svg')" }}
          >
            <div className="bg-gradient1  h-[15px] md:mt-0 mt-[33px] rounded-[7px] w-[15px]"></div>
            <div className="bg-gradient1  h-5 md:ml-[0] ml-[78px] md:mt-0 mt-[243px] rounded-[50%] w-5"></div>
            <div className="h-[244px] md:h-[277px] sm:h-[388px] md:ml-[0] ml-[113px] md:mt-0 my-[33px] relative w-[47%] md:w-full">
              <div className="bg-gradient1  h-[25px] ml-[73px] rounded-[12px] w-[25px]"></div>
              <div className="absolute flex flex-col gap-[22px] h-full inset-[0] items-center justify-center m-auto w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                  size="txtFredokaMedium50"
                >
                  Newsletter
                </Text>
                <div className="flex flex-col gap-7 items-center justify-start w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtFredokaMedium24WhiteA700"
                    >
                      Get Smarter About No-Code
                    </Text>
                    <div className="flex sm:flex-col flex-row font-dmsans gap-1.5 items-start justify-between w-full">
                      <Img
                        className="h-4 mb-[25px] w-4"
                        src="images/img_star13_2.svg"
                        alt="starThirteen"
                      />
                      <div className="h-[42px] relative w-[96%] sm:w-full">
                        <Text
                          className="m-auto text-base text-blue_gray-200 text-center w-full"
                          size="txtDMSansRegular16"
                        >
                          The best No-Code tips & tricks, for webflow & Framer
                          developers from experts to beginner. Join our 3k
                          community by subscribing
                        </Text>
                        <Img
                          className="absolute bottom-[5%] h-4 right-[4%] w-4"
                          src="images/img_star14_5.svg"
                          alt="starFourteen"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row font-dmsans gap-3 items-center justify-start w-[85%] md:w-full">
                    <Input
                      name="language"
                      placeholder="Enter your email "
                      className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-center text-sm w-full"
                      wrapClassName="border border-solid border-white-A700_66 w-[65%] sm:w-full"
                      type="email"
                      shape="round"
                      color="blue_gray_600"
                      size="md"
                      variant="fill"
                    ></Input>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[149px] text-center text-lg"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient1  h-[34px] md:ml-[0] ml-[126px] md:mt-0 mt-56 rounded-[50%] w-[34px]"></div>
            <div className="bg-gradient1  h-[53px] md:ml-[0] ml-[102px] md:mt-0 mt-28 rounded-[26px] w-[53px]"></div>
          </div>
        </div>
        <Footer className="bg-blue_gray-900 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        <div className="flex flex-col items-start mt-[2118px] md:px-10 sm:px-5 px-[653px] w-full">
          <Img
            className="h-[47px]"
            src="images/img_settings.svg"
            alt="settings_One"
          />
        </div>
      </div>
    </>
  );
};

export default MedicalServicesPage;
