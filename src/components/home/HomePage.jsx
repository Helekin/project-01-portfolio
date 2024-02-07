import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <header className="header vh-100 text-center position-relative">
      <div className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100">
        <h5
          className={`${lora.className} text-primary fs-3 fw-bold text-uppercase`}
        >
          Hello, World
        </h5>
        <h1 className="display-1 fw-bold text-white"></h1>
        <p className="roles text-white text-uppercase fs-4">
          <span>Backend Developer | </span>
          <span>AWS Expert</span>
        </p>
      </div>
    </header>
  );
};

export default HomePage;
