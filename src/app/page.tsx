"use client";
import UnderConstruction from "@/components/under_development";
import Image from "next/image";
import Link from "next/link";
import TypeIt from "typeit-react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-12">
      <UnderConstruction />
      <div className="font-medium text-2xl font-mono text-cyan-700">
        <TypeIt>Something amazing is on its way...</TypeIt>
      </div>
      <div className="flex justify-center items-center mt-3">
        <Link
          href={"https://github.com/sarmad-ajmal"}
          target="_blank"
          className="pr-5"
        >
          <Image
            src="/assets/images/github.svg"
            alt="github"
            width={50}
            height={50}
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/sarmad-ajmal/"}
          target="_blank"
          className="pr-5"
        >
          <Image
            src="/assets/images/linkedin.svg"
            alt="linkedin"
            width={50}
            height={50}
          />
        </Link>
        <Link
          href={"https://twitter.com/SarmadAjmal"}
          target="_blank"
          className="pr-5"
        >
          <Image
            src="/assets/images/twitter.svg"
            alt="twitter"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <SpeedInsights />
    </main>
  );
}
