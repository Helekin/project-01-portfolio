"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { getProjects } from "@/services/getProjects";

import { useGlobalContext } from "@/context/GlobalContext";

const Projects = () => {
  const { language } = useGlobalContext();
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const { data } = await getProjects(language);

        setProjects(data);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [language]);

  if (loading || !projects) return null;

  return (
    <section className="bg-gray-50 dark:bg-blue-900 mx-auto px-6 py-8">
      <h1 className="text-5xl font-bold text-center text-blue-500 dark:text-blue-400 mb-4">
        {language === "es-EC" ? "Proyectos Destacados" : "Featured Projects"}
      </h1>
      <h2 className="text-2xl font-medium text-center text-gray-800 dark:text-gray-200 mb-12">
        {language === "es-EC"
          ? "Descubre algunos de los proyectos en los que he trabajado, que reflejan mi experiencia y compromiso con el desarrollo de soluciones de software innovadoras"
          : "Explore some of the projects I've worked on, showcasing my expertise and commitment to delivering innovative software solutions"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all bg-blue-50 dark:bg-gray-800"
          >
            <div className="flex-shrink-0">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.cover.url}
                  className="h-48 w-full object-cover"
                  alt="test"
                  width={500}
                  height={500}
                />
              </a>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div className="flex-1">
                <p className="mt-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {project.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
