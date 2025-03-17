import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      {/* Phone */}
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#F78F42] to-[#ee3304] flex items-center justify-center flex-col">
          <FaPhone
            className="w-4 h-4 md:w-7 md:h-7 text-white"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl text-white font-bold">Phone</h3>
          <h3 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData?.phone || "N/A"}
          </h3>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#F78F42] to-[#ee3304] flex items-center justify-center flex-col">
          <FaEnvelope
            className="w-4 h-4 md:w-7 md:h-7 text-white"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl text-white font-bold"> Email</h3>
          <h3 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData?.email || "N/A"}
          </h3>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#F78F42] to-[#ee3304] flex items-center justify-center flex-col">
          <FaMap
            className="w-4 h-4 md:w-7 md:h-7 text-white"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl text-white font-bold">Address</h3>
          <h3 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData?.address || "N/A"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
