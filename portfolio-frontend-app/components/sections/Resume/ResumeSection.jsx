"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Experience from "./Experience";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const t = useTranslations("Resume");

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row w-full gap-12">
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <button
              className={`py-2 px-4 justify-center whitespace-nowrap rounded-lg text-balance font-medium ring-offset-white transition-all ${
                activeTab === 0
                  ? "bg-accent text-primary"
                  : "bg-[#27272c] hover:bg-gray-500 text-white"
              }`}
              onClick={() => setActiveTab(0)}
            >
              {t("experience")}
            </button>
            <button
              className={`py-2 px-4 justify-center whitespace-nowrap rounded-lg text-balance font-medium ring-offset-white transition-all ${
                activeTab === 1
                  ? "bg-accent text-primary"
                  : "bg-[#27272c] hover:bg-gray-500 text-white"
              }`}
              onClick={() => setActiveTab(1)}
            >
              {t("education")}
            </button>
            <button
              className={`py-2 px-4 justify-center whitespace-nowrap rounded-lg text-balance font-medium ring-offset-white transition-all ${
                activeTab === 2
                  ? "bg-accent text-primary"
                  : "bg-[#27272c] hover:bg-gray-500 text-white"
              }`}
              onClick={() => setActiveTab(2)}
            >
              {t("skills")}
            </button>
            <button
              className={`py-2 px-4 justify-center whitespace-nowrap rounded-lg text-balance font-medium ring-offset-white transition-all ${
                activeTab === 3
                  ? "bg-accent text-primary"
                  : "bg-[#27272c] hover:bg-gray-500 text-white"
              }`}
              onClick={() => setActiveTab(3)}
            >
              {t("aboutMe")}
            </button>
          </div>
          <div className="min-h-[70vh] w-full">
            {activeTab === 0 ? <Experience /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
