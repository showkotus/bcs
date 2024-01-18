import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      {children}

      <Footer />
    </div>
  );
};

export default layout;
