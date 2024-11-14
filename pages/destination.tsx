import Navbar from "@/components/Navbar";
import { destinations } from "@/const/data.json";
import Image from "next/image";
import { useState } from "react";
import DestinationModel from "@/models/DestinationModel";

export default function Destination() {
  const [selectedDestination, setSelectedDestination] =
    useState<DestinationModel>(destinations[0]);

  const handleDestination = (destination: DestinationModel) => {
    setSelectedDestination(destination);
  };

  return (
    <div id="destination" className="flex flex-col min-h-screen h-full w-full">
      <Navbar />

      <div className="flex flex-col w-full h-full px-8 lg:px-40">
        <div className="flex text-white font-barlowCondensed text-[28px] gap-x-[24px] tracking-[4px]">
          <span className="font-bold opacity-25 tracking-[15%] lg:tracking-[5px]">
            01
          </span>
          <h3>PICK YOUR DESTINATION</h3>
        </div>

        <div className="flex flex-col lg:flex-row mt-12 gap-y-12 w-full h-full items-center">
          <div className="flex w-full lg:w-1/2 lg:px-8 justify-center">
            <Image
              className="max-w-[400px] lg:max-w-[500px] w-full"
              src={selectedDestination.images.webp}
              alt={selectedDestination.name}
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 lg:px-12">
            <div className="flex flex-col lg:max-w-[500px] w-full lg:px-8">
              <div className="flex w-full lg:w-fit justify-center text-white gap-x-6 lg:gap-x-8 font-barlowCondensed tracking-[4px]">
                {destinations.map((destination, index) => (
                  <button
                    key={index}
                    className={`py-3 ${
                      selectedDestination === destination &&
                      "border-b-4 border-white text-[14px] lg:text-[16px]"
                    }`}
                    onClick={() => handleDestination(destination)}
                  >
                    {destination.name.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="flex flex-col text-white mt-4 text-center lg:text-left">
                <h3 className="text-[56px] lg:text-[96px] font-bellefair">
                  {selectedDestination.name.toUpperCase()}
                </h3>
                <p className="font-barlow text-[18px] text-blue-100">
                  {selectedDestination.description}
                </p>
                <div className="flex w-full border-b-2 border-white/25 mt-10" />
                <div className="flex flex-col lg:flex-row w-full mt-10 gap-y-6 lg:mb-0 mb-10">
                  <div className="flex flex-col lg:w-1/2">
                    <p className="font-barlowCondensed text-[14px] tracking-[2px] text-blue-200">
                      AVG. DISTANCE
                    </p>
                    <p className="font-bellefair text-[28px]">
                      {selectedDestination.distance.toUpperCase()}
                    </p>
                  </div>
                  <div className="flex flex-col lg:w-1/2">
                    <p className="font-barlowCondensed text-[14px] tracking-[2px] text-blue-200">
                      EST. TRAVEL TIME
                    </p>
                    <p className="font-bellefair text-[28px]">
                      {selectedDestination.travel.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
