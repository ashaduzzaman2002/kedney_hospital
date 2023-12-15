import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
} from "components";

const medicalServicesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AboutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-fredoka sm:gap-10 md:gap-10 gap-[120px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center w-full">
          <div className="flex sm:h-80 h-[414px] md:h-[872px] justify-end md:px-5 relative w-full">
            <Img
              className="h-[51px] mb-[51px] ml-[424px] mt-auto w-[51px]"
              src="images/img_minimize.svg"
              alt="Three"
            />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col relative w-full">
                <div className="bg-indigo-50_02 flex flex-col items-end justify-start mx-auto p-2 w-full">
                  <div className="flex flex-col justify-start mb-8 mt-[23px] w-[96%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start md:ml-[0] ml-[55px] w-[88%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[71%] md:w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-[24%] md:w-full">
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
                        <div className="flex sm:flex-col flex-row font-dmsans sm:gap-10 items-start justify-between w-[67%] md:w-full">
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtDMSansRegular16Bluegray900"
                          >
                            Home
                          </Text>
                          <div className="h-8 relative w-2/5 sm:w-full">
                            <Text
                              className="absolute left-[0] text-base text-blue_gray-700 top-[0]"
                              size="txtDMSansBold16"
                            >
                              About
                            </Text>
                            <div className="absolute flex flex-col gap-[5px] h-full inset-y-[0] justify-start my-auto right-[0] w-[91%]">
                              <SelectBox
                                className="leading-[normal] md:ml-[0] ml-[57px] text-base text-blue_gray-900 text-left w-[72%] sm:w-full"
                                placeholderClassName="text-blue_gray-900"
                                indicator={
                                  <Img
                                    className="h-3 mr-[0] w-3"
                                    src="images/img_arrowdown_blue_gray_900.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group1171275230"
                                options={medicalServicesOptionsList}
                                isSearchable={false}
                                placeholder="Medical Services"
                              />
                              <div className="bg-blue_gray-700 h-1.5 mr-[194px] rounded-[50%] w-1.5"></div>
                            </div>
                          </div>
                          <a
                            href="javascript:"
                            className="text-base text-blue_gray-900"
                          >
                            <Text size="txtDMSansRegular16Bluegray900">
                              Career
                            </Text>
                          </a>
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtDMSansRegular16Bluegray900"
                          >
                            News
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtDMSansRegular16Bluegray900"
                          >
                            Contact
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-between w-[23%] md:w-full">
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
                  <div className="absolute flex flex-col gap-[13px] h-max inset-[0] items-center justify-center m-auto w-[19%]">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                      size="txtFredokaMedium40WhiteA700"
                    >
                      About Us
                    </Text>
                    <div className="flex flex-row font-dmsans gap-4 items-center justify-between w-full">
                      <Text
                        className="text-center text-white-A700 text-xl"
                        size="txtDMSansRegular20WhiteA700"
                      >
                        Home
                      </Text>
                      <div className="bg-white-A700 h-[9px] my-2 rounded w-[9px]"></div>
                      <Text
                        className="text-center text-white-A700 text-xl"
                        size="txtDMSansBold20"
                      >
                        About Us
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1174px] mx-auto md:px-5 w-full">
            <div className="md:h-[570px] h-[594px] relative w-full">
              <div className="absolute md:h-[570px] h-[577px] inset-y-[0] left-[0] my-auto w-[90%] md:w-full">
                <div className="absolute md:h-[570px] h-[577px] inset-[0] justify-center m-auto w-[69%] md:w-full">
                  <div className="absolute bg-gradient3  flex flex-col gap-[7px] h-full inset-y-[0] items-center justify-center my-auto p-[59px] md:px-10 sm:px-5 right-[0] rounded-[30px] shadow-bs6 w-[87%]">
                    <Text
                      className="mt-[9px] text-base text-center text-indigo-300 tracking-[3.00px] uppercase"
                      size="txtFredokaMedium16"
                    >
                      About hospital
                    </Text>
                    <div className="flex flex-col items-center justify-start mb-[9px] w-full">
                      <Text
                        className="leading-[50.00px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center w-full"
                        size="txtCormorantGaramondBold40"
                      >
                        <span className="text-blue_gray-900 font-fredoka font-medium">
                          Super{" "}
                        </span>
                        <span className="text-blue_gray-700 font-fredoka font-medium">
                          Speciality
                        </span>
                        <span className="text-blue_gray-900 font-fredoka font-medium">
                          {" "}
                          Hospital Of South Gujarat.
                        </span>
                      </Text>
                      <Text
                        className="mt-[13px] text-base text-blue_gray-400 text-center"
                        size="txtDMSansRegular16Bluegray400"
                      >
                        <>
                          Dhameliya Kidney Hospital has born out of the need for
                          a good center which catered to patients with
                          complicated kidney diseases in Surat. It is a
                          judicious blend of high end technology, world class
                          expertise and outstanding personalized care. With time
                          it has become best kidney hospital in SURAT. Hospital
                          with all facilities under one roof provides for
                          greater efficiency in meeting the overall needs of a
                          patient.
                          <br />
                          patients with complicated kidney diseases in Surat. It
                          is a judicious blend of high end technology
                        </>
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[188px] mt-[31px]"
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
                  <Img
                    className="absolute bottom-[26%] h-[117px] left-[0] w-[117px]"
                    src="images/img_image50traced_gray_900.svg"
                    alt="image50traced"
                  />
                </div>
                <div className="absolute flex flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[9%] w-full">
                  <Img
                    className="h-64 md:h-auto object-cover rounded-[30px]"
                    src="images/img_aboutoneimg1jpg_256x303.png"
                    alt="aboutoneimg1jpg"
                  />
                  <Button
                    className="flex h-[45px] items-center justify-center mt-[162px] w-[45px]"
                    shape="round"
                    size="sm"
                    variant="gradient"
                    color="blue_gray_700_01_indigo_400"
                  >
                    <Img
                      className="h-[23px]"
                      src="images/img_group1171275298.png"
                      alt="group1171275298"
                    />
                  </Button>
                </div>
              </div>
              <Img
                className="absolute h-[147px] right-[16%] top-[0]"
                src="images/img_vector3.svg"
                alt="vectorThree"
              />
              <div className="absolute bottom-[15%] h-[216px] right-[0] rotate-[27deg] w-[23%]">
                <Img
                  className="h-[216px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_aboutoneimg1jpg_216x261.png"
                  alt="aboutoneimg1jpg_One"
                />
                <Img
                  className="absolute bottom-[20%] h-[39px] left-[35%] w-[39px]"
                  src="images/img_star1_39x39.svg"
                  alt="starOne"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start p-[90px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1184px] mx-auto w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                  size="txtFredokaMedium16"
                >
                  About doctor
                </Text>
                <Text
                  className="leading-[50.00px] mt-[7px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 w-full"
                  size="txtFredokaMedium40"
                >
                  <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                    Improving{" "}
                  </span>
                  <span className="text-blue_gray-700 font-fredoka text-left font-medium">
                    The Quality
                  </span>
                  <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                    {" "}
                    Of Your Life Through Better Health.
                  </span>
                </Text>
                <Text
                  className="mt-[23px] text-blue_gray-900 text-xl"
                  size="txtFredokaMedium20Bluegray900"
                >
                  Our support services inclide:
                </Text>
                <Text
                  className="mt-[13px] text-base text-blue_gray-400 w-[92%] sm:w-full"
                  size="txtDMSansRegular16Bluegray400"
                >
                  Completed mbbs in 1998 from B.J. Medical College, Ahmedabad.
                  Completed M.S. General Surgery in 2003 from Shardaben
                  Hospital, Ahemdabad. He was the only student of Gujarat who
                  selected for m.c.h study in 2004 and completed that in 2007.
                </Text>
                <Text
                  className="mt-6 text-blue_gray-900 text-xl"
                  size="txtFredokaMedium20Bluegray900"
                >
                  Professional Experience:
                </Text>
                <Text
                  className="mt-[13px] text-base text-blue_gray-400 w-[92%] sm:w-full"
                  size="txtDMSansRegular16Bluegray400"
                >
                  He started private practice in Surgical Urology at Surat in
                  2007 at Dhameliya Kidney Hospital. He is also giving his
                  service to the PATEL KIDNEY HOSPITAL which is a trust hospital
                  in Surat He is visiting doctor in many of hospital in Surat.
                  (E.g. Mahavir hospital,BAPS hospital, Unique hospital, Apple
                  hospital).
                </Text>
                <Text
                  className="mt-2 text-base text-blue_gray-400 w-[92%] sm:w-full"
                  size="txtDMSansRegular16Bluegray400"
                >
                  He had presented papers on laparoscopic radical prostatectomy
                  and laparoscopic radical cystectomy at Goa, Mahesana, Patna,
                  Mumbai and Ahmedabad.
                </Text>
              </div>
              <div className="h-[610px] relative w-[54%] md:w-full">
                <Img
                  className="absolute h-[610px] inset-y-[0] my-auto object-cover right-[0] rounded-[30px] w-3/4"
                  src="images/img_aboutoneimg1jpg_610x474.png"
                  alt="aboutoneimg1jpg_Two"
                />
                <div className="absolute bg-white-A700 bottom-[5%] flex flex-col items-center justify-start left-[0] p-[15px] rounded-[10px] shadow-bs4 w-[44%]">
                  <div className="flex flex-col items-center justify-start my-[5px] w-full">
                    <Img
                      className="h-[47px] md:h-auto rounded-[50%] w-[47px]"
                      src="images/img_ellipse221.png"
                      alt="ellipse221"
                    />
                    <Text
                      className="mt-[13px] text-blue_gray-900 text-xl"
                      size="txtFredokaMedium20Bluegray900"
                    >
                      Dr. Arvind B. Dhameliya
                    </Text>
                    <Text
                      className="mt-[3px] text-base text-blue_gray-400 text-center w-full"
                      size="txtDMSansRegular16Bluegray400"
                    >
                      Consultant urologist,Laproscopic Surgeon & Andrologist
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[68px] left-[4%] top-[36%]"
                  src="images/img_arrow.svg"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:h-[1315px] md:h-[1769px] h-[780px] justify-end max-w-[1183px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[55px] mb-[225px] mt-auto mx-auto object-cover w-1/5"
              src="images/img_image204.png"
              alt="image204"
            />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex md:flex-col flex-row font-fredoka md:gap-5 items-center justify-start md:ml-[0] ml-[111px] w-[77%] md:w-full">
                  <Img
                    className="h-[54px] w-[54px]"
                    src="images/img_search.svg"
                    alt="settings"
                  />
                  <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[278px]">
                    <Text
                      className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                      size="txtFredokaMedium16"
                    >
                      Facility
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
                      size="txtFredokaMedium40"
                    >
                      <span className="text-blue_gray-900 font-fredoka font-medium">
                        Cashless{" "}
                      </span>
                      <span className="text-blue_gray-700 font-fredoka font-medium">
                        Facility
                      </span>
                    </Text>
                  </div>
                  <Img
                    className="h-14 md:ml-[0] ml-[194px]"
                    src="images/img_cursor.svg"
                    alt="vector"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-[46px] w-full">
                  <div className="flex flex-col gap-7 items-center justify-start w-full">
                    <div className="gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                      <div className="bg-indigo-300_26 flex flex-1 flex-col items-center justify-end p-[52px] md:px-10 sm:px-5 rounded-bl-[16px] rounded-br-[16px] rounded-tl-[124px] rounded-tr-[16px] w-full">
                        <Img
                          className="h-[143px] md:h-auto object-cover w-[89%]"
                          src="images/img_image204_143x243.png"
                          alt="image204_One"
                        />
                      </div>
                      <div className="bg-indigo-300_26 flex flex-1 flex-col items-center justify-center p-[63px] md:px-10 sm:px-5 rounded-bl-[16px] rounded-br-[124px] rounded-tl-[16px] rounded-tr-[16px] w-full">
                        <Img
                          className="h-[76px] md:h-auto my-[22px] object-cover w-full"
                          src="images/img_image204_76x253.png"
                          alt="image204_Two"
                        />
                      </div>
                      <div className="bg-indigo-300_26 flex flex-1 flex-col items-center justify-start p-[47px] md:px-10 sm:px-5 rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[124px] w-full">
                        <Img
                          className="h-[152px] md:h-auto object-cover w-4/5"
                          src="images/img_image204_152x228.png"
                          alt="image204_Three"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="bg-indigo-300_26 flex flex-col items-center justify-center md:mt-0 mt-[5px] p-[72px] md:px-10 sm:px-5 rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[124px]">
                        <Img
                          className="h-[62px] md:h-auto my-5 object-cover w-full"
                          src="images/img_image204_62x235.png"
                          alt="image204_Four"
                        />
                      </div>
                      <div className="bg-indigo-300_26 h-[248px] mb-[5px] rounded-bl-[124px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] w-[33%]"></div>
                      <div className="bg-indigo-300_26 flex flex-col items-center justify-end md:mt-0 mt-[5px] p-[60px] md:px-10 sm:px-5 rounded-bl-[16px] rounded-br-[16px] rounded-tl-[124px] rounded-tr-[16px]">
                        <Img
                          className="h-[127px] md:h-auto object-cover w-[90%]"
                          src="images/img_image204_127x233.png"
                          alt="image204_Five"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-dmsans font-medium leading-[normal] min-w-[155px] md:ml-[0] ml-[514px] mt-[71px] text-center text-lg"
                  shape="round"
                  color="blue_gray_700"
                  size="md"
                  variant="outline"
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[197px] w-full">
          <div className="h-[464px] sm:h-[690px] relative w-[88%] md:w-full">
            <div className="absolute bg-blue_gray-900 blue_200_white_A700_border flex sm:flex-col flex-row sm:gap-10 h-full inset-y-[0] items-center justify-between left-[0] my-auto outline outline-[6px] pb-[76px] md:pl-10 sm:pl-5 pl-[76px] rounded-[30px] shadow-bs7 w-[86%]">
              <div className="flex flex-col gap-8 items-start justify-start">
                <div className="flex flex-col font-fredoka items-center justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-full"
                    size="txtFredokaMedium40WhiteA700"
                  >
                    Cashless Facility Available
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[221px] shadow-bs"
                  leftIcon={
                    <div className="h-6 mb-px mr-[7px] w-6 bg-blue_gray-900 shadow-bs1 p-[5px] rounded-[50%] flex justify-center items-center">
                      <Img
                        className="h-3.5"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    </div>
                  }
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                    +91 261 2490001
                  </div>
                </Button>
              </div>
              <div className="backdrop-opacity-[0.5] bg-indigo-400_01 blur-[220.00px] h-[194px] mb-[194px] rounded-[97px] w-[27%]"></div>
            </div>
            <div className="absolute bg-gradient4  md:h-60 h-[411px] inset-y-[0] my-auto outline outline-[2px] pb-11 md:pl-10 pl-11 sm:pl-5 right-[0] rotate-[-19deg] rounded-[20px] shadow-bs8 w-[55%] sm:w-full white_A700_white_A700_0f_border">
              <div className="absolute bottom-[28%] flex flex-row gap-6 items-start justify-start left-[11%] w-[55%]">
                <div className="md:h-[77px] h-[88px] mb-3 relative w-2/5">
                  <Text
                    className="absolute bottom-[0] left-[0] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                    size="txtFredokaMedium32"
                  >
                    12/25
                  </Text>
                  <Text
                    className="absolute capitalize right-[0] rotate-[-1deg] text-base text-blue_gray-700 top-[0]"
                    size="txtDMSansMedium16Bluegray700"
                  >
                    Patient Card
                  </Text>
                </div>
                <Text
                  className="mt-5 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900_1e tracking-[6.00px]"
                  size="txtFredokaBold30"
                >
                  MEDICO
                </Text>
              </div>
              <div className="absolute bg-gradient5  flex flex-col font-dmsans items-end justify-end p-[49px] md:px-10 sm:px-5 right-[0] rounded-tl-[20px] rounded-tr-[20px] top-[0]">
                <Text
                  className="capitalize mr-[5px] mt-[76px] rotate-[-1deg] text-base text-white-A700"
                  size="txtDMSansMedium16WhiteA700"
                >
                  Abc lorem ipsum
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-dmsans items-center w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-start p-[89px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[52px] items-center justify-start max-w-[1184px] mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start">
                  <Text
                    className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                    size="txtFredokaMedium16"
                  >
                    OFFICER
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
                    size="txtCrimsonProRomanSemiBold40"
                  >
                    <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                      Medical{" "}
                    </span>
                    <span className="text-blue_gray-700 font-fredoka text-left font-medium">
                      Officers
                    </span>
                  </Text>
                </div>
                <Text
                  className="leading-[130.00%] text-base text-blue_gray-400"
                  size="txtDMSansRegular16Bluegray400"
                >
                  Our administration and support staff all have exceptional
                  people skills and trained to assist you with all medical
                  enquiries.
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-gradient6  flex flex-1 flex-col gap-9 justify-start p-[22px] sm:px-5 rounded-[24px] w-full">
                  <div className="h-[312px] relative w-full">
                    <Img
                      className="h-[312px] m-auto object-cover rounded-[24px] w-full"
                      src="images/img_rectangle4345_312x337.png"
                      alt="rectangle4345"
                    />
                    <div className="absolute bg-black-900_33 h-[312px] inset-[0] justify-center m-auto rounded-[24px] w-full"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-2 ml-2 md:ml-[0]">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtFredokaMedium24"
                    >
                      Dr. Malvika Lapani
                    </Text>
                    <Text
                      className="mt-[3px] text-base text-gray-600"
                      size="txtDMSansMedium16Gray600"
                    >
                      Medical Officer
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient6  flex flex-1 flex-col gap-9 justify-start p-[22px] sm:px-5 rounded-[24px] w-full">
                  <div className="h-[312px] relative w-full">
                    <Img
                      className="h-[312px] m-auto object-cover rounded-[24px] w-full"
                      src="images/img_rectangle4345_2.png"
                      alt="rectangle4345"
                    />
                    <div className="absolute bg-black-900_33 h-[312px] inset-[0] justify-center m-auto rounded-[24px] w-full"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-2 ml-2 md:ml-[0]">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtFredokaMedium24"
                    >
                      Dr. Malvika Lapani
                    </Text>
                    <Text
                      className="mt-[3px] text-base text-gray-600"
                      size="txtDMSansMedium16Gray600"
                    >
                      Medical Officer
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient6  flex flex-1 flex-col gap-9 justify-start p-[22px] sm:px-5 rounded-[24px] w-full">
                  <div className="h-[312px] relative w-full">
                    <Img
                      className="h-[312px] m-auto object-cover rounded-[24px] w-full"
                      src="images/img_rectangle4345_3.png"
                      alt="rectangle4345"
                    />
                    <div className="absolute bg-black-900_33 h-[312px] inset-[0] justify-center m-auto rounded-[24px] w-full"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-2 ml-2 md:ml-[0]">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtFredokaMedium24"
                    >
                      Dr. Malvika Lapani
                    </Text>
                    <Text
                      className="mt-[3px] text-base text-gray-600"
                      size="txtDMSansMedium16Gray600"
                    >
                      Medical Officer
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col font-fredoka items-center justify-start mt-[119px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex flex-col gap-3 items-center justify-start md:px-5">
                <Text
                  className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                  size="txtFredokaMedium16"
                >
                  Gallery
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
                  size="txtFredokaMedium40"
                >
                  <span className="text-blue_gray-900 font-fredoka font-medium">
                    See Our{" "}
                  </span>
                  <span className="text-blue_gray-700 font-fredoka font-medium">
                    Gallery
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[5px] justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[25px] justify-start md:px-5">
                      <div className="md:h-[334px] h-[380px] relative w-full">
                        <Img
                          className="absolute h-[334px] left-[0] object-cover rounded-[16px] top-[0] w-4/5"
                          src="images/img_rectangle4376_334x319.png"
                          alt="rectangle4376_One"
                        />
                        <Img
                          className="absolute bottom-[0] h-[334px] object-cover right-[0] rounded-[16px] w-[68%]"
                          src="images/img_rectangle4360.png"
                          alt="rectangle4360"
                        />
                      </div>
                      <Text
                        className="md:ml-[0] ml-[141px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtFredokaMedium24Black900"
                      >
                        Branch 1 : Lal Darwaja
                      </Text>
                    </div>
                    <Img
                      className="h-[334px] md:h-auto md:mt-0 mt-[206px] object-cover rounded-[16px]"
                      src="images/img_rectangle4373.png"
                      alt="rectangle4373"
                    />
                    <div className="flex flex-col gap-[26px] items-center justify-start md:mt-0 mt-[60px] md:px-5">
                      <Img
                        className="h-[334px] md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                        src="images/img_rectangle4372.png"
                        alt="rectangle4372"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                        size="txtFredokaMedium24Black900"
                      >
                        Branch 3 : Adajan
                      </Text>
                    </div>
                    <div className="md:h-[352px] h-[437px] mb-[18px] md:mt-0 mt-[85px] md:px-5 relative w-[28%] md:w-full">
                      <Img
                        className="absolute h-[334px] object-cover right-[0] rounded-[16px] top-[0] w-[76%]"
                        src="images/img_rectangle4379.png"
                        alt="rectangle4379"
                      />
                      <Img
                        className="absolute bottom-[0] h-[334px] left-[0] object-cover rounded-[16px] w-[69%]"
                        src="images/img_rectangle4374.png"
                        alt="rectangle4374"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[428px] md:px-5 w-[59%] md:w-full">
                    <Text
                      className="sm:mt-0 mt-5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                      size="txtFredokaMedium24Black900"
                    >
                      Branch 2 : Udhna Darwaja
                    </Text>
                    <Text
                      className="mb-5 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                      size="txtFredokaMedium24Black900"
                    >
                      Branch 4 : Amroli
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex font-fredoka items-center justify-center mt-[116px] md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-center w-full">
              <div className="bg-blue_gray-700 flex flex-col items-center justify-start pl-0.5 rounded-[20px] w-[83%] md:w-full">
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
                              src="images/img_star13_1.svg"
                              alt="starThirteen"
                            />
                            <div className="h-[42px] relative w-[96%] sm:w-full">
                              <Text
                                className="m-auto text-base text-blue_gray-200 text-center w-full"
                                size="txtDMSansRegular16"
                              >
                                The best No-Code tips & tricks, for webflow &
                                Framer developers from experts to beginner. Join
                                our 3k community by subscribing
                              </Text>
                              <Img
                                className="absolute bottom-[5%] h-4 right-[4%] w-4"
                                src="images/img_star14_2.svg"
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
              <div className="bg-blue_gray-900 font-dmsans h-[440px] md:h-[736px] sm:h-[803px] relative w-full">
                <div className="h-[440px] md:h-[736px] m-auto w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[426px] items-start justify-start mb-[13px] p-[74px] md:px-10 sm:px-5 rounded-[213px]"
                        style={{
                          backgroundImage: "url('images/img_group39.png')",
                        }}
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
                            Dhameliya Kidney Hospital has born out of the need
                            for a good center which catered to patients with
                            complicated kidney diseases in Surat. It is a
                            judicious blend of high end technology,{" "}
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
                  <div className="absolute bottom-[6%] flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto w-[83%]">
                    <Line className="bg-white-A700 h-px w-full" />
                    <Text
                      className="text-base text-center text-white-A700"
                      size="txtDMSansRegular16WhiteA700"
                    >
                      Non Copyrighted © 2022 Design and upload by Dhameliya
                      Kidney Hospital
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[6%] flex flex-col font-fredoka gap-[45px] justify-start right-[9%] w-[56%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start w-2/5 sm:w-full">
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
                        <div className="flex flex-col font-dmsans gap-5 items-start justify-start w-full">
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
                            name="radiogroup9126124900011"
                          >
                            <Radio
                              value="912612490001"
                              className="leading-[normal] mr-[170px] text-left text-sm text-white-A700"
                              inputClassName="bg-white-A700 h-6 mr-[5px] rounded-[12px] shadow-bs1 w-6"
                              checked={true}
                              name="radiogroup9126124900011"
                              label="91 261 2490001"
                              id="912612490001"
                            ></Radio>
                            <Radio
                              value="402AayushDoctorHouseLalDarwajaStationRoadSURAT395002GUJINDIA"
                              className="leading-[normal] mt-3 text-left text-sm text-white-A700"
                              inputClassName="bg-white-A700 h-6 mr-[5px] rounded-[12px] shadow-bs1 w-6"
                              checked={true}
                              name="radiogroup9126124900011"
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
                            alt="arrowleft"
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
                            alt="arrowleft_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-1/5 sm:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtFredokaMedium20"
                        >
                          Medical Services
                        </Text>
                        <Line className="bg-white-A700_7f h-px mt-1 w-[41%]" />
                      </div>
                      <ul className="flex flex-col font-dmsans items-start justify-start w-[91%] md:w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-start justify-start">
                              <Img
                                className="h-2.5 mb-1.5 mt-[3px] w-2.5"
                                src="images/img_star14_3.svg"
                                alt="starFourteen_One"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtDMSansRegular14WhiteA700"
                              >
                                Kidney Stone
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-center justify-start mt-[9px]">
                              <Img
                                className="h-2.5 my-1 w-2.5"
                                src="images/img_star15_1.svg"
                                alt="starFifteen"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtDMSansRegular14WhiteA700"
                              >
                                Prostate
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-start justify-start mt-3">
                              <Img
                                className="h-2.5 mb-1.5 mt-0.5 w-2.5"
                                src="images/img_star16_1.svg"
                                alt="starSixteen"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtDMSansRegular14WhiteA700"
                              >
                                Uro Oncology
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-start justify-start mt-[11px]">
                              <Img
                                className="h-2.5 mb-1.5 mt-0.5 w-2.5"
                                src="images/img_star17_1.svg"
                                alt="starSeventeen"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtDMSansRegular14WhiteA700"
                              >
                                Paediatric Urology
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-start justify-start mt-[11px]">
                              <Img
                                className="h-2.5 mb-1.5 mt-0.5 w-2.5"
                                src="images/img_star18_1.svg"
                                alt="starEighteen"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtDMSansRegular14WhiteA700"
                              >
                                Female Urology
                              </Text>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[23px] items-start justify-start w-[17%] sm:w-full">
                      <div className="flex flex-col items-start justify-start w-4/5 md:w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtFredokaMedium20"
                        >
                          Quick Links{" "}
                        </Text>
                        <Line className="bg-white-A700_7f h-px mt-1 w-3/5" />
                      </div>
                      <ul className="flex flex-col font-dmsans gap-[11px] items-start justify-start w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-center justify-start">
                              <Img
                                className="h-2.5 my-1 w-2.5"
                                src="images/img_star14_4.svg"
                                alt="starFourteen_Two"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtDMSansRegular14WhiteA700"
                              >
                                Home
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-center justify-start">
                              <Img
                                className="h-2.5 my-1 w-2.5"
                                src="images/img_star15_2.svg"
                                alt="starFifteen_One"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtDMSansRegular14WhiteA700"
                              >
                                About Us
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-center justify-start">
                              <Img
                                className="h-2.5 my-1 w-2.5"
                                src="images/img_star16_2.svg"
                                alt="starSixteen_One"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtDMSansRegular14WhiteA700"
                              >
                                Medical Services
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-center justify-start">
                              <Img
                                className="h-2.5 my-1 w-2.5"
                                src="images/img_star17_2.svg"
                                alt="starSeventeen_One"
                              />
                              <Text
                                className="text-sm text-white-A700"
                                size="txtDMSansRegular14WhiteA700"
                              >
                                Testimonials
                              </Text>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-center justify-start">
                              <Img
                                className="h-2.5 my-1 w-2.5"
                                src="images/img_star18_2.svg"
                                alt="starEighteen_One"
                              />
                              <a
                                href="javascript:"
                                className="text-sm text-white-A700"
                              >
                                <Text size="txtDMSansRegular14WhiteA700">
                                  Contact Us
                                </Text>
                              </a>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Img
                    className="h-[47px] md:ml-[0] ml-[134px]"
                    src="images/img_group.svg"
                    alt="settings_One"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
