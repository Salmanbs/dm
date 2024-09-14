"use client";
import { DmLogo } from "../assets/icons/dm-logo";
import Footer from "./footer";
import PropertyCard from "./property-card";

export default function LandingPage() {
  return (
    <div className="relative">
      <div className="p-4 bg-zinc-100 h-[100vh] px-[84px]">
        <div className="flex justify-center mb-2">
          <DmLogo className="fill-black" />
        </div>
        <PropertyCard />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
