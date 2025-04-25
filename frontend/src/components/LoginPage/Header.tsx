import moathiqSVG from "../../public/moathiq.svg";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={moathiqSVG} className="w-[200px]" />
      <h2 className="font-bold text-2xl">
        مرحبا بك في <span className="text-main">نظام موثق</span>
      </h2>
    </div>
  );
}
