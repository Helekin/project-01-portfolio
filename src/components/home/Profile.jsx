import { useTranslations } from "next-intl";

const Profile = () => {
  const t = useTranslations("Home");

  return (
    <div className="profile my-6">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-uppercase fw-bold"></h3>
            <p>info</p>
            <ul className="list-group list-group-flush">
              <li class="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="fas fa-user text-primary"></i>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
