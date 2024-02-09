import { useState, useEffect } from "react";
import { Lora } from "next/font/google";
import Image from "next/image";

const lora = Lora({ subsets: ["latin"] });

const HomePage = () => {
  const [text, setText] = useState("");
  const fullText = "I  am Carlos Acuña";
  const interval = 100;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, interval);

    return () => {
      clearInterval(typingInterval);
    };
  }, [fullText]);

  return (
    <div className="header-container">
      <Image src="/intro-bg.png" alt="intro bg" fill={true} />
      <div className="text-container">
        <h5
          className={`${lora.className} text-primary fs-3 fw-bold text-uppercase`}
        >
          Hello, World
        </h5>
        <p className="display-1 fw-bold text-white">{text}</p>
        <p className="roles text-white text-uppercase fs-4">
          <span>Backend Developer | </span>
          <span>AWS Expert</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
