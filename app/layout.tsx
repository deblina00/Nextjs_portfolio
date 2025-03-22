// import type { Metadata } from "next";
// import { Sora } from "next/font/google";
// import "./globals.css";
// import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
// import Footer from "@/components/Home/Footer/Footer";
// import ScrollTop from "@/components/Helper/ScrollTop";
// import AnimatedCursor from "@/components/AnimatedCursor";

// const font = Sora({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: {
//     default: "My Portfolio",
//     template: "%s - My Portfolio",
//   },
//   description:
//     "Showcasing my expertise, projects, and passion for web development through an interactive and modern design.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="custom-scrollbar">
//       <body className={`{font.className} cursor-none`}>
//         <AnimatedCursor />
//         <ResponsiveNav />
//         {children}
//         <Footer />
//         <ScrollTop />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollTop from "@/components/Helper/ScrollTop";
import AnimatedCursor from "@/components/AnimatedCursor";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My Portfolio",
    template: "%s - My Portfolio",
  },
  description:
    "Showcasing my expertise, projects, and passion for web development through an interactive and modern design.",
  keywords: [
    "web development",
    "React developer",
    "frontend developer",
    "portfolio",
    "JavaScript",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    url: "https://deblinaroy.vercel.app",
    siteName: "My Portfolio",
    title: "My Portfolio - Web Developer & Designer",
    description:
      "A modern portfolio showcasing my web development projects, skills, and expertise in React, Next.js, and UI/UX design.",
    images: [
      {
        url: "/Deblinaporfolio.png", // Provide an actual OG image URL
        width: 1200,
        height: 630,
        alt: "My Portfolio Website",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@yourTwitterHandle",
  //   creator: "@yourTwitterHandle",
  //   title: "My Portfolio - Web Developer & Designer",
  //   description:
  //     "A modern portfolio showcasing my web development projects, skills, and expertise in React, Next.js, and UI/UX design.",
  //   images: ["https://deblinaroy.vercel.app/images/LOGOO.png"],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="custom-scrollbar">
      <head>
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Deblina Roy",
            url: "https://deblinaroy.vercel.app/",
            sameAs: [
              "https://github.com/deblina00",
              "https://www.linkedin.com/in/deblina-roy-b7059a225/",
              "https://twitter.com/yourhandle",
            ],
            jobTitle: "Frontend Developer",
            // worksFor: {
            //   "@type": "Organization",
            //   name: "Your Company Name",
            // },
          })}
        </script>
      </head>
      <body className={`${font.className} cursor-none`}>
        <AnimatedCursor />
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
