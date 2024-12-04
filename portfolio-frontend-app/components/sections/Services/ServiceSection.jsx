"use client";

import { useState, useEffect } from "react";

import { getServices } from "@/services/getServices";

import { useGlobalContext } from "@/context/GlobalContext";

import Spinner from "@/components/ui/Spinner";
import NotFoundData from "@/components/ui/NotFoundData";

const ServiceSection = () => {
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

  return loading ? (
    <Spinner />
  ) : !services ? (
    <NotFoundData />
  ) : (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {index + 1}
                </div>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
