// import SectionHeading from "@/components/Helper/SectionHeading";
// import { skillsData } from "@/Data/data";
// import React from "react";
// import SkillCard from "./SkillCard";

// const Skills = () => {
//   return (
//     <div id="skills" className="pt-16 pb-16 bg-[#0f0f10]">
//       <SectionHeading>
//         My <span className="text-[#F78F42]">Skills</span>
//       </SectionHeading>
//       <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
//         {skillsData.map((skill, i) => {
//           return (
//             <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-aos-delay={`${i * 150}`}
//               key={skill.id}
//             >
//               <SkillCard skill={skill} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Skills;


import type { Metadata } from "next";
import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./SkillCard";
import Script from "next/script";

export const generateMetadata = (): Metadata => {
  return {
    title: "My Skills - My Portfolio",
    description: "Discover the technologies and tools I excel in.",
    openGraph: {
      title: "My Skills - My Portfolio",
      description: "Discover the technologies and tools I excel in.",
      url: "https://nextjs-portfolio-dqwq.vercel.app/skills",
      siteName: "My Portfolio",
      images: [
        {
          url: "https://nextjs-portfolio-dqwq.vercel.app/images/skills-og.png", // Replace with your actual OG image URL
          width: 1200,
          height: 630,
          alt: "Skills",
        },
      ],
      type: "website",
    },
  };
};

const Skills = () => {

 const schemaData = {
   "@context": "https://schema.org",
   "@type": "ItemList",
   name: "Skills",
   description: "A list of technologies and tools I specialize in.",
   url: "https://nextjs-portfolio-dqwq.vercel.app/skills",
   itemListElement: skillsData.map((skill, index) => ({
     "@type": "DefinedTerm",
     position: index + 1,
     name: skill.title,
     description: `${skill.title} proficiency: ${skill.percent}`,
   })),
 };


  return (
    <div id="skills" className="pt-16 pb-16 bg-[#050709]">
      {/* JSON-LD for SEO */}
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <SectionHeading>
        My <span className="text-[#F78F42]">Skills</span>
      </SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill, i) => (
          <div
            data-aos="flip-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${i * 150}`}
            key={skill.id}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;





