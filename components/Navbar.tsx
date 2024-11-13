import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname.split("/")[1];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between py-8 lg:py-10 px-10 lg:pl-16 relative">
      <div
        className="hidden 2xl:flex absolute w-[48%] left-[10%] border-b z-10"
        style={{ borderColor: "rgba(255, 255, 255, 0.25)" }}
      />
      <div className="rounded-full">
        <Image
          className=""
          src="/assets/shared/logo.svg"
          alt="Logo"
          width={48}
          height={48}
        />
      </div>

      {/* Desktop */}
      <div
        className="hidden lg:flex items-center text-white gap-x-12 px-40 relative"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <Link
          href="/"
          className={`${path === "" && "border-b-2"} font-barlow py-9 `}
        >
          <span className="font-barlowCondensed font-bold tracking-widest">
            00
          </span>{" "}
          HOME
        </Link>
        <Link
          href="/destination"
          className={`${
            path === "destination" && "border-b-2"
          } font-barlow py-9 `}
        >
          <span className="font-barlowCondensed font-bold tracking-widest">
            01
          </span>{" "}
          DESTINATION
        </Link>
        <Link
          href="/crew"
          className={`${path === "crew" && "border-b-2"} font-barlow py-9 `}
        >
          <span className="font-barlowCondensed font-bold tracking-widest">
            02
          </span>{" "}
          CREW
        </Link>
        <Link
          href="/technology"
          className={`${
            path === "technology" && "border-b-2"
          } font-barlow py-9 `}
        >
          <span className="font-barlowCondensed font-bold tracking-widest">
            03
          </span>{" "}
          TECHNOLOGY
        </Link>
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden">
        {!isMobileMenuOpen && (
          <button onClick={handleMobileMenu}>
            <Image
              src="/assets/shared/icon-hamburger.svg"
              alt="Hamburger"
              width={24}
              height={24}
            />
          </button>
        )}

        {isMobileMenuOpen && (
          <div
            className="flex flex-col max-w-[300px] w-full h-screen py-8 right-0 top-0 absolute"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="flex w-full justify-end pr-8">
              <button onClick={handleMobileMenu}>
                <Image
                  src="/assets/shared/icon-close.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className="flex flex-col pl-8 text-white mt-20 gap-y-8">
              <Link
                href="/"
                className={`${path === "" && "border-r-4"} font-barlow `}
              >
                <span className="font-barlowCondensed font-bold tracking-widest mr-2">
                  00
                </span>{" "}
                HOME
              </Link>
              <Link
                href="/destination"
                className={`${
                  path === "destination" && "border-r-4"
                } font-barlow `}
              >
                <span className="font-barlowCondensed font-bold tracking-widest mr-2">
                  01
                </span>{" "}
                DESTINATION
              </Link>
              <Link
                href="/crew"
                className={`${path === "crew" && "border-r-4"} font-barlow `}
              >
                <span className="font-barlowCondensed font-bold tracking-widest mr-2">
                  02
                </span>{" "}
                CREW
              </Link>
              <Link
                href="/technology"
                className={`${
                  path === "technology" && "border-r-4"
                } font-barlow `}
              >
                <span className="font-barlowCondensed font-bold tracking-widest mr-2">
                  03
                </span>{" "}
                TECHNOLOGY
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
