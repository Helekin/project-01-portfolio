import { useTranslations } from "next-intl";
import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({ subsets: ["latin"] });

const Presentation = () => {
  const t = useTranslations("Home");

  return (
    <div className="header">
      <Image src="/intro-bg.png" alt="intro bg" fill={true} />
      <div className="title">
        <h5
          className={`${lora.className} text-primary fs-3 fw-bold text-uppercase`}
        >
          {t("text.greeting")}
        </h5>
        <h1 className="display-1 fw-bold text-white">{t("text.name")}</h1>
        <p className="text-white text-uppercase fs-4">
          <span>{t("text.title1")} | </span>
          <span>{t("text.title2")}</span>
        </p>
        <a href="#about" className="btn btn-outline-light btn-lg mt-3">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="text-start">
              <span>{t("button.about")}</span>
            </div>
          </div>
        </a>
        <div className="social">
          <a href="/" target="_blank">
            <i className="fab fa-linkedin fa-3x text-white mx-3"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fab fa-github fa-3x text-white mx-3"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
