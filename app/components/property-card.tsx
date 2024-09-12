 
import Image from "next/image";
import assets from "@/app/assets/images/assetz.png";
import { useState } from "react";

export default function PropertyCard() {
  const [expandedState, setExpandedState] = useState<boolean>(false)

  const onClick = () => {
    setExpandedState((prev) => !prev)
  }


  return (
    <div className="bg-white">
    <div className="p-4 px-8 flex w-full justify-between items-center bg-white gap-4 text-black h-[180px]">
      <Image alt="assests" src={assets} height={143} width={143} className="bg-red-500" />
      <div className="flex flex-col justify-start w-full gap-4">
        <p className="text-[20px]">Apartments</p>
        <p className="text-[32px] font-medium">Sobha </p>
        <p className="text-[18px]">123</p>
      </div>
      <div className="flex flex-col h-full justify-between w-fit">
        <div>
          <p>HSR Layout</p>
          <p> North Bangalore</p>
        </div>
        <div>
          <div className="text-[16px] text-nowrap underline" onClick={onClick}> see configurations</div></div>
      </div>
    </div>
    {expandedState && (
      <div className="bg-white text-black">
        <p> CONFIGURATIONS</p>
        <p>APARTMENTS</p>
        <div className="flex gap-1">
          <div className="bg-gray-300">
            1bhk
            </div>
            <div className="bg-gray-300">
            1bhk
            </div>
            <div className="bg-gray-300">
            1bhk
            </div>
          </div>
          <p>APARTMENTS</p>
        <div className="flex gap-1">
          <div className="bg-gray-300">
            1bhk
            </div>
            <div className="bg-gray-300">
            1bhk
            </div>
            <div className="bg-gray-300">
            1bhk
            </div>
          </div>
      </div>
    )}
    </div>
  );
}
