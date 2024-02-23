import Presentation from "./Presentation";
import About from "./About";
import Profile from "./Profile";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <>
      <Presentation />
      <About />
      <div className="profile my-5">
        <div className="container">
          <div className="row">
            <Profile />
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
