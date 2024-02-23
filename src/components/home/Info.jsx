import Profile from "./Profile";
import Skills from "./Skills";

const Info = () => {
  return (
    <div className="profile my-5">
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
              Hire Me Now
            </a>
            <a
              href="#"
              className="btn btn-dark btn-lg text-uppercase px-5 mx-3 my-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
