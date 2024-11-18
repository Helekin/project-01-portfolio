"use client";

import { useState } from "react";

import { useGlobalContext } from "@/context/GlobalContext";

const Hero = () => {
  const { language, toggleLanguage } = useGlobalContext();

  return (
    <div className="flex h-screen items-center justify-center bg-black-950 p-5">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="mb-2 text-3xl font-bold text-black-50">
            <span className="text-green-500">Hola mundo!</span> Soy Carlos Acuña
          </h1>
          <p className="mb-6 text-black-50">
            Soy Full Stack Developer: convierto tus ideas en realidad. Desde
            aplicaciones web y móviles hasta software de escritorio e incluso
            proyectos de robótica, puedo ayudarte a construir soluciones
            innovadoras que marcan la diferencia. ¡Creemos algo increíble
            juntos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
