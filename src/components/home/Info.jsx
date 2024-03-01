import { useTranslations } from "next-intl";

import Profile from "./Profile";
import Skills from "./Skills";

const Info = () => {
  const t = useTranslations("Info");

  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <Profile />
          <Skills />
        </div>
        <div className="row mt-5 text-center">
          <div className="col-12">
            <a
              href="#"
              className="btn btn-outline-dark btn-lg text-uppercase px-5 mx-3 my-2"
            >
              {t("button.hire")}
            </a>
            <a
              href="/pdf/CV-Carlos-Acuna.pdf"
              download="CV-Carlos-Acuna"
              className="btn btn-dark btn-lg text-uppercase px-5 mx-3 my-2"
            >
              {t("button.download")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
