export default function Footer() {
  return (
    <div className="bg-white pt-2">
      <div className="flex flex-col gap-2 mx-4 md:mx-[84px] border-b  border-custom-border-gray-200 mb-3 md:mb-2">
        <p className="text-[16px] text-black md:text-[20px] mb-1">
          Quick links
        </p>
        <p className="text-[14px] md:text-[18px] text-custom-gray-600">
          About us
        </p>
        <p className="text-[14px] md:text-[18px] text-custom-gray-600">
          Contact us
        </p>
      </div>
      <div className="flex w-full justify-left md:justify-center ml-4 md:ml-0 pb-3">
        <p className="text-custom-gray-500">
          Let us know what you think!{" "}
          <span className="underline text-custom-black-100">
            Share feedback
          </span>
        </p>
      </div>
    </div>
  );
}
