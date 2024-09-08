import Image from "next/image";
import assets from "@/app/assets/images/assetz.png";

export default function PropertyCard() {
  return (
    <div className="p-4 px-8 flex w-full justify-between items-center bg-red-50 gap-4">
      <Image alt="assests" src={assets} height={143} width={143} />
      <div className="flex flex-col justify-start w-full gap-4">
        <p className="text-[20px]">Apartments</p>
        <p className="text-[32px] font-medium">Sobha </p>
        <p className="text-[18px]">123</p>
      </div>
      <div>Location</div>
    </div>
  );
}
