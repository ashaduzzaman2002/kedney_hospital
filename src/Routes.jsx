import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "pages/home/Home";
import ContactUs from "pages/contact-us/ContactUs";
import Services from "pages/services/Services";
import News from "pages/news/News";
import Career from "pages/career/Career";
import About from "pages/about/About";
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/medical-services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
