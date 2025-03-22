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

import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionHeading from "@/components/Helper/SectionHeading";

const Contact = () => {
 
  return (
    <div id="contacts" className="pt-16 pb-16 bg-[#0f0f10]">

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
