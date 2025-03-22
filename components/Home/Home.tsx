"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div id="home" className="overflow-hidden">
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;