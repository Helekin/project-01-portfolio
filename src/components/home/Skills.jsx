import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills");
  const skills = t("text.skills");

  return (
    <div className="col-md-6">
      <h3 className="text-uppercase fw-bold">{t("label.title")}</h3>
      <p>{t("text.description")}</p>
    </div>
  );
};

export default Skills;
