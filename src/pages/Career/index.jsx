import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  Radio,
  RadioGroup,
  Text,
  TextArea,
} from "components";

const CareerPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-fredoka sm:gap-10 md:gap-10 gap-[3712px] items-start justify-end mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center w-full">
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
                  <div className="flex flex-row font-dmsans gap-1.5 items-start justify-center ml-8 md:ml-[0] md:mt-0 mt-2 w-[14%] md:w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtDMSansRegular18"
                    >
                      Medical Services
                    </Text>
                    <Img
                      className="h-4 mt-[3px] w-4"
                      src="images/img_arrowdown.svg"
                      alt="checkmark"
                    />
                  </div>
                  <div className="flex flex-col font-dmsans items-center justify-start ml-8 md:ml-[0] md:mt-0 mt-2 w-[5%] md:w-full">
                    <a
                      href="javascript:"
                      className="text-blue_gray-700 text-lg"
                    >
                      <Text size="txtDMSansMedium18">Career</Text>
                    </a>
                    <div className="bg-blue_gray-700 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                  </div>
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
                  <div className="flex flex-row font-fredoka gap-5 items-center justify-between md:ml-[0] ml-[74px] w-[23%] md:w-full">
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
              <div className="absolute flex flex-col gap-3 h-max inset-[0] items-center justify-center m-auto w-[17%]">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtFredokaMedium40WhiteA700"
                >
                  Career
                </Text>
                <div className="flex flex-row font-dmsans gap-4 items-start justify-between w-full">
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtDMSansMedium20"
                  >
                    Home
                  </Text>
                  <div className="bg-white-A700 h-[9px] my-2 rounded w-[9px]"></div>
                  <a href="javascript:" className="text-white-A700 text-xl">
                    <Text size="txtDMSansBold20">Career</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex md:flex-col flex-row gap-[58px] items-end justify-start p-10 sm:px-5 w-full">
            <div className="sm:h-[1023px] md:h-[801px] h-[808px] mb-[50px] md:ml-[0] ml-[87px] md:px-5 relative w-[46%] md:w-full">
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[97%]">
                <a
                  href="javascript:"
                  className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                >
                  <Text size="txtFredokaMedium16">Career</Text>
                </a>
                <Text
                  className="mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
                  size="txtFredokaMedium40"
                >
                  <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                    Leave A{" "}
                  </span>
                  <span className="text-blue_gray-700 font-fredoka text-left font-medium">
                    Message
                  </span>
                </Text>
                <Text
                  className="mt-[15px] text-base text-blue_gray-400 w-full"
                  size="txtDMSansRegular16Bluegray400"
                >
                  Dhameliya Kidney Hospital has born out of the need for a good
                  center which catered to patients with complicated kidney
                  diseases in Surat. It is a judicious blend of high end
                  technology, world class expertise and outstanding personalized
                  care. With time it has become best kidney hospital in SURAT.
                  Hospital with all facilities under one roof provides for
                  greater efficiency in meeting the overall needs of a patient.
                </Text>
                <div className="bg-white-A700 flex flex-col font-dmsans items-center justify-start mt-[22px] p-[22px] sm:px-5 rounded-[30px] shadow-bs4 w-full">
                  <div className="flex flex-col items-start justify-start my-2.5 w-full">
                    <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full">
                      <Text
                        className="bg-blue_gray-900_0a h-[52px] justify-center pl-6 pr-[35px] sm:px-5 py-4 rounded-[10px] text-blue_gray-400 text-sm w-[269px]"
                        size="txtDMSansMedium14"
                      >
                        Name
                      </Text>
                      <Text
                        className="bg-blue_gray-900_0a h-[52px] justify-center pl-6 pr-[35px] sm:px-5 py-4 rounded-[10px] text-blue_gray-400 text-sm w-[269px]"
                        size="txtDMSansMedium14"
                      >
                        Email
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between mt-5 w-full">
                      <Input
                        name="group1171275210"
                        placeholder="Phone number"
                        className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        type="number"
                        shape="round"
                        color="blue_gray_900_0a"
                        size="sm"
                        variant="fill"
                      ></Input>
                      <Input
                        name="group1171275213"
                        placeholder="Experience"
                        className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        shape="round"
                        color="blue_gray_900_0a"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between mt-5 w-full">
                      <Input
                        name="group1171275212"
                        placeholder="Choose file"
                        className="!placeholder:text-blue_gray-900 !text-blue_gray-900 font-medium leading-[normal] p-0 text-left text-sm underline w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        shape="round"
                        color="blue_gray_900_0a"
                        size="sm"
                        variant="fill"
                      ></Input>
                      <Input
                        name="group1171275214"
                        placeholder="Designation"
                        className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        shape="round"
                        color="blue_gray_900_0a"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                    <TextArea
                      className="bg-blue_gray-900_0a border-0 leading-[normal] mt-5 pb-[35px] pl-6 pr-[35px] pt-[18px] sm:px-5 rounded-[10px] placeholder:text-blue_gray-900 text-blue_gray-900 text-left text-sm w-full"
                      name="group1171275215"
                      placeholder="Message"
                    ></TextArea>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[189px] mt-8 rounded-[19px]"
                      rightIcon={
                        <Img
                          className="h-6 mt-px ml-2"
                          src="images/img_arrowright_white_a700.svg"
                          alt="arrow_left"
                        />
                      }
                      color="blue_gray_700"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-medium leading-[normal] text-left text-lg">
                        Submit
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[77px] right-[0] top-[0]"
                src="images/img_volume.svg"
                alt="settings"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 my-[54px] md:px-5 w-[37%] md:w-full">
              <Img
                className="h-[749px] md:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                src="images/img_aboutoneimg1jpg_749x502.png"
                alt="aboutoneimg1jpg"
              />
            </div>
          </div>
          <footer className="flex items-center justify-center md:px-5 w-full">
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
                              src="images/img_star13_4.svg"
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
                                src="images/img_star14_11.svg"
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
              <div className="bg-blue_gray-900 h-[440px] md:h-[748px] relative w-full">
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
                          Dhameliya Kidney Hospital has born out of the need for
                          a good center which catered to patients with
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
                <div className="absolute bottom-[6%] flex flex-col inset-x-[0] items-end justify-start mx-auto w-[83%]">
                  <div className="flex md:flex-col flex-row font-fredoka md:gap-5 items-start justify-end w-[66%] md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[41%] md:w-full">
                      <div className="md:h-[181px] h-[194px] relative w-full">
                        <div className="absolute flex flex-col gap-[23px] inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
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
                              If you have any questions or need help, feel free
                              to contact with our team.
                            </Text>
                            <RadioGroup
                              selectedValue="912612490001"
                              className="flex flex-col w-full"
                              name="radiogroup9126124900014"
                            >
                              <Radio
                                value="912612490001"
                                className="leading-[normal] mr-[170px] text-left text-sm text-white-A700"
                                inputClassName="bg-white-A700 h-6 mr-[5px] rounded-[12px] shadow-bs1 w-6"
                                checked={true}
                                name="radiogroup9126124900014"
                                label="91 261 2490001"
                                id="912612490001"
                              ></Radio>
                              <Radio
                                value="402AayushDoctorHouseLalDarwajaStationRoadSURAT395002GUJINDIA"
                                className="leading-[normal] mt-3 text-left text-sm text-white-A700"
                                inputClassName="bg-white-A700 h-6 mr-[5px] rounded-[12px] shadow-bs1 w-6"
                                checked={true}
                                name="radiogroup9126124900014"
                                label="402 Aayush Doctor House Lal Darwaja Station Road SURAT 395002  GUJ INDIA"
                                id="402AayushDoctorHouseLalDarwajaStationRoadSURAT395002GUJINDIA"
                              ></Radio>
                            </RadioGroup>
                          </div>
                        </div>
                        <Img
                          className="absolute border-2 border-blue_gray-700 border-solid bottom-[0] h-14 right-[2%] rounded-[1px] w-[19%]"
                          src="images/img_star10_56x58.svg"
                          alt="starTen"
                        />
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
                      <ul className="flex flex-col font-dmsans items-start justify-start w-[91%] md:w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-start justify-start">
                              <Img
                                className="h-2.5 mb-1.5 mt-[3px] w-2.5"
                                src="images/img_star14_12.svg"
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
                                src="images/img_star15_7.svg"
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
                                src="images/img_star16_7.svg"
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
                                src="images/img_star17_7.svg"
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
                                src="images/img_star18_7.svg"
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
                      <ul className="flex flex-col font-dmsans gap-[11px] items-start justify-start w-full common-column-list">
                        <li>
                          <a href="javascript:">
                            <div className="flex flex-row gap-2 items-center justify-start">
                              <Img
                                className="h-2.5 my-1 w-2.5"
                                src="images/img_star14_13.svg"
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
                                src="images/img_star15_8.svg"
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
                                src="images/img_star16_8.svg"
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
                                src="images/img_star17_8.svg"
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
                                src="images/img_star18_8.svg"
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
                  <Line className="bg-white-A700 h-px mt-[45px] w-full" />
                  <Text
                    className="mt-[23px] text-base text-center text-white-A700"
                    size="txtDMSansRegular16WhiteA700"
                  >
                    Non Copyrighted © 2022 Design and upload by Dhameliya
                    Kidney Hospital
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <Img
          className="h-[47px] md:ml-[0] ml-[653px]"
          src="images/img_settings_1.svg"
          alt="settings_One"
        />
      </div>
    </>
  );
};

export default CareerPage;
