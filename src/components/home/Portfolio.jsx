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
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">{t("label.subtitle")}</h2>
          <p className="lead">{t("label.description")}</p>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="shadow-lg rounded-5">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
