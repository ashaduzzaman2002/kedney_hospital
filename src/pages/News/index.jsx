import React from "react";

import { Button, Img, Input, Line, Radio, RadioGroup, Text } from "components";
import Footer1 from "components/Footer1";

const NewsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-fredoka items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="bg-indigo-50_02 flex flex-col items-end justify-start mx-auto p-2 w-full">
              <div className="flex flex-col justify-start mb-8 mt-[23px] w-[96%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-center justify-start md:ml-[0] ml-[55px] w-[88%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-[72%] md:w-full">
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
                    <div className="flex sm:flex-col flex-row font-dmsans gap-8 items-start justify-between w-[71%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtDMSansRegular18"
                      >
                        Home
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtDMSansRegular18"
                      >
                        About
                      </Text>
                      <div className="flex flex-row gap-1.5 items-start justify-center">
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
                      <a
                        href="javascript:"
                        className="text-blue_gray-900 text-lg"
                      >
                        <Text size="txtDMSansRegular18">Career</Text>
                      </a>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-blue_gray-700 text-lg"
                          size="txtDMSansMedium18"
                        >
                          News
                        </Text>
                        <div className="bg-blue_gray-700 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                      </div>
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtDMSansRegular18"
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
              <div className="absolute flex flex-col gap-3 h-max inset-[0] justify-center m-auto w-[23%]">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtFredokaMedium40WhiteA700"
                >
                  Latest News{" "}
                </Text>
                <div className="flex flex-row font-dmsans gap-4 items-start justify-start md:ml-[0] ml-[30px] w-[68%] md:w-full">
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtDMSansMedium20"
                  >
                    Home
                  </Text>
                  <div className="bg-white-A700 h-[9px] my-2 rounded w-[9px]"></div>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtDMSansBold20"
                  >
                    News
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[163px] mt-[97px] md:px-5 w-[66%] md:w-full">
            <div className="h-[68px] md:h-[76px] mb-[9px] md:mt-0 mt-[30px] relative w-[9%] md:w-full">
              <Img
                className="absolute h-[67px] inset-[0] justify-center m-auto"
                src="images/img_minimize_blue_gray_700.svg"
                alt="microphone"
              />
              <Img
                className="absolute h-[67px] inset-[0] justify-center m-auto"
                src="images/img_minimize_blue_gray_700.svg"
                alt="microphone_One"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-start mb-2 md:ml-[0] ml-[369px] md:mt-0 mt-5">
              <Text
                className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                size="txtDMSansMedium16"
              >
                Our Blogs
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
                size="txtFredokaSemiBold40"
              >
                <span className="text-blue_gray-900 font-fredoka font-medium">
                  Latest{" "}
                </span>
                <span className="text-blue_gray-700 font-fredoka font-medium">
                  News
                </span>
              </Text>
            </div>
            <Img
              className="h-[107px] md:h-auto md:ml-[0] ml-[161px] object-cover w-[107px]"
              src="images/img_221947496578186.png"
              alt="221947496578186"
            />
          </div>
          <div className="sm:h-[1437px] h-[1473px] md:h-[1951px] mt-[55px] md:px-5 relative w-full">
            <div className="absolute bg-gray-100 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[94px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-8 items-end justify-start mt-[204px] w-[95%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[19px] rounded-[30px] shadow-bs9 w-[35%] md:w-full">
                  <div className="flex flex-col gap-4 justify-start w-full">
                    <Img
                      className="h-[141px] md:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-full"
                      src="images/img_rectangle4355.png"
                      alt="rectangle4355"
                    />
                    <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[90%] md:w-full">
                      <Text
                        className="leading-[32.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                        size="txtFredokaMedium24"
                      >
                        What To Do When You Break A Bone?
                      </Text>
                      <Text
                        className="mt-2.5 text-base text-gray-600"
                        size="txtDMSansRegular16Gray600"
                      >
                        <span className="text-gray-600 font-dmsans text-left font-normal">
                          The most common way a bone...{" "}
                        </span>
                        <span className="text-indigo-300 font-dmsans text-left font-medium">
                          Read More
                        </span>
                      </Text>
                      <div className="flex flex-col font-dmsans items-center justify-start mt-[13px] w-[61%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row gap-4 items-start justify-between w-full">
                            <Img
                              className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                              src="images/img_ellipse239.png"
                              alt="ellipse239"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtDMSansMedium18Bluegray900"
                              >
                                James Williams
                              </Text>
                              <div className="flex flex-col items-center justify-start mt-[3px]">
                                <Text
                                  className="text-gray-600 text-sm"
                                  size="txtDMSansRegular14Gray600"
                                >
                                  October 22, 2022
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-8 items-start justify-between w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[217px] p-5 rounded-[30px] shadow-bs5 w-[64%] md:w-full">
                      <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-[98%] md:w-full">
                        <Img
                          className="h-[138px] md:h-auto object-cover rounded-[30px]"
                          src="images/img_rectangle4383.png"
                          alt="rectangle4383"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                            size="txtFredokaMedium24"
                          >
                            What To Do When You Break A Bone?
                          </Text>
                          <div className="flex flex-col font-dmsans items-center justify-start w-full">
                            <div className="flex flex-col gap-5 items-start justify-start w-full">
                              <Text
                                className="leading-[24.00px] text-base text-gray-600 w-full"
                                size="txtDMSansRegular16Gray600"
                              >
                                <span className="text-gray-600 font-dmsans text-left font-normal">
                                  Dr Hawks: I might not be an expert on this
                                  topic since —fun fact — I’ve never broken a
                                  bone myself!{" "}
                                </span>
                                <span className="text-gray-600 font-dmsans text-left font-normal">
                                  ...{" "}
                                </span>
                                <span className="text-indigo-300 font-dmsans text-left font-medium">
                                  Read More
                                </span>
                              </Text>
                              <div className="flex flex-row gap-1.5 items-start justify-start w-[22%] md:w-full">
                                <a
                                  href="javascript:"
                                  className="text-base text-indigo-300"
                                >
                                  <Text size="txtDMSansMedium16">
                                    Read More
                                  </Text>
                                </a>
                                <Button
                                  className="flex h-6 items-center justify-center w-6"
                                  shape="circle"
                                  color="indigo_50_01"
                                  size="xs"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-4"
                                    src="images/img_maximize.svg"
                                    alt="arrowleft"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end mb-10 p-[19px] rounded-[30px] shadow-bs9 w-[35%] md:w-full">
                      <div className="flex flex-col gap-4 justify-start w-full">
                        <Img
                          className="h-[141px] md:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-full"
                          src="images/img_rectangle4355.png"
                          alt="rectangle4355_One"
                        />
                        <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[90%] md:w-full">
                          <Text
                            className="leading-[32.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                            size="txtFredokaMedium24"
                          >
                            What To Do When You Break A Bone?
                          </Text>
                          <Text
                            className="mt-2.5 text-base text-gray-600"
                            size="txtDMSansRegular16Gray600"
                          >
                            <span className="text-gray-600 font-dmsans text-left font-normal">
                              The most common way a bone...{" "}
                            </span>
                            <span className="text-indigo-300 font-dmsans text-left font-medium">
                              Read More
                            </span>
                          </Text>
                          <div className="flex flex-col font-dmsans items-center justify-start mt-[13px] w-[61%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-row gap-4 items-start justify-between w-full">
                                <Img
                                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                  src="images/img_ellipse239.png"
                                  alt="ellipse239_One"
                                />
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="text-blue_gray-900 text-lg"
                                    size="txtDMSansMedium18Bluegray900"
                                  >
                                    James Williams
                                  </Text>
                                  <div className="flex flex-col items-center justify-start mt-[3px]">
                                    <Text
                                      className="text-gray-600 text-sm"
                                      size="txtDMSansRegular14Gray600"
                                    >
                                      October 22, 2022
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[30px] shadow-bs5 w-[64%] md:w-full">
                    <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-[98%] md:w-full">
                      <Img
                        className="h-[138px] md:h-auto object-cover rounded-[30px]"
                        src="images/img_rectangle4383.png"
                        alt="rectangle4383_One"
                      />
                      <div className="flex flex-col gap-2.5 items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                          size="txtFredokaMedium24"
                        >
                          What To Do When You Break A Bone?
                        </Text>
                        <div className="flex font-dmsans h-[92px] justify-end relative w-full">
                          <a
                            href="javascript:"
                            className="mb-0.5 mt-auto text-base text-indigo-300"
                          >
                            <Text size="txtDMSansMedium16">Read More</Text>
                          </a>
                          <div className="absolute flex flex-col gap-5 h-full inset-[0] justify-center m-auto w-full">
                            <Text
                              className="leading-[24.00px] text-base text-gray-600 w-full"
                              size="txtDMSansRegular16Gray600"
                            >
                              <span className="text-gray-600 font-dmsans text-left font-normal">
                                Dr Hawks: I might not be an expert on this topic
                                since —fun fact — I’ve never broken a bone
                                myself!{" "}
                              </span>
                              <span className="text-gray-600 font-dmsans text-left font-normal">
                                ...{" "}
                              </span>
                              <span className="text-indigo-300 font-dmsans text-left font-medium">
                                Read More
                              </span>
                            </Text>
                            <Button
                              className="flex h-6 items-center justify-center md:ml-[0] ml-[87px] mr-[401px] w-6"
                              shape="circle"
                              color="indigo_50_01"
                              size="xs"
                              variant="fill"
                            >
                              <Img
                                className="h-4"
                                src="images/img_maximize.svg"
                                alt="arrowleft_One"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 flex flex-col items-start justify-start left-[9%] p-4 rounded-[30px] shadow-bs5 top-[0] w-[52%]">
              <Img
                className="h-[323px] sm:h-auto object-cover rounded-[24px] w-full"
                src="images/img_rectangle4345_323x325.png"
                alt="rectangle4345"
              />
              <Text
                className="mt-[42px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtFredokaMedium32"
              >
                What To Do When You Break A Bone?
              </Text>
              <Text
                className="leading-[24.00px] mt-4 text-base text-gray-600"
                size="txtDMSansRegular16Gray600"
              >
                <>
                  Breaking a bone is a serious and scary situation that can
                  happen to anyone in a number of different ways. The most
                  common way a bone breaks is through a traumatic event like a
                  car accident, a fall, or a sports-related injury; however, a
                  broken bone can even occur through improper overuse. Those
                  diagnosed with Osteoporosis are much more likely to find
                  themselves with a fracture because the ailment itself leads to
                  weakened bones, making them more likely to break.
                  <br />
                  Bone breaks are categorized into different types of fractures.
                  The most common types are stable fractures, open compound
                  fractures, transverse fractures, oblique fractures, and
                  comminuted fractures. These types of fractures range in
                  severity from a simple bone displacement to a fracture
                  involving the bone breaking through the skin.
                  <br />
                  Once a doctor diagnoses what kind of fracture you have, they
                  can develop a treatment plan. For some breaks, your doctor
                  might elect to treat it with a cast, sling, or boot; for a
                  more severe break, the patient may require surgery. Treatment
                  options depend on where the fracture is located, the
                  patient&#39;s age and health, and the break&#39;s severity.
                  <br />
                  That said, any broken bone hurts, and not a week goes by that
                  I don&#39;t hear, “Doc, this is the worst pain I’ve ever felt,
                  and I’ve had ‘insert any other painful condition here!’”
                </>
              </Text>
              <div className="flex flex-col font-dmsans items-center justify-start mb-4 mt-6 w-[28%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-4 items-start justify-between w-full">
                    <Img
                      className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_ellipse239.png"
                      alt="ellipse239_Two"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtDMSansMedium18Bluegray900"
                      >
                        James Williams
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[3px]">
                        <Text
                          className="text-gray-600 text-sm"
                          size="txtDMSansRegular14Gray600"
                        >
                          October 22, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 md:h-[315px] h-[355px] p-[7px] right-[9%] rounded-[30px] shadow-bs9 top-[0] w-[29%] sm:w-full">
              <div className="absolute flex flex-col gap-4 h-max inset-[0] justify-center m-auto w-[91%]">
                <Img
                  className="h-[141px] md:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-full"
                  src="images/img_rectangle4355.png"
                  alt="rectangle4355_Two"
                />
                <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[90%] md:w-full">
                  <Text
                    className="leading-[32.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                    size="txtFredokaMedium24"
                  >
                    What To Do When You Break A Bone?
                  </Text>
                  <Text
                    className="mt-2.5 text-base text-gray-600"
                    size="txtDMSansRegular16Gray600"
                  >
                    <span className="text-gray-600 font-dmsans text-left font-normal">
                      The most common way a bone...{" "}
                    </span>
                    <span className="text-indigo-300 font-dmsans text-left font-medium">
                      Read More
                    </span>
                  </Text>
                  <div className="flex flex-col font-dmsans items-center justify-start mt-[13px] w-[61%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row gap-4 items-start justify-between w-full">
                        <Img
                          className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                          src="images/img_ellipse239.png"
                          alt="ellipse239_Three"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-blue_gray-900 text-lg"
                            size="txtDMSansMedium18Bluegray900"
                          >
                            James Williams
                          </Text>
                          <div className="flex flex-col items-center justify-start mt-[3px]">
                            <Text
                              className="text-gray-600 text-sm"
                              size="txtDMSansRegular14Gray600"
                            >
                              October 22, 2022
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="absolute flex h-[38px] items-center justify-center right-[5%] rounded-[50%] top-[2%] w-[38px]"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_maximize.svg"
                  alt="arrowleft_Two"
                />
              </Button>
            </div>
          </div>
          <Footer1 className="flex items-center justify-center mt-[120px] md:px-5 w-full" />
          <Img
            className="h-[47px] md:ml-[0] ml-[653px] mt-[3039px]"
            src="images/img_settings_2.svg"
            alt="settings"
          />
        </div>
      </div>
    </>
  );
};

export default NewsPage;
