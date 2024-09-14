export default function Footer() {
  return (
    <div className="bg-white pt-2">
      <div className="mx-[84px] border-b  border-red-400 mb-2">
        <p className="text-black text-[20px]">Quick links</p>
        <p className="text-[18px] text-black">About us</p>
        <p className="text-[18px] text-black">Contact us</p>
      </div>
      <div className="flex w-full justify-center mb-2">
        <p className="text-black">
          Let us know what you think!{" "}
          <span className="underline">Share feedback</span>
        </p>
      </div>
    </div>
  );
}
