"use client";

import { useTranslations } from "next-intl";

const NotFoundData = () => {
  const t = useTranslations("General");
  
  return (
    <section className="h-full">
      <div className="container mx-auto flex justify-center">
        <h1 className="text-2xl">{t("noDataFound")}</h1>
      </div>
    </section>
  );
};

export default NotFoundData;
