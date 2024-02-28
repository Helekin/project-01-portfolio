import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import ProjectModal from "../ui/ProjectModal";

const Portfolio = () => {
  const [show, setShow] = useState();
  const [selectedProject, setSelectedProject] = useState(null);

  const t = useTranslations("Portfolio");
  const projects = t.raw("Job.projects");
  const job = t.raw("Job");

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setShow(true);
    setSelectedProject(project);
  };

  return (
    <>
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
                  <Image
                    src={project.img}
                    className="img-fluid rounded-3"
                    alt={project.title}
                    width={1400}
                    height={200}
                    onClick={() => handleShow(project)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          show={show}
          handleClose={handleClose}
          job={job}
          project={selectedProject}
        />
      )}
    </>
  );
};

export default Portfolio;
