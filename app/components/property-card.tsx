import Image from "next/image";
import image from "@/app/assets/images/image.png";
import { useState } from "react";
import DetailCard from "./detail-card";

export default function PropertyCard() {
  const [expandedState, setExpandedState] = useState<boolean>(false);

  const onClick = () => {
    setExpandedState((prev) => !prev);
  };

  return (
    <div className="bg-white">
      <div className="p-4 px-8 flex w-full justify-between items-center bg-white gap-4 text-black h-[180px]">
        <Image
          alt="assests"
          src={image}
          height={143}
          width={143}
          className="h-[143px] w-[143px]"
        />
        <div className="flex flex-col justify-start w-full gap-4">
          <p className="text-[20px]">Apartments</p>
          <p className="text-[32px] font-medium">Sobha </p>
          <p className="text-[18px] text-zinc-400">123</p>
        </div>
        <div className="flex flex-col h-full justify-between w-fit">
          <div>
            <p className="text-[16px]">HSR Layout</p>
            <p className="text-gray-400 text-[16px] text-nowrap">
              {" "}
              North Bangalore
            </p>
          </div>
          <div>
            {!expandedState && (
              <div
                className="text-[16px] text-nowrap underline text-zinc-400 cursor-pointer"
                onClick={onClick}
              >
                {" "}
                see configurations
              </div>
            )}
          </div>
        </div>
      </div>
      {expandedState && (
        <div className="bg-white text-black px-8 pb-4">
          <p className="text-gray-400 text-[18px]"> CONFIGURATIONS</p>
          <div>
            <DetailCard />
            <div className="flex justify-end">
              <div
                className="text-[16px] text-nowrap underline text-zinc-400"
                onClick={onClick}
              >
                see less
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
