"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { FaDownload } from "react-icons/fa";

import { getProfile } from "@/services/getProfile";

import { useGlobalContext } from "@/context/GlobalContext";

import Spinner from "../ui/Spinner";
import Socials from "./Socials";
import Avatar from "./Avatar";

const Hero = () => {
  const { language } = useGlobalContext();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const { data } = await getProfile(language);

        setProfile(data[0]);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [language]);

  return loading || !profile ? (
    <Spinner />
  ) : (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              {language === "es-EC" ? "¡Hola mundo! " : "Hello world! "}
              {language === "es-EC" ? "Soy " : "I'm "}
              <span className="text-accent">{profile.name}</span>
            </h1>
            <p className="xl:max-w-[500px] max-w-full mb-9 text-white/80">
              {profile.description}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href={profile.cv.url}
                target="_blank"
                className="border-2 border-accent hover:bg-accent text-accent hover:text-white/80  py-2 px-8 rounded-full uppercase flex items-center gap-2 hover:transition-all duration-500"
              >
                <span>
                  {language === "es-EC" ? "Descargar CV" : "Download CV"}
                </span>
                <FaDownload />
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
