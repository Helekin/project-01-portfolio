"use client";

import { useState, useEffect } from "react";

import { getServices } from "@/services/getServices";

import { useGlobalContext } from "@/context/GlobalContext";

const Services = () => {
  const { language } = useGlobalContext();
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const { data } = await getServices(language);

        setServices(data);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [language]);

  if (loading || !services) return null;

  return (
    <section className="bg-gray-50 dark:bg-blue-900 mx-auto px-6 pb-8">
      <h1 className="text-5xl font-bold text-center text-blue-500 dark:text-blue-400 mb-4">
        {language === "es-EC"
          ? "Servicios Integrales de Desarrollo de Software"
          : "Comprehensive Software Development Services"}
      </h1>
      <h2 className="text-2xl font-medium text-center text-gray-800 dark:text-gray-200 mb-12">
        {language === "es-EC"
          ? "Transforma tus ideas en realidad con mi experiencia como desarrollador Full Stack"
          : "Transform your ideas into reality with my full-stack expertise"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-500 dark:bg-blue-700 rounded-xl shadow-lg p-6 transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-50 dark:text-gray-200 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-200 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
