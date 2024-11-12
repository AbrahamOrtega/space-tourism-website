import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
});
const barlowCondensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});
const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
