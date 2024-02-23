import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills");
  const skills = t.raw("text.skills");

  return (
    <div className="col-md-6">
      <h3 className="text-uppercase fw-bold">{t("label.title")}</h3>
      <p>{t("text.description")}</p>
      {skills.map((skill) => (
        <span
          key={skill.id}
          className="badge rounded-pill text-bg-primary text-light me-3 mb-3"
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default Skills;
