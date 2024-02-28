import Modal from "react-bootstrap/Modal";

const ProjectModal = (props) => {
  const { show, handleClose, job, project } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{project.description}</li>
          <li className="list-group-item">
            <span className="fw-bold">{job.label.category}: </span>
            {`${project.category}`}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">{job.label.client}: </span>
            {`${project.client}`}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">{job.label.date}: </span>
            {`${project.date}`}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">{job.label.url}: </span>
            <a href={project.url} target="_blank">
              {`${project.url}`}
            </a>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
