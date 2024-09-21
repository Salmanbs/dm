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
    <div className="bg-white mb-6 rounded-md  border border-white">
      <div className="p-4 px-8 flex w-full justify-between items-center  text-black h-[180px]">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <Image
            alt="assests"
            src={image}
            height={143}
            width={143}
            className="h-[56px] w-[56px]   md:h-[143px] md:w-[143px]"
          />
          <div className="flex flex-col justify-start w-full gap-2 md:gap-4">
            <p className="text-[14px] md:text-[20px] text-custom-gray-600">
              Apartments
            </p>
            <p className="text-[20px]  md:text-[32px] font-medium">Sobha </p>
            <p className="text-[12px] md:text-[18px] text-custom-gray-500">
              123
            </p>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between w-fit">
          <div>
            <p className="text-[12px] md:text-[16px]">HSR Layout</p>
            <p className="text-custom-gray-400 text-[16px] text-nowrap">
              {" "}
              North Bangalore
            </p>
          </div>
          <div>
            {!expandedState && (
              <div
                className="text-[12px] md:text-[16px] text-nowrap underline text-custom-gray-500 cursor-pointer"
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
        <div className="bg-white text-black mx-8 pb-4 border-t border-custom-border-gray-200">
          <p className="text-custom-gray-400 text-[18px] mt-2">
            CONFIGURATIONS
          </p>
          <div className="mt-1">
            <DetailCard />
            <DetailCard />
            <div className="flex justify-end">
              <div
                className="text-[16px] text-nowrap underline text-custom-gray-400"
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
