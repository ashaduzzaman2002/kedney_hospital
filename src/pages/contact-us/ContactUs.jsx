import { Location, Mail } from "assets/svg/Icon";
import Heading from "components/heading/Heading";
import HeroSecondary from "components/secondary-hero/HeroSecondary";
import Layout from "layout/Layout";
import React from "react";
import "./conatctus.css";

const ContactUs = () => {
  return (
    <Layout>
      <HeroSecondary title="Contact Us" />

      <div className="hidden lg:block">
        <Heading
          subHeading="get in touch"
          headingFirst="Dhameliya "
          headingSecond="Kidney Hospital"
        />
      </div>

      <div className="max-w-[90%] mx-auto lg:mt-12 mt-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <Details
            location="Station Road"
            phone="+91 9913225927"
            address="402, Aayush Doctor House, Lal Darwaja, Station Road, SURAT 395 002 - GUJ INDIA"
            email="arvind.dhameliya@ahoo.in"
          />
          <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59511.73845792438!2d72.78176552701555!3d21.212661403418636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef733bcc4f5%3A0xda43826eaa3f622f!2sDhameliya%20Kidney%20Hospital%20and%20Lithotripsy%20Center!5e0!3m2!1sen!2sin!4v1703446205700!5m2!1sen!2sin" />
        </div>

        <div className=" h-[100px] lg:h-[200px] flex items-center justify-center">
          <img
            className="lg:w-[366px] lg:h-[250px] w-[250px] h-[150px] object-contain mx-auto"
            src="/assets/images/curvepattern.png"
            alt=""
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.140398170809!2d72.78943437959025!3d21.186580930229567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dd04f5fedd5%3A0xb18fa318ccd67708!2sDhameliya%20Kidney%20Hospital%20%26%20Lithotripsy%20Centre!5e0!3m2!1sen!2sin!4v1703658170148!5m2!1sen!2sin" />
          <Details
            location="Adajan"
            phone="+91 9913225927"
            address="404-5-6, Ridhi Shoppers, Opp. Star Bazaar, Adajan, SURAT - 395 007 - GUJ INDIA"
            email="arvind.dhameliya@ahoo.in"
          />
        </div>

        <div className=" h-[100px] lg:h-[200px] flex items-center justify-center">
          <img
            className="lg:w-[366px] lg:h-[250px] w-[250px] h-[150px] object-contain mx-auto"
            src="/assets/images/curvepattern.png"
            alt=""
          />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <Details
            location="Ring Road"
            phone="+91 9913225927"
            address="Next to Parag House, Udhna Darwaja, Ring Road, SURAT 395 002 - GUJ INDIA"
            email="arvind.dhameliya@ahoo.in"
          />
          <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2079603493967!2d72.82851697508538!3d21.18389618050444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e43ca694b73%3A0xf78af7e14d93315!2sDhameliya%20Kidney%20Hospital%20And%20Lithotripsy%20Centre!5e0!3m2!1sen!2sin!4v1703658429102!5m2!1sen!2sin" />
        </div>

        <div className=" h-[100px] lg:h-[200px] flex items-center justify-center">
          <img
            className="lg:w-[366px] lg:h-[250px] w-[250px] h-[150px] object-contain mx-auto"
            src="/assets/images/curvepattern.png"
            alt=""
          />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7581582566313!2d72.84905047508701!3d21.24143658046172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3e51fd103f%3A0xbb2b7cc38ba859ba!2sDhameliya%20Kidney%20Hospital%20%7C%20Kidney%20Stone%20Treatment%20%7C%20Prostate%20Surgeon%20%7C%20Female%20Urology!5e0!3m2!1sen!2sin!4v1703658568569!5m2!1sen!2sin" />
          <Details
            location="Amroli"
            phone="+91 9913225927"
            address="206-207, Cross Road Shopping Centre, Sayan Rd, Amroli, Surat, Gujarat 394107"
            email="arvind.dhameliya@ahoo.in"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

const Map = ({ url }) => (
  <div className="col-span-1 relative h-[330px] lg:h-auto">
    <div className="lg:w-[201px] lg:h-[371px] w-[118.253px] h-[218.269px] bg-[#6285ca] opacity-50 rounded-[24px] ml-auto"></div>

    <div
      className="w-[95%] lg:w-[85%] aspect-square bg-[#fff] rounded-[34px] p-1 absolute bottom-0"
      style={{ boxShadow: "20px 34px 65px 0px rgba(0, 0, 0, 0.08)" }}
    >
      <iframe
        src={url}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: 34 }}
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

const Details = ({ location, phone, address, email }) => (
  <div className="col-span-1">
    <h2 className="text-[#385182] font-fredoka text-[24px] font-medium ">
      Dhameliya Kidney Hospital
    </h2>
    <h2 className="text-[#6285CA] font-fredoka text-[32px] font-medium ">
      - {location}
    </h2>

    <div className="lg:pt-16 pt-11 lg:px-[34px]">
      <h3 className="text-[#000] font-fredoka lg:text-[32px]  text-[24px] font-medium">
        Quick Contacts
      </h3>
      <p className="text-[#767676] font-dmsans lg:text-[18px] text-[14px] font-medium max-w-[413px]">
        Please feel free to contact our friendly staff with any medical enquiry.
      </p>

      <div className="lg:pt-[42px] pt-[32px] flex flex-col gap-[35px]">
        <div className="flex gap-5">
          <div className="bg-[#E8EDF7] w-12 h-12 flex items-center justify-center rounded-full">
            <img src="/assets/images/call.svg" alt="" />
          </div>

          <div>
            <h4 className="text-[#032342] font-fredoka text-[20px] font-medium ">
              Contact
            </h4>
            <p className="text-[#767676] font-dmsans text-[16px] font-medium mb-[10px]">
              {phone}
            </p>
            <button className="bg-[#032342] px-[26px] py-2 rounded-[32px] text-[#fff] font-dmsans text-[16px] font-medium">
              Call
            </button>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="bg-[#E8EDF7] w-12 h-12 aspect-square flex items-center justify-center rounded-full">
            <Location />
          </div>

          <div>
            <h4 className="text-[#032342] font-fredoka text-[20px] font-medium ">
              Address
            </h4>
            <p className="text-[#767676] font-dmsans text-[16px] font-medium mb-[10px] max-w-[338px]">
              {address}
            </p>
            <button className="border-[1px] border-[#CCD2DD] px-[26px] py-2 rounded-[32px] text-[#032342] font-dmsans text-[16px] font-medium">
              Location
            </button>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="bg-[#E8EDF7] w-12 h-12 aspect-square flex items-center justify-center rounded-full">
            <Mail />
          </div>

          <div>
            <h4 className="text-[#032342] font-fredoka text-[20px] font-medium ">
              E-Mail
            </h4>
            <p className="text-[#767676] font-dmsans text-[16px] font-medium mb-[10px]">
              {email}
            </p>
            <button className="border-[1px] border-[#CCD2DD] px-[26px] py-2 rounded-[32px] text-[#032342] font-dmsans text-[16px] font-medium">
              Send mail
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
