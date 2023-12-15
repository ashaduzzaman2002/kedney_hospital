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
  TextArea,
} from "components";
import Footer1 from "components/Footer1";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-fredoka items-center justify-end mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-indigo-50_02 flex flex-col items-end justify-start mx-auto p-2 w-full">
            <div className="flex flex-col justify-start mb-8 mt-[21px] w-[96%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-center justify-start md:ml-[0] ml-[55px] w-[88%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between mb-0.5 w-[72%] md:w-full">
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
                <div className="flex flex-row gap-5 items-center justify-between md:mt-0 mt-0.5 w-[23%] md:w-full">
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
            <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between left-[15%] my-auto w-[46%]">
              <Img
                className="h-[51px] mt-[11px] w-[51px]"
                src="images/img_minimize.svg"
                alt="Six"
              />
              <div className="flex flex-col gap-3 items-center justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtFredokaMedium40WhiteA700"
                >
                  Contact Us
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
                    <Text size="txtDMSansBold20">Contact Us</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start max-w-[1184px] mt-[119px] mx-auto pb-[5px] md:px-5 w-full">
          <div className="flex flex-col gap-3 justify-start">
            <Text
              className="md:ml-[0] ml-[185px] text-base text-indigo-300 tracking-[3.00px] uppercase"
              size="txtFredokaMedium16"
            >
              get in touch
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
              size="txtFredokaSemiBold40"
            >
              <span className="text-blue_gray-900 font-fredoka font-semibold">
                Dhameliya{" "}
              </span>
              <span className="text-blue_gray-700 font-fredoka font-semibold">
                Kidney Hospital
              </span>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-14 justify-start w-[38%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-300"
                size="txtFredokaMedium32Indigo300"
              >
                <>
                  Dhameliya Kidney Hospital <br />- Station Road
                </>
              </Text>
              <div className="flex flex-col gap-[39px] items-center justify-start ml-8 md:ml-[0] w-[93%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtFredokaMedium32Black900"
                    >
                      Quick Contacts
                    </Text>
                    <Text
                      className="text-gray-600 text-lg w-full"
                      size="txtDMSansMedium18Gray600"
                    >
                      Please feel free to contact our friendly staff with any
                      medical enquiry.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                    <div className="flex flex-row gap-5 items-start justify-between w-full">
                      <Button
                        className="flex h-12 items-center justify-center mb-[42px] mt-0.5 rounded-[50%] w-12"
                        shape="circle"
                        color="indigo_50_01"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[22px]"
                          src="images/img_call_blue_gray_700.svg"
                          alt="call"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize text-blue_gray-900 text-xl"
                          size="txtFredokaMedium20Bluegray900"
                        >
                          Contact
                        </Text>
                        <Text
                          className="mt-1 text-base text-gray-600 uppercase"
                          size="txtDMSansMedium16Gray600"
                        >
                          +91 9913225927
                        </Text>
                        <Button
                          className="capitalize cursor-pointer font-dmsans font-medium min-w-[81px] mt-[9px] rounded-[16px] text-base text-center"
                          color="blue_gray_900"
                          size="sm"
                          variant="fill"
                        >
                          Call
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[31px] w-full">
                    <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
                      <Button
                        className="flex h-12 items-center justify-center mb-[68px] rounded-[50%] w-12"
                        shape="circle"
                        color="indigo_50_01"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[22px]"
                          src="images/img_eye.svg"
                          alt="linkedin"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize text-blue_gray-900 text-xl"
                          size="txtFredokaMedium20Bluegray900"
                        >
                          Address
                        </Text>
                        <Text
                          className="mt-1.5 text-base text-gray-600 w-full"
                          size="txtDMSansMedium16Gray600"
                        >
                          402, Aayush Doctor House, Lal Darwaja, Station Road,
                          SURAT 395 002 - GUJ INDIA
                        </Text>
                        <Button
                          className="capitalize cursor-pointer font-dmsans font-medium min-w-[110px] mt-2.5 rounded-[16px] text-base text-center"
                          color="blue_gray_100_01"
                          size="sm"
                          variant="outline"
                        >
                          location
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[29px] w-[67%] md:w-full">
                    <div className="flex flex-row gap-5 items-start justify-between w-full">
                      <Button
                        className="flex h-12 items-center justify-center mb-[45px] mt-0.5 rounded-[50%] w-12"
                        shape="circle"
                        color="indigo_50_01"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[22px]"
                          src="images/img_checkmark_blue_gray_700_48x48.svg"
                          alt="checkmark_One"
                        />
                      </Button>
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <Text
                          className="capitalize text-blue_gray-900 text-xl"
                          size="txtFredokaMedium20Bluegray900"
                        >
                          E-Mail
                        </Text>
                        <Text
                          className="text-base text-gray-600"
                          size="txtDMSansMedium16Gray600"
                        >
                          arvind.dhameliya@ahoo.in
                        </Text>
                        <Button
                          className="capitalize cursor-pointer font-dmsans font-medium min-w-[110px] rounded-[16px] text-base text-center"
                          color="blue_gray_100_01"
                          size="sm"
                          variant="outline"
                        >
                          Send mail
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[604px] h-[651px] relative w-full">
                  <div className="absolute bg-indigo-300_4c h-[371px] right-[0] rounded-[24px] top-[0] w-[35%]"></div>
                  <div className="absolute bottom-[0] h-[604px] left-[0] w-[96%] sm:w-full">
                    <Img
                      className="h-[604px] m-auto object-cover rounded-[34px] w-full"
                      src="images/img_rectangle4371.png"
                      alt="rectangle4371"
                    />
                    <Img
                      className="absolute h-[212px] object-cover right-[4%] rounded-[30px] top-[3%] w-[49%]"
                      src="images/img_screenshot11.png"
                      alt="screenshotEleven"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="h-[43px] md:h-auto mt-[76px] object-cover w-[26%]"
          src="images/img_pngtreecreative.png"
          alt="pngtreecreative"
        />
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1184px] mt-[81px] mx-auto md:px-5 w-full">
          <div className="md:h-[604px] h-[651px] relative w-1/2 md:w-full">
            <div className="absolute bg-indigo-300_4c h-[371px] right-[0] rounded-[24px] top-[0] w-[35%]"></div>
            <div className="absolute bottom-[0] h-[604px] left-[0] w-[96%] sm:w-full">
              <Img
                className="h-[604px] m-auto object-cover rounded-[34px] w-full"
                src="images/img_rectangle4371.png"
                alt="rectangle4371_One"
              />
              <Img
                className="absolute h-[212px] object-cover right-[4%] rounded-[30px] top-[3%] w-[49%]"
                src="images/img_screenshot11.png"
                alt="screenshotEleven_One"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-14 justify-start w-[38%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-300"
              size="txtFredokaMedium32Indigo300"
            >
              <>
                Dhameliya Kidney Hospital <br />- Adajan
              </>
            </Text>
            <div className="flex flex-col gap-[39px] items-center justify-start ml-8 md:ml-[0] w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtFredokaMedium32Black900"
                  >
                    Quick Contacts
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtDMSansMedium18Gray600"
                  >
                    Please feel free to contact our friendly staff with any
                    medical enquiry.
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-[31px] items-center w-[98%]"
                orientation="vertical"
              >
                <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center mb-[42px] mt-0.5 rounded-[50%] w-12"
                      shape="circle"
                      color="indigo_50_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_call_blue_gray_700.svg"
                        alt="call"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        Contact
                      </Text>
                      <Text
                        className="mt-1 text-base text-gray-600 uppercase"
                        size="txtDMSansMedium16Gray600"
                      >
                        +91 9913225927
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-dmsans font-medium min-w-[81px] mt-[9px] rounded-[16px] text-base text-center"
                        color="blue_gray_900"
                        size="sm"
                        variant="fill"
                      >
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center mb-[68px] rounded-[50%] w-12"
                      shape="circle"
                      color="indigo_50_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_eye.svg"
                        alt="linkedin"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        Address
                      </Text>
                      <Text
                        className="mt-1.5 text-base text-gray-600 w-full"
                        size="txtDMSansMedium16Gray600"
                      >
                        404-5-6, Ridhi Shoppers, Opp. Star Bazaar, Adajan, SURAT
                        - 395 007 - GUJ INDIA
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-dmsans font-medium min-w-[110px] mt-2.5 rounded-[16px] text-base text-center"
                        color="blue_gray_100_01"
                        size="sm"
                        variant="outline"
                      >
                        location
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[67%] md:w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center mb-[45px] mt-0.5 rounded-[50%] w-12"
                      shape="circle"
                      color="indigo_50_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_checkmark_blue_gray_700_48x48.svg"
                        alt="checkmark"
                      />
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start">
                      <Text
                        className="capitalize text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        E-Mail
                      </Text>
                      <Text
                        className="text-base text-gray-600"
                        size="txtDMSansMedium16Gray600"
                      >
                        arvind.dhameliya@ahoo.in
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-dmsans font-medium min-w-[110px] rounded-[16px] text-base text-center"
                        color="blue_gray_100_01"
                        size="sm"
                        variant="outline"
                      >
                        Send mail
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <Img
          className="h-[43px] md:h-auto mt-[87px] object-cover w-[26%]"
          src="images/img_pngtreecreative.png"
          alt="pngtreecreative_One"
        />
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1184px] mt-[70px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-14 justify-start w-[38%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-300"
              size="txtFredokaMedium32Indigo300"
            >
              <>
                Dhameliya Kidney Hospital <br />- Ring Road
              </>
            </Text>
            <div className="flex flex-col gap-[39px] items-center justify-start ml-8 md:ml-[0] w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtFredokaMedium32Black900"
                  >
                    Quick Contacts
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtDMSansMedium18Gray600"
                  >
                    Please feel free to contact our friendly staff with any
                    medical enquiry.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center mb-[42px] mt-0.5 rounded-[50%] w-12"
                      shape="circle"
                      color="indigo_50_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_call_blue_gray_700.svg"
                        alt="call_Two"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        Contact
                      </Text>
                      <Text
                        className="mt-1 text-base text-gray-600 uppercase"
                        size="txtDMSansMedium16Gray600"
                      >
                        +91 9913225927
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-dmsans font-medium min-w-[81px] mt-[9px] rounded-[16px] text-base text-center"
                        color="blue_gray_900"
                        size="sm"
                        variant="fill"
                      >
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[31px] w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center mb-[68px] rounded-[50%] w-12"
                      shape="circle"
                      color="indigo_50_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_eye.svg"
                        alt="linkedin_One"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        Address
                      </Text>
                      <Text
                        className="mt-1.5 text-base text-gray-600 w-full"
                        size="txtDMSansMedium16Gray600"
                      >
                        Next to Parag House, Udhna Darwaja, Ring Road, SURAT 395
                        002 - GUJ INDIA
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-dmsans font-medium min-w-[110px] mt-2.5 rounded-[16px] text-base text-center"
                        color="blue_gray_100_01"
                        size="sm"
                        variant="outline"
                      >
                        location
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[29px] w-[67%] md:w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center mb-[45px] mt-0.5 rounded-[50%] w-12"
                      shape="circle"
                      color="indigo_50_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_checkmark_blue_gray_700_48x48.svg"
                        alt="checkmark_Two"
                      />
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start">
                      <Text
                        className="capitalize text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        E-Mail
                      </Text>
                      <Text
                        className="text-base text-gray-600"
                        size="txtDMSansMedium16Gray600"
                      >
                        arvind.dhameliya@ahoo.in
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-dmsans font-medium min-w-[110px] rounded-[16px] text-base text-center"
                        color="blue_gray_100_01"
                        size="sm"
                        variant="outline"
                      >
                        Send mail
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[604px] h-[651px] relative w-1/2 md:w-full">
            <div className="absolute bg-indigo-300_4c h-[371px] right-[0] rounded-[24px] top-[0] w-[35%]"></div>
            <div className="absolute bottom-[0] h-[604px] left-[0] w-[96%] sm:w-full">
              <div className="h-[604px] m-auto w-full">
                <Img
                  className="h-[604px] m-auto object-cover rounded-[34px] w-full"
                  src="images/img_rectangle4371.png"
                  alt="rectangle4371_Two"
                />
                <Img
                  className="absolute h-[212px] object-cover right-[4%] rounded-[30px] top-[3%] w-[49%]"
                  src="images/img_screenshot11.png"
                  alt="screenshotEleven_Two"
                />
              </div>
              <div className="absolute bg-white-A700 flex flex-col items-center justify-end p-4 right-[6%] rounded-[10px] shadow-bs4 top-[11%] w-[65%]">
                <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtFredokaMedium24"
                  >
                    Dhameliya Kidney Hospital
                  </Text>
                  <Text
                    className="mt-1.5 text-base text-gray-600 w-full"
                    size="txtDMSansRegular16Gray600"
                  >
                    6R3Q+VWM, Railway Station Cir, Sufi Baug, Railway Station
                    Area, Varachha, Surat, Gujarat 395003
                  </Text>
                  <div className="flex flex-row font-dmsans gap-3 items-start justify-start mt-[11px] w-[83%] md:w-full">
                    <Img
                      className="h-[22px]"
                      src="images/img_group1000003409.svg"
                      alt="group1000003409"
                    />
                    <div className="flex flex-row items-center justify-between w-1/2">
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtDMSansBold16"
                      >
                        4.9
                      </Text>
                      <Line className="bg-black-900_19 h-[17px] w-px" />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtDMSansBold16"
                      >
                        375 reviews
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row font-dmsans items-center justify-between mt-6 w-full">
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[159px] rounded-lg text-base text-center"
                      shape="round"
                      color="blue_gray_700"
                      size="sm"
                      variant="fill"
                    >
                      View larger map
                    </Button>
                    <div className="flex flex-row items-center justify-evenly">
                      <Img
                        className="h-[26px] w-[26px]"
                        src="images/img_frame_blue_gray_700.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-blue_gray-700 text-xs"
                        size="txtDMSansMedium12"
                      >
                        Direction
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="h-[43px] md:h-auto mt-[82px] object-cover w-[26%]"
          src="images/img_pngtreecreative.png"
          alt="pngtreecreative_Two"
        />
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1184px] mt-[75px] mx-auto md:px-5 w-full">
          <div className="md:h-[604px] h-[651px] relative w-1/2 md:w-full">
            <div className="absolute bg-indigo-300_4c h-[371px] right-[0] rounded-[24px] top-[0] w-[35%]"></div>
            <div className="absolute bottom-[0] h-[604px] left-[0] w-[96%] sm:w-full">
              <Img
                className="h-[604px] m-auto object-cover rounded-[34px] w-full"
                src="images/img_rectangle4371.png"
                alt="rectangle4371_Three"
              />
              <Img
                className="absolute h-[212px] object-cover right-[4%] rounded-[30px] top-[3%] w-[49%]"
                src="images/img_screenshot11.png"
                alt="screenshotEleven_Three"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-14 justify-start w-[38%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-300"
              size="txtFredokaMedium32Indigo300"
            >
              <>
                Dhameliya Kidney Hospital <br />- Amroli
              </>
            </Text>
            <div className="flex flex-col gap-[39px] items-center justify-start ml-8 md:ml-[0] w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtFredokaMedium32Black900"
                  >
                    Quick Contacts
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtDMSansMedium18Gray600"
                  >
                    Please feel free to contact our friendly staff with any
                    medical enquiry.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center mb-[42px] mt-0.5 rounded-[50%] w-12"
                      shape="circle"
                      color="indigo_50_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_call_blue_gray_700.svg"
                        alt="call_Four"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        Contact
                      </Text>
                      <Text
                        className="mt-1 text-base text-gray-600 uppercase"
                        size="txtDMSansMedium16Gray600"
                      >
                        +91 9913225927
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-dmsans font-medium min-w-[81px] mt-[9px] rounded-[16px] text-base text-center"
                        color="blue_gray_900"
                        size="sm"
                        variant="fill"
                      >
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[31px] w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center mb-[68px] rounded-[50%] w-12"
                      shape="circle"
                      color="indigo_50_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_eye.svg"
                        alt="linkedin_Two"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        Address
                      </Text>
                      <Text
                        className="mt-1.5 text-base text-gray-600 w-full"
                        size="txtDMSansMedium16Gray600"
                      >
                        206-207, Cross Road Shopping Centre, Sayan Rd, Amroli,
                        Surat, Gujarat 394107
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-dmsans font-medium min-w-[110px] mt-2.5 rounded-[16px] text-base text-center"
                        color="blue_gray_100_01"
                        size="sm"
                        variant="outline"
                      >
                        location
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[29px] w-[67%] md:w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-12 items-center justify-center mb-[45px] mt-0.5 rounded-[50%] w-12"
                      shape="circle"
                      color="indigo_50_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_checkmark_blue_gray_700_48x48.svg"
                        alt="checkmark_Three"
                      />
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start">
                      <Text
                        className="capitalize text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        E-Mail
                      </Text>
                      <Text
                        className="text-base text-gray-600"
                        size="txtDMSansMedium16Gray600"
                      >
                        arvind.dhameliya@ahoo.in
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-dmsans font-medium min-w-[110px] rounded-[16px] text-base text-center"
                        color="blue_gray_100_01"
                        size="sm"
                        variant="outline"
                      >
                        Send mail
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1184px] mt-[174px] mx-auto p-[79px] md:px-5 rounded-[30px] shadow-bs10 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-base text-indigo-300 tracking-[3.00px] uppercase"
              size="txtFredokaMedium16"
            >
              help
            </Text>
            <Text
              className="mt-3 sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
              size="txtFredokaMedium40"
            >
              How Can We Help?
            </Text>
            <Text
              className="leading-[32.00px] mt-[5px] text-blue_gray-400 text-xl w-full"
              size="txtDMSansMedium20Bluegray400"
            >
              Please feel welcome to contact our friendly reception staff with
              any general or medical enquiry. Our doctors will receive or return
              any urgent calls.
            </Text>
            <div className="flex md:flex-col flex-row font-dmsans gap-6 items-center justify-between mt-[42px] w-full">
              <Text
                className="bg-blue_gray-900_0a h-[52px] justify-center pl-6 pr-[35px] sm:px-5 py-[15px] rounded-[10px] text-base text-blue_gray-400 w-[500px]"
                size="txtDMSansMedium16Bluegray400"
              >
                Name
              </Text>
              <Text
                className="bg-blue_gray-900_0a h-[52px] justify-center pl-6 pr-[35px] sm:px-5 py-[15px] rounded-[10px] text-base text-blue_gray-400 w-[500px]"
                size="txtDMSansMedium16Bluegray400"
              >
                Email
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row font-dmsans gap-6 items-center justify-between mt-6 w-full">
              <Input
                name="group1171275264"
                placeholder="Phone Number"
                className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                type="number"
                shape="round"
                color="blue_gray_900_0a"
                size="xs"
                variant="fill"
              ></Input>
              <Input
                name="group1171275265"
                placeholder="Subject"
                className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                shape="round"
                color="blue_gray_900_0a"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <TextArea
              className="bg-blue_gray-900_0a border-0 font-dmsans font-medium leading-[normal] mt-6 pb-[35px] pl-6 pr-[35px] pt-[17px] sm:px-5 rounded-[10px] text-base placeholder:text-blue_gray-400 text-blue_gray-400 text-left w-full"
              name="group1171275266"
              placeholder="Message"
            ></TextArea>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[258px] mt-8 rounded-[19px]"
              rightIcon={
                <Img
                  className="h-6 mb-px ml-[5px]"
                  src="images/img_arrowright.svg"
                  alt="arrow_left"
                />
              }
              color="blue_gray_700"
              size="md"
              variant="fill"
            >
              <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                Submit Request
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[62px] md:px-10 sm:px-5 px-[505px] w-full">
          <Img
            className="h-[52px]"
            src="images/img_minimize_blue_gray_700.svg"
            alt="microphone"
          />
        </div>
        <Footer1 className="flex items-center justify-center mt-1.5 md:px-5 w-full" />
        <div className="flex flex-col items-start mt-[370px] md:px-10 sm:px-5 px-[653px] w-full">
          <Img
            className="h-[47px]"
            src="images/img_settings_3.svg"
            alt="settings"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
