import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  RatingBar,
  Text,
} from "components";
import Footer1 from "components/Footer1";
import Layout from "layout/Layout";

const Home = () => {
  return (
    <Layout>
        
      <div className="bg-white-A700 flex flex-col font-dmsans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-gray-100 sm:h-[485px] md:h-[721px] h-[879px] pt-8 md:px-5 px-8 relative w-full">
            <div className="flex flex-col md:gap-10 gap-[105px] h-full items-start justify-start m-auto w-[83%]">
             
              <div className="md:h-[328px] h-[690px] relative w-3/4 md:w-full">
                <div className="absolute bg-gradient2  bottom-[0] flex flex-col items-center justify-start left-[0] rounded-tl-[148px] rounded-tr-[148px] w-[34%]">
                  <div className="h-[291px] relative w-full">
                    <Img
                      className="h-[291px] m-auto object-cover rounded-tl-[222px] rounded-tr-[222px] w-full"
                      src="images/img_group1171275089.png"
                      alt="group1171275089"
                    />
                    <Img
                      className="absolute h-[291px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_image203.png"
                      alt="image203"
                    />
                  </div>
                </div>
                <Text
                  className="absolute leading-[130.00%] left-[0] text-blue_gray-400 text-xl top-[24%] w-[57%] sm:w-full"
                  size="txtDMSansRegular20"
                >
                  Dhameliya Kidney Hospital has born out of the need for a good
                  centre which catered to patients with complicated kidney
                  diseases in Surat.
                </Text>
                <div className="flex flex-row gap-6 h-full items-center justify-between mt-[276px] w-[43%]">
                  <Input
                    name="group1000003543"
                    placeholder="Get Appointment"
                    className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-left text-lg w-full"
                    wrapClassName=""
                    shape="round"
                    color="blue_gray_700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[155px] text-center text-lg"
                    shape="round"
                    color="blue_gray_700"
                    size="md"
                    variant="outline"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="absolute font-cormorantgaramond md:h-[289px] h-[433px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="absolute h-36 left-[0] top-[1%] w-[70%] md:w-full">
                    <Text
                      className="m-auto md:text-5xl text-6xl text-blue_gray-700 w-full"
                      size="txtCormorantGaramondBold60"
                    >
                      <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                        Find the good life by{" "}
                      </span>
                      <span className="text-indigo-300 font-fredoka text-left font-semibold">
                        good
                      </span>
                      <span className="text-blue_gray-700 font-fredoka text-left font-medium">
                        {" "}
                      </span>
                      <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                        health
                      </span>
                    </Text>
                    <Img
                      className="absolute bottom-[9%] h-10 object-cover right-[40%] w-[8%]"
                      src="images/img_m028t0135emed.png"
                      alt="m028t0135emed"
                    />
                  </div>
                  <div className="absolute bg-indigo-300_01 bottom-[0] flex flex-col items-center justify-end pt-[22px] sm:px-5 px-[22px] right-[0] rounded-[20px] w-[32%]">
                    <Img
                      className="h-[267px] md:h-auto object-cover w-4/5"
                      src="images/img_portraitsmilin.png"
                      alt="portraitsmilin"
                    />
                  </div>
                  <div className="absolute bg-indigo-300_01 flex flex-col items-center justify-start p-[22px] sm:px-5 right-[17%] rounded-[20px] top-[0] w-[16%]">
                    <Img
                      className="h-[83px] md:h-auto object-cover w-[83px]"
                      src="images/img_65781551.png"
                      alt="65781551"
                    />
                  </div>
                  <div className="absolute bg-blue_gray-700_33 flex flex-col items-center justify-start p-[13px] right-[0] rounded-[20px] top-[0] w-[16%]">
                    <Img
                      className="h-[101px] md:h-auto object-cover w-[101px]"
                      src="images/img_87919741.png"
                      alt="87919741"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[22%] h-[87px] right-[36%]"
                    src="images/img_image50traced.svg"
                    alt="image50traced"
                  />
                </div>
              </div>
            </div>
            <div className="absolute h-[385px] right-[9%] top-[18%] w-1/5">
              <div className="absolute bg-blue_gray-700 bottom-[0] h-[356px] inset-x-[0] mx-auto rounded-[20px] w-full"></div>
              <Img
                className="absolute h-[385px] inset-[0] justify-center m-auto object-cover w-[91%]"
                src="images/img_femaledoctorh.png"
                alt="femaledoctorh"
              />
            </div>
            <div className="absolute bottom-[5%] md:h-56 h-[276px] right-[9%] w-[43%] md:w-full">
              <div className="absolute bottom-[0] md:h-[163px] h-[199px] left-[0] w-[71%] sm:w-full">
                <div className="absolute bg-blue_gray-700 h-[163px] left-[7%] rounded-[20px] top-[0] w-[65%]"></div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[157px] inset-x-[0] items-start justify-end mx-auto p-14 md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group481.svg')" }}
                >
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[219px] ml-2 md:ml-[0] mt-[5px] text-center text-lg"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="outline"
                  >
                    Make Appointment
                  </Button>
                </div>
              </div>
              <Img
                className="absolute h-56 object-cover right-[0] rounded-[20px] top-[0] w-[46%]"
                src="images/img_rectangle4349.png"
                alt="rectangle4349"
              />
              <div className="absolute flex flex-row gap-4 items-start justify-center left-[10%] top-[38%] w-[35%]">
                <Img
                  className="h-[47px] md:h-auto rounded-[50%] w-[47px]"
                  src="images/img_ellipse221.png"
                  alt="ellipse221"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtFredokaMedium20"
                  >
                    Dr. Alex Smith
                  </Text>
                  <Text
                    className="mt-1 text-base text-blue_gray-200"
                    size="txtDMSansRegular16"
                  >
                    Infermrdica Hospital
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="absolute bottom-[7%] h-[60px] left-[40%] object-cover w-[5%]"
              src="images/img_m028t0135amed.png"
              alt="m028t0135amed"
            />
            
          </div>

          
          <div className="h-[513px] sm:h-[577px] md:h-[965px] max-w-[1220px] mt-[92px] mx-auto md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[98%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <div className="md:h-[391px] h-[485px] relative w-[51%] md:w-full">
                  <Img
                    className="absolute bottom-[0] h-[391px] object-cover right-[0] rounded-bl-[70px] rounded-br-[10px] rounded-tl-[70px] rounded-tr-[70px] w-[87%]"
                    src="images/img_aboutoneimg1jpg.png"
                    alt="aboutoneimg1jpg"
                  />
                  <div className="absolute bg-white-A700 flex flex-col items-center justify-end left-[0] p-5 rounded-[10px] shadow-bs4 top-[0] w-[34%]">
                    <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-xl"
                          size="txtFredokaMedium20Bluegray900"
                        >
                          Our Happy Clients
                        </Text>
                        <Text
                          className="mt-1 text-base text-blue_gray-400"
                          size="txtDMSansRegular16Bluegray400"
                        >
                          150+ Clients
                        </Text>
                      </div>
                      <div className="flex relative w-[76%]">
                        <div className="flex my-auto w-[78%]">
                          <div className="flex my-auto w-[70%]">
                            <Img
                              className="h-[39px] my-auto rounded-[50%] w-[39px]"
                              src="images/img_ellipse203.png"
                              alt="ellipse203"
                            />
                            <Img
                              className="h-[39px] ml-[-10.11px] my-auto object-cover rounded-[19px] w-[38px] z-[1]"
                              src="images/img_ellipse204.png"
                              alt="ellipse204"
                            />
                          </div>
                          <Img
                            className="h-[39px] ml-[-10.11px] my-auto rounded-[50%] w-[39px] z-[1]"
                            src="images/img_ellipse205.png"
                            alt="ellipse205"
                          />
                        </div>
                        <Img
                          className="h-[39px] ml-[-10.12px] my-auto object-cover rounded-[19px] w-[38px] z-[1]"
                          src="images/img_ellipse206.png"
                          alt="ellipse206"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[3px] md:mt-0 mt-[42px] w-[43%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                      size="txtDMSansMedium16"
                    >
                      About hospital
                    </Text>
                    <Text
                      className="leading-[50.00px] mt-[7px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 w-full"
                      size="txtCormorantGaramondBold40"
                    >
                      <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                        Super{" "}
                      </span>
                      <span className="text-blue_gray-700 font-fredoka text-left font-medium">
                        Speciality
                      </span>
                      <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                        {" "}
                        Hospital Of South Gujarat.
                      </span>
                    </Text>
                    <Text
                      className="mt-3.5 text-base text-blue_gray-400"
                      size="txtDMSansRegular16Bluegray400"
                    >
                      <>
                        Dhameliya Kidney Hospital has born out of the need for a
                        good center which catered to patients with complicated
                        kidney diseases in Surat. It is a judicious blend of
                        high end technology, world class expertise and
                        outstanding personalized care. With time it has become
                        best kidney hospital in SURAT. Hospital with all
                        facilities under one roof provides for greater
                        efficiency in meeting the overall needs of a patient.
                        <br />
                        patients with complicated kidney diseases in Surat. It
                        is a judicious blend of high end technology
                      </>
                    </Text>
                    <div className="flex flex-row font-dmsans items-end justify-between mt-8 w-[67%] md:w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[189px]"
                        rightIcon={
                          <Img
                            className="h-6 mt-px ml-2.5"
                            src="images/img_arrowright.svg"
                            alt="arrow_left"
                          />
                        }
                        shape="round"
                        color="blue_gray_700"
                        size="md"
                        variant="fill"
                      >
                        <div className="font-medium leading-[normal] text-left text-lg">
                          Read More
                        </div>
                      </Button>
                      <Img
                        className="h-[39px] mb-1 mt-[9px] w-[39px]"
                        src="images/img_star1.svg"
                        alt="starOne"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[67px] object-cover right-[0] top-[0] w-[5%]"
              src="images/img_8507170.png"
              alt="8507170"
            />
          </div>
          <div className="bg-gray-100 flex flex-col font-jost items-center justify-start mt-[120px] p-[88px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1184px] mx-auto w-full">
              <div className="sm:h-[1426px] h-[579px] md:h-[987px] relative w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col gap-[53px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-center justify-start">
                      <Text
                        className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                        size="txtDMSansMedium16"
                      >
                        Services
                      </Text>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
                        size="txtCrimsonProRomanSemiBold40"
                      >
                        <span className="text-blue_gray-900 font-fredoka font-medium">
                          Our{" "}
                        </span>
                        <span className="text-blue_gray-700 font-fredoka font-medium">
                          Medical
                        </span>
                        <span className="text-blue_gray-900 font-fredoka font-medium">
                          {" "}
                          Services
                        </span>
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-blue_gray-700_14 flex flex-1 flex-col items-center justify-end rounded-[14px] w-full">
                        <div className="flex flex-col items-center justify-start mb-[15px] mt-[25px] w-[381px] md:w-full">
                          <div className="flex flex-row font-fredoka items-end justify-between w-[84%] md:w-full">
                            <Text
                              className="mt-[7px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                              size="txtFredokaMedium24"
                            >
                              Kidney Stone
                            </Text>
                            <Button
                              className="flex h-[38px] items-center justify-center rounded-[50%] w-[38px]"
                              color="blue_gray_700"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-[25px]"
                                src="images/img_upload.svg"
                                alt="arrowleft"
                              />
                            </Button>
                          </div>
                          <Line className="bg-black-900_0c h-px mt-5 w-full" />
                          <Text
                            className="leading-[24.00px] mt-[19px] text-base text-blue_gray-400 w-[84%] sm:w-full"
                            size="txtDMSansRegular16Bluegray400"
                          >
                            We are providing the cerdiology services for our
                            patient that very much. We are providing the
                            cerdiology services for our patient that very much.{" "}
                          </Text>
                          <Img
                            className="h-48 md:h-auto mt-3.5 object-cover rounded-[12px] w-[91%]"
                            src="images/img_rectangle4345.png"
                            alt="rectangle4345"
                          />
                        </div>
                      </div>
                      <div className="bg-blue_gray-700 flex flex-1 flex-col items-center justify-end rounded-bl-[197px] rounded-br-[14px] rounded-tl-[14px] rounded-tr-[14px] w-full">
                        <div className="flex flex-col items-center justify-start mb-[15px] mt-[25px] w-[381px] md:w-full">
                          <div className="flex flex-row font-fredoka items-start justify-between w-[84%] md:w-full">
                            <Text
                              className="mt-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtFredokaMedium24WhiteA700"
                            >
                              Prostate
                            </Text>
                            <Button
                              className="flex h-[38px] items-center justify-center rounded-[50%] w-[38px]"
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
                          <Line className="bg-white-A700_0c h-px mt-5 w-full" />
                          <Text
                            className="leading-[24.00px] mt-[19px] text-base text-blue_gray-200 w-[84%] sm:w-full"
                            size="txtDMSansRegular16"
                          >
                            We are providing the cerdiology services for our
                            patient that very much. We are providing the
                            cerdiology services for our patient that very much.{" "}
                          </Text>
                          <Img
                            className="h-48 md:h-auto mt-3.5 object-cover rounded-bl-[182px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] w-[91%]"
                            src="images/img_rectangle4345_192x346.png"
                            alt="rectangle4345"
                          />
                        </div>
                      </div>
                      <div className="bg-blue_gray-700_14 flex flex-1 flex-col items-center justify-end rounded-[14px] w-full">
                        <div className="flex flex-col items-center justify-start mb-[15px] mt-[25px] w-[381px] md:w-full">
                          <div className="flex flex-row font-fredoka items-end justify-between w-[84%] md:w-full">
                            <Text
                              className="mt-[7px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                              size="txtFredokaMedium24"
                            >
                              Uro Oncology
                            </Text>
                            <Button
                              className="flex h-[38px] items-center justify-center rounded-[50%] w-[38px]"
                              color="blue_gray_700"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-[25px]"
                                src="images/img_upload.svg"
                                alt="arrowleft"
                              />
                            </Button>
                          </div>
                          <Line className="bg-black-900_0c h-px mt-5 w-full" />
                          <Text
                            className="leading-[24.00px] mt-[19px] text-base text-blue_gray-400 w-[84%] sm:w-full"
                            size="txtDMSansRegular16Bluegray400"
                          >
                            We are providing the cerdiology services for our
                            patient that very much. We are providing the
                            cerdiology services for our patient that very much.{" "}
                          </Text>
                          <Img
                            className="h-48 md:h-auto mt-3.5 object-cover rounded-[12px] w-[91%]"
                            src="images/img_rectangle4345_1.png"
                            alt="rectangle4345"
                          />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="absolute bg-white-A700 border-[9px] border-gray-50 border-solid bottom-[0] h-[133px] md:h-[79px] left-[34%] p-[7px] rounded-[66px] w-[133px]">
                  <Img
                    className="h-[79px] m-auto w-[79px]"
                    src="images/img_share.svg"
                    alt="vuesaxlineararr"
                  />
                  <div className="absolute h-[113px] md:h-[78px] inset-y-[0] my-auto right-[7%] w-4/5">
                    <div className="absolute bottom-[0] flex flex-row items-start justify-evenly right-[0] w-3/5">
                      <Text
                        className="mt-[46px] rotate-[170deg] text-[13px] text-black-900 uppercase"
                        size="txtJostRegular13"
                      >
                        i
                      </Text>
                      <Text
                        className="mt-[47px] rotate-[-175deg] text-[13px] text-black-900 uppercase"
                        size="txtJostRegular13"
                      >
                        D
                      </Text>
                      <div className="md:h-[22px] h-[62px] mb-[3px] relative w-[62%]">
                        <div className="absolute md:h-[19px] h-[55px] right-[0] top-[0] w-3/4">
                          <div className="absolute h-11 md:h-[19px] right-[0] top-[0] w-[66%]">
                            <div className="absolute h-8 md:h-[19px] right-[0] top-[0] w-[69%]">
                              <Text
                                className="absolute right-[0] rotate-[-88deg] text-[13px] text-black-900 top-[0] uppercase"
                                size="txtJostRegular13"
                              >
                                o
                              </Text>
                              <Text
                                className="absolute bottom-[0] left-[0] rotate-[-107deg] text-[13px] text-black-900 uppercase"
                                size="txtJostRegular13"
                              >
                                s
                              </Text>
                            </div>
                            <Text
                              className="absolute bottom-[0] left-[0] rotate-[-124deg] text-[13px] text-black-900 uppercase"
                              size="txtJostRegular13"
                            >
                              t
                            </Text>
                          </div>
                          <Text
                            className="absolute bottom-[0] left-[0] rotate-[-141deg] text-[13px] text-black-900 uppercase"
                            size="txtJostRegular13"
                          >
                            a
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] left-[0] rotate-[-158deg] text-[13px] text-black-900 uppercase"
                          size="txtJostRegular13"
                        >
                          t
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[3%] flex flex-row items-start justify-center left-[13%] w-6">
                      <Text
                        className="rotate-[138deg] text-[13px] text-black-900 uppercase"
                        size="txtJostRegular13"
                      >
                        c
                      </Text>
                      <Text
                        className="mt-1 rotate-[156deg] text-[13px] text-black-900 uppercase"
                        size="txtJostRegular13"
                      >
                        s
                      </Text>
                    </div>
                    <div className="absolute flex flex-row items-start justify-evenly left-[0] top-[6%] w-[32%]">
                      <div className="h-[59px] mt-[18px] relative w-[55%]">
                        <Text
                          className="mb-[-5.12px] ml-auto rotate-[64deg] text-[13px] text-black-900 uppercase z-[1]"
                          size="txtJostRegular13"
                        >
                          r
                        </Text>
                        <div className="h-[45px] mt-auto mx-auto w-full">
                          <Text
                            className="mb-[-4.56px] rotate-[81deg] text-[13px] text-black-900 uppercase z-[1]"
                            size="txtJostRegular13"
                          >
                            e
                          </Text>
                          <div className="md:h-[17px] h-[31px] mt-auto mx-auto w-full">
                            <Text
                              className="absolute bottom-[0] h-3.5 right-[0] rotate-[118deg] text-[13px] text-black-900 uppercase"
                              size="txtJostRegular13"
                            >
                              o
                            </Text>
                            <Text
                              className="absolute left-[0] rotate-[99deg] text-[13px] text-black-900 top-[0] uppercase"
                              size="txtJostRegular13"
                            >
                              v
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="rotate-[33deg] text-[13px] text-black-900 uppercase"
                        size="txtJostRegular13"
                      >
                        M
                      </Text>
                    </div>
                    <div className="absolute flex flex-row items-start justify-center right-[27%] top-[0] w-[39%]">
                      <Text
                        className="mb-0.5 rotate-[12deg] text-[13px] text-black-900 uppercase"
                        size="txtJostRegular13"
                      >
                        o
                      </Text>
                      <Text
                        className="mb-[3px] ml-1 rotate-[-7deg] text-[13px] text-black-900 uppercase"
                        size="txtJostRegular13"
                      >
                        r
                      </Text>
                      <Text
                        className="ml-[3px] mt-[3px] rotate-[-24deg] text-[13px] text-black-900 uppercase"
                        size="txtJostRegular13"
                      >
                        e
                      </Text>
                    </div>
                    <div className="absolute md:h-[15px] h-[29px] right-[2%] top-[16%] w-[18%]">
                      <Text
                        className="absolute left-[0] rotate-[-52deg] text-[13px] text-black-900 top-[0] uppercase"
                        size="txtJostRegular13"
                      >
                        P
                      </Text>
                      <Text
                        className="absolute bottom-[0] right-[0] rotate-[-69deg] text-[13px] text-black-900 uppercase"
                        size="txtJostRegular13"
                      >
                        r
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-dmsans md:gap-10 items-center justify-between mt-[3px] w-full">
                <div className="flex flex-row gap-3 items-start justify-start w-[14%]">
                  <Img
                    className="h-9"
                    src="images/img_arrowleft.svg"
                    alt="arrowdown"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-700_7f sm:text-xl"
                    size="txtDMSansMedium24"
                  >
                    Previous
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-between w-[10%]">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-700 sm:text-xl"
                    size="txtDMSansMedium24Bluegray700"
                  >
                    Next
                  </Text>
                  <Img
                    className="h-9"
                    src="images/img_arrowright_blue_gray_700.svg"
                    alt="arrowleft"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[11px] items-start justify-end md:ml-[0] ml-[97px] mt-24 md:px-5 w-[94%] md:w-full">
            <div className="flex flex-col items-center justify-start md:mt-0 mt-[22px] w-[91%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-[59px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[52px] items-center justify-start w-[48%] md:w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start">
                    <Text
                      className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                      size="txtDMSansMedium16"
                    >
                      Our Doctor
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 w-full"
                      size="txtCrimsonProRomanSemiBold40"
                    >
                      <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                        Meet Our Professional{" "}
                      </span>
                      <span className="text-blue_gray-700 font-fredoka text-left font-medium">
                        Expert Doctor
                      </span>
                    </Text>
                  </div>
                  <div className="md:h-[328px] h-[332px] relative w-full">
                    <div className="absolute bottom-[0] md:h-[250px] h-[254px] right-[0] w-[95%] sm:w-full">
                      <div className="absolute bg-blue_gray-700 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[17px] rounded-[16px] shadow-bs w-full">
                        <div className="bg-gradient1  h-[13px] mb-[203px] mr-[34px] rounded-md w-[13px]"></div>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[102px] right-[0] w-[103px]"
                        src="images/img_group1000003609.svg"
                        alt="group1000003609"
                      />
                    </div>
                    <div className="absolute h-[328px] inset-y-[0] left-[0] my-auto w-[43%]">
                      <Img
                        className="h-[328px] m-auto object-cover w-full"
                        src="images/img_portraitsmilin_328x248.png"
                        alt="portraitsmilin_One"
                      />
                      <div className="absolute bg-gradient1  h-[15px] right-[13%] rounded-[7px] top-[21%] w-[15px]"></div>
                    </div>
                    <div className="absolute bottom-[19%] flex flex-col items-center justify-start right-[13%] w-[38%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtFredokaSemiBold24"
                        >
                          Dr.Christopher Nicks
                        </Text>
                        <Text
                          className="mt-1.5 text-lg text-white-A700_99"
                          size="txtDMSansMedium18WhiteA70099"
                        >
                          MBBS,FCPS - Cardiologist
                        </Text>
                        <div className="flex flex-row font-dmsans gap-[18px] items-center justify-start mt-[23px] w-[82%] md:w-full">
                          <div className="border border-solid border-white-A700 flex flex-col items-center justify-end p-2.5 rounded-[10px] shadow-bs w-[83%]">
                            <div className="flex flex-row items-start justify-center w-[79%] md:w-full">
                              <a
                                href="javascript:"
                                className="text-base text-white-A700"
                              >
                                <Text size="txtDMSansRegular16WhiteA700">
                                  Learn More
                                </Text>
                              </a>
                              <Img
                                className="h-[18px] mt-[3px] w-[18px]"
                                src="images/img_arrowright.svg"
                                alt="arrowleft_One"
                              />
                            </div>
                          </div>
                          <div className="bg-gradient1  h-[13px] rounded-md w-[13px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-0.5 w-[48%] md:w-full">
                  <div className="md:h-[352px] h-[354px] relative w-full">
                    <div className="absolute bottom-[0] md:h-[250px] h-[252px] inset-x-[0] mx-auto w-[97%] sm:w-full">
                      <div className="absolute bg-blue_gray-700 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[13px] rounded-[16px] shadow-bs w-full">
                        <div className="bg-gradient1  h-[13px] mb-[211px] mr-[38px] rounded-md w-[13px]"></div>
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[102px] right-[0] w-[103px]"
                        src="images/img_group1000003609.svg"
                        alt="group1000003608"
                      />
                    </div>
                    <div className="absolute h-[352px] inset-y-[0] left-[0] my-auto w-[42%]">
                      <Img
                        className="h-[352px] m-auto object-cover rounded-[39px] w-full"
                        src="images/img_healthcarework.png"
                        alt="healthcarework"
                      />
                      <div className="absolute bg-gradient1  h-[15px] right-[13%] rounded-[7px] top-1/4 w-[15px]"></div>
                    </div>
                    <div className="absolute bottom-[19%] flex flex-col items-center justify-start right-[14%] w-[39%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtFredokaSemiBold24"
                          >
                            Dr.Christopher Nicks
                          </Text>
                          <Text
                            className="mt-1.5 text-lg text-white-A700_99"
                            size="txtDMSansMedium18WhiteA70099"
                          >
                            MBBS,FCPS - Cardiologist
                          </Text>
                          <div className="flex flex-row font-dmsans gap-[19px] items-center justify-start mt-[23px] w-[83%] md:w-full">
                            <div className="border border-solid border-white-A700 flex flex-col items-center justify-end p-2.5 rounded-[10px] shadow-bs w-[83%]">
                              <div className="flex flex-row items-start justify-center w-[79%] md:w-full">
                                <a
                                  href="javascript:"
                                  className="text-base text-white-A700"
                                >
                                  <Text size="txtDMSansRegular16WhiteA700">
                                    Learn More
                                  </Text>
                                </a>
                                <Img
                                  className="h-[18px] mt-[3px] w-[18px]"
                                  src="images/img_arrowright.svg"
                                  alt="arrowleft_Two"
                                />
                              </div>
                            </div>
                            <div className="bg-gradient1  h-[13px] rounded-md w-[13px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-[96%] md:w-full">
                    <Img
                      className="h-[38px] mt-[33px]"
                      src="images/img_checkmark.svg"
                      alt="settings"
                    />
                    <Img
                      className="h-[89px]"
                      src="images/img_frame.svg"
                      alt="frame"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[9%] md:w-full">
              <Img
                className="h-[131px] md:h-auto object-cover w-full"
                src="images/img_handholdsmedi.png"
                alt="handholdsmedi"
              />
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col font-dmsans items-start justify-start mt-[120px] p-[69px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mb-[5px] md:ml-[0] ml-[61px] w-[85%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[77%] md:w-full">
                <div className="bg-orange-300 h-3.5 mb-[78px] md:mt-0 mt-[7px] rounded-[50%] w-3.5"></div>
                <div className="flex flex-col gap-[13px] items-center justify-start md:ml-[0] ml-[260px] md:mt-0 mt-[19px]">
                  <Text
                    className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                    size="txtDMSansMedium16"
                  >
                    testimonial
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
                    size="txtCrimsonProRomanSemiBold40"
                  >
                    <span className="text-blue_gray-900 font-fredoka font-medium">
                      What Our{" "}
                    </span>
                    <span className="text-blue_gray-700 font-fredoka font-medium">
                      Patient Says
                    </span>
                  </Text>
                </div>
                <div className="bg-blue-A200 h-3.5 mb-[85px] ml-36 md:ml-[0] rounded-[50%] w-3.5"></div>
              </div>
              <div className="md:h-[334px] h-[393px] relative w-full">
                <div className="absolute bottom-[3%] h-[334px] right-[17%] w-[62%] md:w-full">
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[96%]">
                    <div className="flex flex-col gap-5 justify-start w-full">
                      <div className="flex flex-row items-start justify-between md:ml-[0] ml-[236px] w-3/5 md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Img
                            className="h-[115px] md:h-auto rounded-[50%] w-[115px]"
                            src="images/img_ellipse229.png"
                            alt="ellipse229"
                          />
                          <div className="flex flex-col justify-start mt-[29px] w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                              size="txtFredokaMedium24"
                            >
                              Raymond Galario
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[37px] mt-1 text-base text-blue_gray-400"
                              size="txtDMSansRegular16Bluegray400"
                            >
                              Sydney, Australia
                            </Text>
                          </div>
                          <Img
                            className="h-6 mt-5"
                            src="images/img_group1000003409.svg"
                            alt="group1000003409"
                          />
                        </div>
                        <div className="bg-purple-A200 h-3.5 mb-36 mt-[86px] rounded-[50%] w-3.5"></div>
                      </div>
                      <Text
                        className="leading-[130.00%] text-blue_gray-900 text-center text-lg w-full"
                        size="txtDMSansMedium18Bluegray900"
                      >
                        Now you can make an appointment with your doctor
                        anywhere and anytime via online booking easier. Now you
                        can make an appointment with your doctor anywhere and
                        anytime via online booking easier.
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[22%] h-[42px] left-[0] w-[42px]"
                    src="images/img_frame_gray_200.svg"
                    alt="frame_One"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-[42px] right-[15%] w-[42px]"
                  src="images/img_frame_gray_200_42x42.svg"
                  alt="frame_Two"
                />
                <Img
                  className="absolute h-20 left-[0] rounded-[50%] top-[17%] w-20"
                  src="images/img_ellipse229_80x80.png"
                  alt="ellipse229_One"
                />
                <Img
                  className="absolute h-[67px] right-[2%] rounded-[50%] top-[0] w-[67px]"
                  src="images/img_ellipse230.png"
                  alt="ellipse230"
                />
                <Img
                  className="absolute bottom-[24%] h-[52px] right-[0]"
                  src="images/img_group1000003623.svg"
                  alt="group1000003623"
                />
                <div className="absolute bg-amber-500 bottom-[1%] h-3.5 right-[3%] rounded-[50%] w-3.5"></div>
                <div className="absolute bg-red-A100 bottom-[3%] h-[11px] left-[13%] rounded-[5px] w-[11px]"></div>
                <div className="absolute bg-red-A400 h-[9px] left-[24%] rounded top-[24%] w-[9px]"></div>
              </div>
            </div>
          </div>
          <div className="font-fredoka md:h-[1233px] h-[560px] sm:h-[680px] max-w-[1184px] mt-[120px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[47px] ml-auto mt-[47px] w-12"
              src="images/img_frame_47x48.svg"
              alt="frame_Three"
            />
            <div className="absolute flex md:flex-col flex-row md:gap-14 h-full inset-[0] items-center justify-between m-auto w-full">
              <div className="md:h-[538px] h-[560px] relative w-[53%] md:w-full">
                <Img
                  className="absolute h-[538px] inset-y-[0] my-auto object-cover right-[4%] rounded-[30px] w-[84%]"
                  src="images/img_aboutoneimg1jpg_538x522.png"
                  alt="aboutoneimg1jpg_One"
                />
                <div className="absolute bg-white-A700 flex flex-col items-end justify-start left-[0] p-2 rounded-[10px] shadow-bs4 top-[7%] w-[21%]">
                  <div className="flex flex-col gap-1.5 items-start justify-start mb-2 mt-[3px] w-[93%] md:w-full">
                    <Img
                      className="h-[29px] md:h-auto object-cover w-1/5 sm:w-full"
                      src="images/img_.png"
                      alt="One"
                    />
                    <Text
                      className="text-blue_gray-900 text-xl"
                      size="txtFredokaSemiBold20"
                    >
                      25+
                    </Text>
                    <Text
                      className="text-base text-blue_gray-400 w-full"
                      size="txtFredokaRegular16"
                    >
                      Partner Collaboration
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute border-2 border-blue_gray-700 border-solid bottom-[0] h-14 right-[0] rounded-[1px] w-[57px]"
                  src="images/img_star10.svg"
                  alt="starTen"
                />
              </div>
              <div className="md:h-[519px] h-[525px] relative w-[43%] md:w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-full">
                  <a
                    href="javascript:"
                    className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                  >
                    <Text size="txtDMSansMedium16">Contact US</Text>
                  </a>
                  <Text
                    className="leading-[50.00px] mt-[7px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 w-full"
                    size="txtCormorantGaramondBold40"
                  >
                    <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                      True{" "}
                    </span>
                    <span className="text-blue_gray-700 font-fredoka text-left font-medium">
                      Healthcare{" "}
                    </span>
                    <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                      For Your Family!
                    </span>
                  </Text>
                  <Text
                    className="leading-[130.00%] mt-3.5 text-base text-blue_gray-400 w-full"
                    size="txtDMSansRegular16Bluegray400"
                  >
                    Dhameliya Kidney Hospital has born out of the need for a
                    good center which catered to patients with complicated
                    kidney diseases in Surat. It is a judicious blend of high
                    end technology, world class expertise and outstanding
                    personalized care.
                  </Text>
                  <div className="flex flex-col font-fredoka items-center justify-start mt-5 w-[73%] md:w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-900 text-xl"
                        size="txtFredokaMedium20Bluegray900"
                      >
                        Our support services inclide:
                      </Text>
                      <List
                        className="sm:flex-col flex-row font-dmsans gap-[49px] grid grid-cols-2 justify-center w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                          <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                            <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtDMSansMedium16Bluegray400"
                            >
                              ESWL - Lithotripsy
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start w-[92%] md:w-full">
                            <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtDMSansMedium16Bluegray400"
                            >
                              Cystolitholapaxy
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start w-[41%] md:w-full">
                            <div className="bg-blue_gray-400 h-[5px] mb-1.5 mt-[9px] rounded-sm w-[5px]"></div>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtDMSansMedium16Bluegray400"
                            >
                              HOLEP
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                          <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                            <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtDMSansMedium16Bluegray400"
                            >
                              Endoscopic Surgery
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start w-[71%] md:w-full">
                            <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtDMSansMedium16Bluegray400"
                            >
                              Open Surgery
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start w-[27%] md:w-full">
                            <div className="bg-blue_gray-400 h-[5px] mb-1.5 mt-[9px] rounded-sm w-[5px]"></div>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtDMSansMedium16Bluegray400"
                            >
                              RIRS
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <Text
                    className="mt-[18px] text-base text-blue_gray-400 w-full"
                    size="txtDMSansRegular16Bluegray400"
                  >
                    Contact us today to learn more about our support services
                    and to find out how we can help you.
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[189px] mt-8 rounded-[19px]"
                    rightIcon={
                      <Img
                        className="h-6 mt-px ml-[5px]"
                        src="images/img_arrowright.svg"
                        alt="arrow_left"
                      />
                    }
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-dmsans font-medium leading-[normal] text-left text-lg">
                      Contact Us
                    </div>
                  </Button>
                </div>
                <Img
                  className="absolute bottom-[0] h-[54px] right-[26%] w-[54px]"
                  src="images/img_minimize.svg"
                  alt="Two"
                />
              </div>
            </div>
          </div>
          <div className="font-jost h-32 sm:h-[245px] md:h-[942px] max-w-[1185px] mt-[120px] mx-auto md:px-5 relative w-full">
            <div className="bg-blue_gray-700 flex flex-col h-full items-center justify-end m-auto p-[18px] rounded-[16px] shadow-bs w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtJostRomanMedium20"
                >
                  Home Care
                </Text>
                <RatingBar
                  className="flex justify-between ml-6 md:ml-[0] md:mt-0 mt-0.5 w-[853px]"
                  value={5}
                  starCount={5}
                  activeColor="#ffffff"
                  size={26}
                ></RatingBar>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtJostRomanMedium20"
                >
                  Adult Day Care
                </Text>
                <Text
                  className="md:ml-[0] ml-[74px] text-white-A700 text-xl"
                  size="txtJostRomanMedium20"
                >
                  Assisted Living
                </Text>
                <Text
                  className="md:ml-[0] ml-[74px] text-white-A700 text-xl"
                  size="txtJostRomanMedium20"
                >
                  Nursing Home
                </Text>
                <Text
                  className="md:ml-[0] ml-[74px] text-white-A700 text-xl"
                  size="txtJostRomanMedium20"
                >
                  Adult Day Care
                </Text>
                <Text
                  className="md:ml-[0] ml-[75px] text-white-A700 text-xl"
                  size="txtJostRomanMedium20"
                >
                  Home Care
                </Text>
              </div>
            </div>
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 rotate-[3deg] rounded-[17px] shadow-bs w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                <Text
                  className="md:mt-0 mt-[50px] text-blue_gray-900 text-xl"
                  size="txtJostRomanMedium20Bluegray900"
                >
                  Home Care
                </Text>
                <Img
                  className="h-[27px] mb-1 md:ml-[0] ml-[22px] md:mt-0 mt-[47px] w-[27px]"
                  src="images/img_star1_27x27.svg"
                  alt="starOne_One"
                />
                <Text
                  className="mb-2 md:ml-[0] ml-[22px] md:mt-0 mt-[42px] text-blue_gray-900 text-xl"
                  size="txtJostRomanMedium20Bluegray900"
                >
                  Adult Day Care
                </Text>
                <Img
                  className="h-[27px] mb-3.5 md:ml-[0] ml-[22px] md:mt-0 mt-[37px] w-[27px]"
                  src="images/img_star11.svg"
                  alt="starEleven"
                />
                <Text
                  className="mb-[18px] md:ml-[0] ml-[22px] md:mt-0 mt-[31px] text-blue_gray-900 text-xl"
                  size="txtJostRomanMedium20Bluegray900"
                >
                  Assisted Living
                </Text>
                <Img
                  className="h-[27px] md:ml-[0] ml-[22px] md:mt-0 my-[26px] w-[27px]"
                  src="images/img_star12.svg"
                  alt="starTwelve"
                />
                <Text
                  className="mb-7 md:ml-[0] ml-[22px] md:mt-0 mt-[22px] text-blue_gray-900 text-xl"
                  size="txtJostRomanMedium20Bluegray900"
                >
                  Nursing Home
                </Text>
                <Img
                  className="h-[27px] mb-[35px] md:ml-[0] ml-[22px] md:mt-0 mt-4 w-[27px]"
                  src="images/img_star13.svg"
                  alt="starThirteen"
                />
                <Text
                  className="mb-[39px] md:ml-[0] ml-[22px] md:mt-0 mt-[11px] text-blue_gray-900 text-xl"
                  size="txtJostRomanMedium20Bluegray900"
                >
                  Adult Day Care
                </Text>
                <Img
                  className="h-[27px] mb-[45px] md:ml-[0] ml-[22px] md:mt-0 mt-1.5 w-[27px]"
                  src="images/img_star14.svg"
                  alt="starFourteen"
                />
                <Text
                  className="mb-[50px] md:ml-[0] ml-[23px] text-blue_gray-900 text-xl"
                  size="txtJostRomanMedium20Bluegray900"
                >
                  Home Care
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 font-dmsans h-[733px] mt-[118px] p-[58px] md:px-5 relative w-full">
            <Img
              className="h-[54px] mb-[-22px] ml-[481px] w-[54px] z-[1]"
              src="images/img_search.svg"
              alt="settings_One"
            />
            <div className="flex md:flex-col flex-row gap-[29px] items-center justify-start m-auto w-[83%]">
              <div className="md:h-[446px] h-[461px] sm:h-[518px] relative w-[47%] md:w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                      size="txtDMSansMedium16"
                    >
                      help
                    </Text>
                    <Text
                      className="leading-[50.00px] mt-[7px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 w-full"
                      size="txtFredokaMedium40"
                    >
                      <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                        A{" "}
                      </span>
                      <span className="text-blue_gray-700 font-fredoka text-left font-medium">
                        Dialysis Patient’s
                      </span>
                      <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                        {" "}
                        Life Is Hard. Laugh Harder.
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
                      Today the hospital is recognised as a world-renowned
                      institution, not only providing outstanding care and
                      treatment, our goal is to deliver quality care in a
                      respectful & compassionate manner. We strive to be the
                      first and best choice for healthcare.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start mt-4 w-[47%] md:w-full">
                    <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      A family history of stone disease
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start mt-3 w-3/4 md:w-full">
                    <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      Stones caused by an infection in your urinary system
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start mt-3 w-[87%] md:w-full">
                    <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      A genetic condition which makes you prone to forming
                      stones
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start mt-[11px] w-[70%] md:w-full">
                    <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      A cyst or a condition called calyceal diverticulum
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start mt-3 w-[70%] md:w-full">
                    <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      Swelling in one of your ureters, called ureterocele
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-14 right-[4%]"
                  src="images/img_cursor.svg"
                  alt="vector"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-end p-[22px] sm:px-5 rounded-[30px] shadow-bs4 w-[52%] md:w-full">
                <Text
                  className="mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtFredokaMedium32"
                >
                  How Can We Help?
                </Text>
                <Text
                  className="mt-[9px] text-base text-blue_gray-400 w-full"
                  size="txtDMSansRegular16Bluegray400"
                >
                  Please feel welcome to contact our friendly reception staff
                  with any general or medical enquiry. Our doctors will receive
                  or return any urgent calls.
                </Text>
                <div className="flex flex-col font-dmsans items-center justify-start mt-[22px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
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
                        placeholder="Subject"
                        className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-sm w-full"
                        wrapClassName="sm:flex-1 sm:w-full"
                        shape="round"
                        color="blue_gray_900_0a"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="bg-blue_gray-900_0a flex flex-col items-start justify-start mt-5 p-[18px] rounded-[10px] w-full">
                      <Text
                        className="mb-[77px] md:ml-[0] ml-[5px] text-blue_gray-900 text-sm"
                        size="txtDMSansRegular14"
                      >
                        Message
                      </Text>
                    </div>
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
                      <div className="font-medium leading-[normal] text-left text-lg">
                        Submit Request
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-dmsans sm:h-[1079px] md:h-[1932px] h-[907px] mt-[118px] md:px-5 relative w-full">
            <div className="md:h-[676px] sm:h-[831px] h-[907px] m-auto w-full">
              <div className="absolute bg-gray-100 bottom-[0] h-[676px] inset-x-[0] mx-auto w-full"></div>
              <div className="absolute flex flex-col items-center justify-start left-[11%] top-[0] w-[47%]">
                <div className="flex flex-col md:gap-10 gap-[701px] justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                    <Img
                      className="h-[67px] mb-0.5 mt-[9px]"
                      src="images/img_minimize_blue_gray_700.svg"
                      alt="microphone"
                    />
                    <div className="flex flex-col gap-2 items-center justify-start">
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
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[155px] md:ml-[0] ml-[480px] text-center text-lg"
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
            <div className="absolute flex flex-col gap-8 inset-x-[0] items-center justify-start mx-auto top-[16%] w-[83%]">
              <List
                className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start sm:ml-[0] hover:mx-0 p-4 rounded-[30px] hover:shadow-bs5 shadow-bs5 hover:w-full w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[323px] md:h-auto object-cover rounded-[24px]"
                      src="images/img_rectangle4345_323x325.png"
                      alt="rectangle4345"
                    />
                    <div className="flex flex-col gap-[18px] items-start justify-start md:mt-0 mt-6">
                      <div className="flex flex-col gap-2 items-center justify-start w-full">
                        <Text
                          className="leading-[32.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                          size="txtFredokaMedium24"
                        >
                          What To Do When You Break A Bone?
                        </Text>
                        <Text
                          className="leading-[24.00px] text-base text-gray-600"
                          size="txtDMSansRegular16Gray600"
                        >
                          <span className="text-gray-600 font-dmsans text-left font-normal">
                            <>
                              Breaking a bone is a serious and scary situation
                              that can happen to anyone in a number of different
                              ways. The most common way a bone.
                              <br /> Bone breaks are categorized into different
                              types of fractures...{" "}
                            </>
                          </span>
                          <span className="text-indigo-300 font-dmsans text-left font-medium">
                            Read More
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[61%] md:w-full">
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
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-end sm:ml-[0] hover:mx-0 p-[19px] rounded-[30px] hover:shadow-bs5 shadow-bs5 hover:w-full w-full">
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
              </List>
              <List
                className="sm:flex-col flex-row font-fredoka gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[30px] shadow-bs5 w-full">
                  <div className="flex flex-row gap-[21px] items-center justify-between w-[98%] md:w-full">
                    <Img
                      className="h-[138px] md:h-auto object-cover rounded-[30px]"
                      src="images/img_rectangle4383.png"
                      alt="rectangle4383"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-start">
                      <Text
                        className="leading-[32.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtFredokaMedium24"
                      >
                        <>
                          What To Do
                          <br />
                          When You
                          <br />
                          Break...
                        </>
                      </Text>
                      <div className="flex flex-row font-dmsans gap-1.5 items-start justify-start w-[74%] md:w-full">
                        <Text
                          className="text-base text-indigo-300"
                          size="txtDMSansMedium16"
                        >
                          Read More
                        </Text>
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
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[30px] shadow-bs5 w-full">
                  <div className="flex flex-row gap-[21px] items-center justify-between w-[98%] md:w-full">
                    <Img
                      className="h-[138px] md:h-auto object-cover rounded-[30px]"
                      src="images/img_rectangle4383_138x160.png"
                      alt="rectangle4383"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-start">
                      <Text
                        className="leading-[32.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                        size="txtFredokaMedium24"
                      >
                        When To See A Doctor For...
                      </Text>
                      <div className="flex flex-row font-dmsans gap-1.5 items-start justify-start w-[74%] md:w-full">
                        <Text
                          className="text-base text-indigo-300"
                          size="txtDMSansMedium16"
                        >
                          Read More
                        </Text>
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
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[30px] shadow-bs5 w-full">
                  <div className="flex flex-row gap-[21px] items-center justify-between w-[98%] md:w-full">
                    <Img
                      className="h-[138px] md:h-auto object-cover rounded-[30px]"
                      src="images/img_rectangle4383_1.png"
                      alt="rectangle4383"
                    />
                    <div className="flex flex-col gap-3.5 items-start justify-start">
                      <Text
                        className="leading-[32.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                        size="txtFredokaMedium24"
                      >
                        When To See A Doctor For...
                      </Text>
                      <div className="flex flex-row font-dmsans gap-1.5 items-start justify-start w-[74%] md:w-full">
                        <Text
                          className="text-base text-indigo-300"
                          size="txtDMSansMedium16"
                        >
                          Read More
                        </Text>
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
              </List>
            </div>
          </div>
          <Footer1 className="flex font-fredoka items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
