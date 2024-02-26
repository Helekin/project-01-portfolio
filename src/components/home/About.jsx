import { useTranslations } from "next-intl";
import Image from "next/image";

const About = () => {
  const t = useTranslations("About");

  return (
    <div id="about" className="bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">
            {t("text.about")}
          </h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">{t("text.intro")}</h2>
        </div>
        <div className="about-content d-flex gap-5 align-items-center">
          <Image
            src="/img/profile.jpg"
            alt="profile"
            className="img-fluid rounded-circle"
            width={200}
            height={200}
          />
          <p className="lead">{t("text.bio")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
