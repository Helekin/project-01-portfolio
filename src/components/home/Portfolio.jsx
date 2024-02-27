import { useTranslations } from "next-intl";
import Image from "next/image";

const Portfolio = () => {
  const t = useTranslations("Portfolio");
  const projects = t.raw("Job.projects");

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">
            {t("label.title")}
          </h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">{t("label.subtitle")}</h2>
          <p className="lead">{t("label.description")}</p>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <div className="project shadow-lg rounded-5">
                <a
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  <Image
                    src={project.img}
                    className="img-fluid rounded-3"
                    alt={project.title}
                    width={1400}
                    height={200}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
