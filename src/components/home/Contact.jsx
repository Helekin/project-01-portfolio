import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <div className="text-bg-dark bg-gradient py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="text-center mb-5">
              <h4 className="text-uppercase fw-bold text-primary">
                {t("label.title")}
              </h4>
              <hr className="w-25 mx-auto" />
              <h2 className="mb-4">{t("label.subtitle")}</h2>
              <p className="lead">{t("label.description")}</p>
            </div>
            <form>
              <div className="mb-5">
                <input
                  type="text"
                  className="form-control bg-transparent"
                  name="name"
                  placeholder={t("placeholder.name")}
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  className="form-control bg-transparent"
                  name="email"
                  placeholder={t("placeholder.email")}
                />
              </div>
              <div className="mb-5">
                <textarea
                  className="form-control bg-transparent"
                  name="message"
                  placeholder={t("placeholder.message")}
                ></textarea>
              </div>
              <div className="mb-5 d-grid">
                <button type="submit" className="btn btn-primary">
                  {t("button.submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex mt-5">
          <p className="flex-grow-1">
            {`${t("copyright.text")} ${new Date().getFullYear()}`}
          </p>
          <div className="hstack gap-3">
            <a href="/" target="_blank">
              <i className="fab fa-linkedin fa-3x text-white mx-3"></i>
            </a>
            <a href="https://github.com/Helekin" target="_blank">
              <i className="fab fa-github fa-3x text-white mx-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
