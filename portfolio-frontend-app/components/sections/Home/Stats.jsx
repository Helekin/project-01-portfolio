"use client";

import { useTranslations } from "next-intl";

const Stats = () => {
  const t = useTranslations("Hero.stats");
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <div className="text-4xl xl:text-6xl font-extrabold">
              {t("years.value")}
            </div>
            <p
              className={`${
                t("years.title").length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } leading-snug text-white/80`}
            >
              {t("years.title")}
            </p>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <div className="text-4xl xl:text-6xl font-extrabold">
              {t("projects.value")}
            </div>
            <p
              className={`${
                t("projects.title").length < 15
                  ? "max-w-[100px]"
                  : "max-w-[150px]"
              } leading-snug text-white/80`}
            >
              {t("projects.title")}
            </p>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <div className="text-4xl xl:text-6xl font-extrabold">
              {t("technologies.value")}
            </div>
            <p
              className={`${
                t("technologies.title").length < 15
                  ? "max-w-[100px]"
                  : "max-w-[150px]"
              } leading-snug text-white/80`}
            >
              {t("technologies.title")}
            </p>
          </div>
          <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <div className="text-4xl xl:text-6xl font-extrabold">
              {t("code.value")}
            </div>
            <p
              className={`${
                t("code.title").length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } leading-snug text-white/80`}
            >
              {t("code.title")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
