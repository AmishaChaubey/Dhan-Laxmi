import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./pages/home/HomeHero";
import Welcome from "./pages/home/HomeWelcome";
import Impact from "./pages/home/Impact";
import CTA from "./pages/home/HomeCta";
import HomeServices from "./pages/home/HomeServices";
import WhyChoose from "./pages/Home/WhyChoose";
import Gallery from "./pages/home/HomeGallery";
import Testimonials from "./pages/home/HomeTestimonial";

import AboutPage from "./pages/about/About";
import GalleryPage from "./pages/gallery/Gallery";
import ContactPage from "./pages/contact/Contact";

import ServicePage from "./pages/services/ServicePage";

import Saket from "./pages/network/saket/page";
import GreaterKailash from "./pages/network/greater-kailash/page";
import GreenPark from "./pages/network/green-park/page";
import HauzKhas from "./pages/network/hauz-khas/page";
import Malviya from "./pages/network/malviya/page";
import SouthDelhi from "./pages/network/south-delhi/page";
import CallIcon from "./components/Call";

const App = () => {
  return (
    <>
     
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Welcome />
              <Impact />
              <HomeServices />
              <Gallery />
              <WhyChoose />
              <CTA />
              <Testimonials />
            </>
          }
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />


        <Route path="/services/:slug" element={<ServicePage />} />

        {/* Network Routes */}
        <Route path="/network/ambulance-service-in-saket" element={<Saket />} />
        <Route path="/network/ambulance-service-in-greater-kailash" element={<GreaterKailash />} />
        <Route path="/network/ambulance-service-in-green-park" element={<GreenPark />} />
        <Route path="/network/ambulance-service-in-hauz-khas" element={<HauzKhas />} />
        <Route path="/network/ambulance-service-in-malviya-nagar" element={<Malviya />} />
        <Route path="/network/ambulance-service-in-south-delhi" element={<SouthDelhi />} />
      </Routes>


<CallIcon/>
      <Footer />
    </>
  );
};

export default App;
