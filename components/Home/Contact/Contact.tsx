// import React from "react";
// import ContactForm from "./ContactForm";
// import ContactInfo from "./ContactInfo";
// import SectionHeading from "@/components/Helper/SectionHeading";

// const Contact = () => {
//   return (
//     <div id="contacts" className="pt-16 pb-16 bg-[#0f0f10]">
//       <SectionHeading>
//         Contact <span className="text-[#F78F42]">Me</span>
//       </SectionHeading>
//       <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
//         {/* conatct Form */}
//         <div data-aos="fade-left" data-aos-anchor-placement="top-center">
//           <ContactForm />
//         </div>
//         {/* contact Info */}
//         <div
//           data-aos="fade-right"
//           data-aos-anchor-placement="top-center"
//           data-aos-delay="100"
//           className="xl:mx-auto"
//         >
//           <ContactInfo />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import type { Metadata } from "next";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeading from "@/components/Helper/SectionHeading";

export const generateMetadata = (): Metadata => {
  return {
    title: "Contact Me - My Portfolio",
    description:
      "Get in touch with me for collaborations, projects, or any inquiries.",
    openGraph: {
      title: "Contact Me - My Portfolio",
      description:
        "Get in touch with me for collaborations, projects, or any inquiries.",
      url: "https://deblinaroy.vercel.app/#contact",
      siteName: "My Portfolio",
      images: [
        {
          url: "https://deblinaroy.vercel.app/images/LOGOO.png", // Replace with your actual OG image URL
          width: 1200,
          height: 630,
          alt: "Contact Page",
        },
      ],
      type: "website",
    },
  };
};

const Contact = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://deblinaroy.vercel.app/#contact",
    name: "Contact Me",
    description:
      "Get in touch with me for collaborations, projects, or any inquiries.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "your-email@example.com",
      contactType: "Customer Support",
      availableLanguage: ["English", "Japanese"],
    },
  };
  

  return (
    <div id="contacts" className="pt-16 pb-16 bg-[#0f0f10]">

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <SectionHeading>
        Contact <span className="text-[#F78F42]">Me</span>
      </SectionHeading>
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        {/* Contact Form */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <ContactForm />
        </div>
        {/* Contact Info */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="xl:mx-auto"
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
