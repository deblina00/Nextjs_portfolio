// import Home from "@/components/Home/Home";

// import React from "react";

// const HomePage = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// };

// export default HomePage;

// import { Metadata } from "next";
import Home from "@/components/Home/Home";

// export const metadata = {
//   title: "Home - My Portfolio",
//   description:
//     "Welcome to my portfolio. I specialize in Next.js, React, and more!",
//   keywords: ["Next.js", "Portfolio", "Web Development"],
//   openGraph: {
//     title: "Your Portfolio",
//     description: "Showcasing my skills and projects in web development.",
//     url: "https://deblinaroy.vercel.app/",
//     siteName: "Your Portfolio",
//     type: "website",
//     images: [
//       {
//         url: "images/LOGOO.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
// };
export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
