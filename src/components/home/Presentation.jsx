import { useTranslations } from "next-intl";
import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({ subsets: ["latin"] });

const Presentation = () => {
  const t = useTranslations("Home");

  return (
    <div className="header-container">
      <Image src="/intro-bg.png" alt="intro bg" fill={true} />
      <div className="text-container">
        <h5
          className={`${lora.className} text-primary fs-3 fw-bold text-uppercase`}
        >
          {t("greeting")}
        </h5>
        <h1 className="display-1 fw-bold text-white">{t("name")}</h1>
        <p className="text-white text-uppercase fs-4">
          <span>{t("title1")} | </span>
          <span>{t("title2")}</span>
        </p>
        <a href="#about" className="btn btn-outline-secondary btn-lg mt-3">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="text-start">
              <span>{t("more")}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Presentation;
