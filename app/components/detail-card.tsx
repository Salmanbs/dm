import InfoCard from "./info-card";

export default function DetailCard() {
  return (
    <div>
      <p className="text-[20px] ">APARTMENTS</p>
      <div className="flex gap-1">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </div>
  );
}
