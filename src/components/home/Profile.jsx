import { useTranslations } from "next-intl";

const Profile = () => {
  const t = useTranslations("Profile");

  return (
    <div className="col-md-6">
      <h3 className="text-uppercase fw-bold">{t("label.title")}</h3>
      <p>{t("text.description")}</p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item mb-3">
          <h5 className="text-transform">
            <i className="fas fa-user text-primary"></i> {t("label.name")}
          </h5>
          <p>{t("text.name")}</p>
        </li>
        <li className="list-group-item mb-3">
          <h5 className="text-transform">
            <i className="fas fa-calendar text-primary"></i> {t("label.birth")}
          </h5>
          <p>{t("text.birth")}</p>
        </li>
        <li className="list-group-item mb-3">
          <h5 className="text-transform">
            <i className="fas fa-building text-primary"></i>{" "}
            {t("label.position")}
          </h5>
          <p>{t("text.position")}</p>
        </li>
        <li className="list-group-item mb-3">
          <h5 className="text-transform">
            <i className="fas fa-home text-primary"></i> {t("label.website")}
          </h5>
          <p>{t("text.website")}</p>
        </li>
        <li className="list-group-item mb-3">
          <h5 className="text-transform">
            <i className="fas fa-envelope text-primary"></i> {t("label.email")}
          </h5>
          <p>{t("text.email")}</p>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
