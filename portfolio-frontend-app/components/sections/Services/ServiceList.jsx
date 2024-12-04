"use client";

import { useState, useEffect } from "react";

import { getServices } from "@/services/getServices";

import { useGlobalContext } from "@/context/GlobalContext";

import NotFoundData from "@/components/ui/NotFoundData";

const ServiceList = () => {
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
  ) : services ? (
    <NotFoundData />
  ) : (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        {services.map((service, index) => (
          <div key={index}>
            <div>
              <div>{index + 1}</div>
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
