// import SectionHeading from "@/components/Helper/SectionHeading";
// import { projectData } from "@/Data/data";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Project = () => {
//   return (
//     <div id="projects" className="pt-16 pb-16 bg-[#050709]">
//       <SectionHeading>
//         Latest <span className="text-[#F78F42]">Projects</span>
//       </SectionHeading>
//       <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
//         {projectData.map((project, i) => {
//           return (
//             <div
//               data-aos="fade-up"
//               data-aos-anchor-placement="top-center"
//               data-aos-delay={`${i * 150}`}
//               key={project.id}
//               className="bg-[#fbaa6c] opacity-90 p-6 rounded-lg hover:scale-150 transition-all duration-300"
//             >
//               <Link href={project.url} target="_blank">
//                 <Image
//                   src={project.image}
//                   alt="project"
//                   width={300}
//                   height={200}
//                   className="w-full"
//                 />
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Project;



import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "My Projects - My Portfolio",
    description:
      "Explore the projects I have built using Next.js, React, and more.",
    openGraph: {
      title: "My Projects - My Portfolio",
      description:
        "Explore the projects I have built using Next.js, React, and more.",
      url: "https://nextjs-portfolio-dqwq.vercel.app/projects",
      siteName: "My Portfolio",
      images: [
        {
          url: "https://nextjs-portfolio-dqwq.vercel.app/images/LOGOO.png", // Replace with your OG image URL
          width: 1200,
          height: 630,
          alt: "Projects",
        },
      ],
      type: "website",
    },
  };
};

const Project = () => {

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "My Projects",
  description: "A collection of projects built using Next.js, React, and more.",
  url: "https://nextjs-portfolio-dqwq.vercel.app/projects",
  itemListElement: projectData.map((project, index) => ({
    "@type": "CreativeWork",
    position: index + 1,
    name: project.title,
    description: project.description,
    url: project.url,
    image: project.image,
  })),
};

  return (
    <div id="projects" className="pt-16 pb-16 bg-[#0f0f10]">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <SectionHeading>
        Latest <span className="text-[#F78F42]">Projects</span>
      </SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={project.id}
              className="bg-[#fbaa6c] opacity-90 p-6 rounded-lg hover:scale-150 transition-all duration-300"
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full rounded-md"
                />
              </Link>
              <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
              <p className="text-sm text-gray-800">{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;







