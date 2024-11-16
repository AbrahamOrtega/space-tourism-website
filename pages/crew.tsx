import Navbar from "@/components/Navbar";
import Image from "next/image";
import { crew } from "@/const/data.json";
import { useState } from "react";
import CrewModel from "@/models/CrewModel";

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState<CrewModel>(crew[0]);

  return (
    <div id="crew" className="flex flex-col min-h-screen w-full">
      <Navbar />

      <div className="flex flex-col w-full h-full flex-grow px-8 lg:px-40">
        <div className="flex text-white font-barlowCondensed text-[28px] gap-x-[24px] tracking-[4px]">
          <span className="font-bold text-white/25 tracking-[15%] lg:tracking-[5px]">
            02
          </span>
          <h3>MEET YOUR CREW</h3>
        </div>

        <div className="flex flex-col lg:flex-row w-full h-full items-center mt-12 lg:relative">
          <div className="flex flex-col lg:w-1/2 text-center lg:text-left">
            <div className="flex flex-col max-w-[550px] w-full text-white">
              <p className="font-bellefair text-[18px]  lg:text-[32px] text-white/50">
                {selectedCrew.role.toUpperCase()}
              </p>
              <h3 className="font-bellefair text-[24px] lg:text-[56px] mb-6">
                {selectedCrew.name.toUpperCase()}
              </h3>
              <p className="font-barlow text-[15px] lg:text-[18px] text-blue-100">
                {selectedCrew.bio}
              </p>
            </div>
          </div>
          {/* Dots Container - Positioned at the bottom */}
          <div className="flex gap-x-10 lg:absolute bottom-0 mt-12">
            {crew.map((crewMember, index) => (
              <button
                key={index}
                className={`${
                  selectedCrew === crewMember
                    ? "bg-white"
                    : "bg-[#979797] opacity-20"
                } w-4 h-4 rounded-full hover:bg-[#979797] hover:opacity-50`}
                onClick={() => setSelectedCrew(crewMember)}
              ></button>
            ))}
          </div>

          <div className="flex w-full px-8 lg:p-0 lg:w-1/2 lg:h-[550px] justify-center lg:justify-end mt-12 lg:mt-0 pb-8 lg:pb-0">
            <Image
              className="crew-image max-w-[400px] object-contain"
              src={selectedCrew.images.webp}
              alt={selectedCrew.name}
              layout="responsive"
              width={400}
              height={550}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
