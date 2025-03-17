// "use client";

// import React, { useEffect } from "react";
// import Hero from "./Hero/Hero";
// import About from "./About/About";
// import Project from "./Project/Project";
// import Skills from "./Skills/Skills";
// import Contact from "./Contact/Contact";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Home = () => {
//   useEffect(() => {
//     const initAOS = async () => {
//       await import("aos");
//       AOS.init({
//         duration: 1000,
//         easing: "ease",
//         once: true,
//         anchorPlacement: "top-bottom",
//       });
//     };
//     initAOS();
//   }, []);
//   return (
//     <div id="home" className="overflow-hidden">
//       <Hero />
//       <About />
//       <Project />
//       <Skills />
//       <Contact />
//     </div>
//   );
// };

// export default Home;

"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Hero/Hero";
import { sanityClient, urlFor } from "@/lib/sanity";

type HomeData = {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: any;
};

const Home = () => {
  const [homeData, setHomeData] = useState<HomeData | null>(null);

  useEffect(() => {
    // Fetch home page data from Sanity
    const fetchHomeData = async () => {
      //   const query = `*[_type == "home"][0]`;
      //   const data = await sanityClient.fetch(query);
      //   setHomeData(data);
      // };
      try {
        const query = `*[_type == "home"][0]`;
        const data = await sanityClient.fetch(query);
        setHomeData(data);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };
    fetchHomeData();

    //   // Initialize AOS animations
    //   const initAOS = async () => {
    //     await import("aos");
    //     AOS.init({
    //       duration: 1000,
    //       easing: "ease",
    //       once: true,
    //       anchorPlacement: "top-bottom",
    //     });
    //   };
    //   initAOS();
    // }, []);

    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <Head>
        <title>{homeData?.heroTitle || "My Portfolio"}</title>
        <meta
          name="description"
          content={homeData?.heroSubtitle || "Welcome to my portfolio"}
        />
      </Head>
      <div id="home" className="overflow-hidden">
        <Hero
          title={homeData?.heroTitle}
          subtitle={homeData?.heroSubtitle}
          image={
            homeData?.heroImage ? urlFor(homeData.heroImage).url() || "" : ""
          }
        />
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Home;
