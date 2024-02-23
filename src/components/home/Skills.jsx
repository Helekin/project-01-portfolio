import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills");
  

  return (
    <div className="col-md-6">
      <h3 className="text-uppercase fw-bold">{t("label.title")}</h3>
      <p>{t("text.description")}</p>
      <span className="badge rounded-pill text-bg-primary text-light me-3 mb-3">
        {t("text.skills")}
      </span>
      <span className="badge rounded-pill text-bg-primary text-light me-3 mb-3">
        {t("text.skills.0")}
      </span>
      <span className="badge rounded-pill text-bg-primary text-light me-3 mb-3">
        {t("text.skills.1")}
      </span>
      <span className="badge rounded-pill text-bg-primary text-light me-3 mb-3">
        {t("text.skills.2")}
      </span>
      <span className="badge rounded-pill text-bg-primary text-light me-3 mb-3">
        {t("text.skills.3")}
      </span>
      <span className="badge rounded-pill text-bg-primary text-light me-3 mb-3">
        {t("text.skills.4")}
      </span>
      <span className="badge rounded-pill text-bg-primary text-light me-3 mb-3">
        {t("text.skills.5")}
      </span>
      <span className="badge rounded-pill text-bg-primary text-light me-3 mb-3">
        {t("text.skills.6")}
      </span>
    </div>
  );
};

export default Skills;
