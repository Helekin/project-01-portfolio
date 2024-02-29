import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");
  const services = t.raw("items");

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">
            {t("label.title")}
          </h4>
          <hr className="w-25 mx-auto" />
          <p className="lead">{t("label.description")}</p>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default Services;
