import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({ subsets: ["latin"] });

const HomePage = () => {
  return (
    <div className="header-container">
      <Image src="/intro-bg.png" alt="intro bg" fill={true} />
      <div className="text-container">
        <h5
          className={`${lora.className} text-primary fs-3 fw-bold text-uppercase`}
        >
          Hello, World
        </h5>
        <p className="roles text-white text-uppercase fs-4">
          <span>Backend Developer | </span>
          <span>AWS Expert</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
