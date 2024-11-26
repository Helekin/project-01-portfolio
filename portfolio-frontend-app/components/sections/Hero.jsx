"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { getProfile } from "@/services/getProfile";

import { useGlobalContext } from "@/context/GlobalContext";

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

  if (loading || !profile) return null;

  return (
    <div className="flex h-screen items-center justify-center bg-black-950 p-5">
      <div className="container mx-auto px-8 lg:flex">
        <div className="flex flex-col lg:w-1/2 justify-center">
          <h1 className="mb-2 text-3xl lg:text-6xl font-bold text-black-50">
            <span className="text-green-500">
              {language === "es-EC" ? "¡Hola mundo!" : "Hello world!"}
            </span>{" "}
            {language === "es-EC" ? "Soy" : "I'm"} {profile.name}
          </h1>
          <p className="mb-6 text-black-50 lg:text-3xl">
            {profile.description}
          </p>
          <div className="flex justify-start space-x-5">
            <a
              href="https://github.com/MarianoVilla"
              target="_blank"
              className="inline-flex items-center py-4 px-12 bg-green-500 text-green-50 hover:bg-green-600 rounded"
            >
              Mira mi código de gatos
            </a>
          </div>
        </div>
        <div className="lg:flex lg:w-1/2 items-center justify-center">
          <Image
            src={profile.avatar.url}
            alt={profile.avatar.name}
            width={500}
            height={500}
            className="md:size-96 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
