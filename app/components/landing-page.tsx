import { DmLogo } from "../assets/icons/dm-logo";
import PropertyCard from "./property-card";

export default function LandingPage() {
  return (
    <div className="p-4 bg-zinc-100 h-[100vh]">
      <div className="flex justify-center mb-2">
        <DmLogo className="fill-black" />
      </div>
      <PropertyCard />
    </div>
  );
}
