import { useTranslations } from "next-intl";

const Portfolio = () => {
  const t = useTranslations("Portfolio");

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">
            {t("label.title")}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
