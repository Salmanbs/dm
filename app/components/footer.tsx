export default function Footer() {
  return (
    <div className="bg-white pt-2">
      <div className="mx-[84px] border-b  border-custom-border-gray-200 mb-2">
        <p className="text-black text-[20px]">Quick links</p>
        <p className="text-[18px] text-custom-gray-600">About us</p>
        <p className="text-[18px] text-custom-gray-600">Contact us</p>
      </div>
      <div className="flex w-full justify-center mb-3">
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
