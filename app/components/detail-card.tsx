import InfoCard from "./info-card";

export default function DetailCard() {
  return (
    <div className="mt-3">
      <p className="text-[20px] text-custom-gray-600">APARTMENTS</p>
      <div className="flex gap-1">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
}
