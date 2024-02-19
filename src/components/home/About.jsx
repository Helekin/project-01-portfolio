import { useTranslations } from "next-intl";
import Image from "next/image";

const About = () => {
  const t = useTranslations("Home");

  return (
    <div id="about" className="about bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">
            {t("text.about")}
          </h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">{t("text.intro")}</h2>
        </div>
        <div className="about-content">
          <Image
            src="/intro-bg.png"
            alt="intro bg"
            className="about-img img-fluid rounded-circle"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
