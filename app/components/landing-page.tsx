"use client";
import { DmLogo } from "../assets/icons/dm-logo";
import Footer from "./footer";
import PropertyCard from "./property-card";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4 bg-custom-gray-100  md:px-[84px] overflow-scroll ">
        <div className="flex justify-center mb-2">
          <DmLogo className="fill-black" />
        </div>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div className=" w-full">
        <Footer />
      </div>
    </div>
  );
}
