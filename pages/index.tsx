import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div id="home" className="flex flex-col h-screen w-full">
      <Navbar />
      <div className="flex flex-col flex-grow h-full w-full p-12 lg:p-32">
        <div className="flex flex-col h-full lg:flex-row justify-between lg:items-end text-center lg:text-left w-full">
          <div className="flex flex-col w-full lg:w-1/2 text-white">
            <p className="font-barlowCondensed md:text-[28px] text-blue-100">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="font-bellefair text-[80px] md:text-[144px]">
              SPACE
            </h1>
            <p className="font-barlow text-[15px] md:text-[18px]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end justify-center">
            <button className="bg-white w-40 h-40 lg:w-64 lg:h-64 rounded-full text-[32px] font-bellefair hover:outline hover:outline-[32px] lg:hover:outline-[64px] transition-all duration-300 outline-white/10">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
