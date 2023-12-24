import React from "react";

import {
  Button,
} from "components";
import Layout from "layout/Layout";
import { CurveArrow } from "assets/svg/Icon";
import Testimonials from "components/Testimonials/Testimonials";
import NewsPage from "components/News";

const Home = () => {
  return (
    <Layout isHome={true}>
      <div className="bg-[#F5F6F9] lg:max-h-screen max-h-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-[90%] mx-auto pt-20">
          <div className="pt-12">
            <h1 className="text-[#032342] text-6xl font-medium font-fredoka">
              Find the good life by {' '}
              <span className=" font-fredoka text-[#6285CA]">
                good
              </span> health{" "}
              {/* <img src="/assets/images/medicine.png" alt="medicine" /> */}
            </h1>
            <p>
              Dhameliya Kidney Hospital has born out of the need for a good
              centre which catered to patients with complicated kidney diseases
              in Surat.
            </p>
            <div>
              <Button>Get Appointment</Button>
              <button>Learn More</button>

              <CurveArrow />
            </div>

            <div>
              <img src="/assets/images/homeImage1.png" alt="homeImage1" />
              <img src="/assets/images/blurHospital.png" alt="blurHospital" />
            </div>
          </div>

          <div className=" py-14 h-[60vh] lg:h-auto">
            <div class="grid grid-cols-2 gap-2 lg:gap-4 h-full">
              <div class="col-span-1 h-full">
                <div class="grid grid-rows-10 gap-2 lg:gap-4 h-full">
                  <div class="row-span-2 gap-2 lg:gap-4 grid grid-cols-2">
                    <div className="h-full bg-[#6285CA] rounded-[20px] flex align-middle justify-center">
                      <div
                        className="h-[80%] w-full"
                        style={{
                          backgroundImage: `url(../../../public/assets/images/medikit.png)`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                    <div className=" h-full bg-[#38518233] rounded-[20px] overflow-hidden flex align-middle justify-center">
                      <div
                        className="h-[80%] w-full"
                        style={{
                          backgroundImage: `url(../../../public/assets/images/kedney.png)`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div class="row-span-4 bg-[#6285CA] rounded-[20px] flex">
                    <div
                      style={{
                        backgroundImage: `url(../../../public/assets/images/phandsome-doctor.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}
                      className="w-full h-[90%] mt-auto"
                    ></div>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(../../../public/assets/svg/curve.svg)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "bottom",
                    }}
                    class="row-span-3 bg-[#385182] p-0 rounded-[20px] h-full relative"
                  >
                    <div className="flex flex-col justify-between h-full absolute w-full p-5">
                      <div className="flex align-middle gap-4">
                        <img src="/assets/images/profile.png" alt="" />
                        <div>
                          <h2 className="text-white-A700 font-medium font-fredoka text-lg">
                            Dr. Alex Smith
                          </h2>
                          <p className="text-[#AFB9CD]">Infermrdica Hospital</p>
                        </div>
                      </div>
                      <button className=" border border-white-A700 w-full h-10 text-white-A700 rounded-[10px]">
                        Make Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-1 h-full">
                <div class="grid grid-rows-5 gap-2 lg:gap-4 h-full">
                  <div class="row-span-3 bg-[#385182] rounded-[20px] relative">
                    <div
                      style={{
                        backgroundImage: `url(../../../public/assets/images/doctor-hospital-with-stethoscope.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}
                      className="w-full h-[110%] mt-auto absolute bottom-0"
                    ></div>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(../../../public/assets/images/operation.png)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    class="row-span-2 bg-purple-200 rounded-[20px] "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

   
      <NewsPage />
      
    </Layout>
  );
};

export default Home;
