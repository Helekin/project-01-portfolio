import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub className="size-7" />, path: "https://github.com/Helekin" },
  {
    icon: <FaLinkedin className="size-7" />,
    path: "https://www.linkedin.com/in/carlos-jose-acuna/?locale=en_US",
  },
];

const Socials = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          className="w-14 h-14 border-2 rounded-full flex justify-center items-center border-accent text-accent hover:bg-accent hover:text-white/80 hover:transition-all duration-500"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
