import Heading from "components/heading/Heading";
import HeroSecondary from "components/secondary-hero/HeroSecondary";
import Layout from "layout/Layout";
import React from "react";

const ContactUs = () => {
  return (
    <Layout>
      <HeroSecondary title="Contact Us" />

      <Heading
        subHeading="get in touch"
        headingFirst="Dhameliya "
        headingSecond="Kidney Hospital"
      />

      <div className="max-w-[90%] mx-auto lg:mt-12 mt-6">
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1 h-24 bg-red-400"></div>
          <div className="col-span-1">
            <div className="w-[80%] aspect-square bg-[#fff] rounded-[34px] p-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59511.73845792438!2d72.78176552701555!3d21.212661403418636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef733bcc4f5%3A0xda43826eaa3f622f!2sDhameliya%20Kidney%20Hospital%20and%20Lithotripsy%20Center!5e0!3m2!1sen!2sin!4v1703446205700!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 34 }}
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
