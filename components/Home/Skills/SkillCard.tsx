import Image from "next/image";
import React from "react";

// define props type
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, percent, title } = skill;
  return (
    <div className="p-6 hover:bg-[#F78F42] duration-300 transition-all cursor-pointer text-center rounded-lg bg-[#1C1C1C] opacity-90">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        loading="lazy"
        className="object-cover mx-auto"
      />
      <h4 className="text-[18px] mt-4 text-white font-[600]">{title}</h4>

      {/* Percentage Bar */}
      <div className="bg-black mt-4 rounded-lg p-2 text-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#44e43e] "
          style={{ width: percent }}
        />
        <span className="relative">{percent}</span>
      </div>
    </div>
  );
};

export default SkillCard;
