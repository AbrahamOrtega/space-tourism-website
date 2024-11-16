import Navbar from "@/components/Navbar";
import TechnologyModel from "@/models/TechnologyModel";
import { technology } from "@/const/data.json";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState<TechnologyModel>(
    technology[0]
  );

  const [isMobile, setIsMobile] = useState(false);

  // Detecta si la pantalla es menor a 1024px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Configurar estado inicial
    handleResize();

    // Escuchar eventos de redimensionamiento
    window.addEventListener("resize", handleResize);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="technology" className="flex flex-col min-h-screen h-full w-full">
      <Navbar />

      <div className="flex flex-col w-full h-full flex-grow lg:pl-40">
        <div className="flex text-white font-barlowCondensed text-[28px] gap-x-[24px] tracking-[4px] px-8 lg:px-0">
          <span className="font-bold text-white/25 tracking-[15%] lg:tracking-[5px]">
            03
          </span>
          <h3>SPACE LAUNCH 101</h3>
        </div>

        <div className="flex flex-col-reverse lg:flex-row h-full">
          <div className="flex flex-col lg:flex-row lg:w-1/2 items-center lg:mr-10 px-8 lg:px-0">
            <div className="flex lg:flex-col gap-8 lg:mr-16 mb-8 lg:mb-0">
              {technology.map((tech, index) => (
                <button
                  key={index}
                  className={`${
                    selectedTechnology === tech
                      ? "bg-white border-white text-black"
                      : "border-white/25 text-white"
                  } w-10 h-10 lg:w-20 lg:h-20 border rounded-full font-bellefair text-[18px] lg:text-[32px]`}
                  onClick={() => setSelectedTechnology(tech)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="flex flex-col text-white text-center lg:text-left gap-y-4 lg:gap-y-0 mb-12 lg:mb-0">
              <p className="font-bellefair text-[18px] lg:text-[32px] text-white/50">
                THE TERMINOLOGY…
              </p>
              <h3 className="font-bellefair text-[24px] lg:text-[56px]">
                {selectedTechnology.name.toUpperCase()}
              </h3>
              <p className="text-blue-100 font-barlow text-[15px] lg:text-[18px] leading-8">
                {selectedTechnology.description}
              </p>
            </div>
          </div>

          <div className="flex lg:w-1/2 items-center lg:justify-end my-12 lg:my-0">
            <div className="flex w-full lg:max-w-[600px]">
              <Image
                src={
                  isMobile
                    ? selectedTechnology.images.landscape
                    : selectedTechnology.images.portrait
                }
                alt={selectedTechnology.name}
                width={1000}
                height={1000}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
