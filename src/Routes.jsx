import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Home from "pages/home/Home";
import Footer from "components/Footer";
import NewsLetter from "components/NewsLetter/NewsLetter";
import NewsPage from "pages/News";
import Help from "components/Help/Help";
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const News = React.lazy(() => import("pages/News"));
const Career = React.lazy(() => import("pages/Career"));
const MedicalServicesdetail = React.lazy(
  () => import("pages/MedicalServicesdetail"),
);
const MedicalServices = React.lazy(() => import("pages/MedicalServices"));
const About = React.lazy(() => import("pages/About"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dev" element={<Help />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/medicalservices" element={<MedicalServices />} />
          <Route
            path="/medicalservicesdetail"
            element={<MedicalServicesdetail />}
          />
          <Route path="/career" element={<Career />} />
          <Route path="/news" element={<News />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
