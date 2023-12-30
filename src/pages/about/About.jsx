import AboutAbout from "components/About/AboutAbout";
import AboutHospital from "components/About/AboutHospital";
import Cashless from "components/cashless/Cashless";
import Officer from "components/officer/Officer";
import HeroSecondary from "components/secondary-hero/HeroSecondary";
import Layout from "layout/Layout";
import React from "react";

const About = () => {
  return (
    <Layout>
      <HeroSecondary title="About Us" />
      <AboutHospital/>
      <AboutAbout/>
      <Cashless />
      <Officer />
    </Layout>
  );
};

export default About;
