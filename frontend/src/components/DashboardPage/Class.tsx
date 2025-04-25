import cn from "../../utils/cn";

interface ClassProps {
  name: string;
  description: string;
}

export default function Class({ name, description }: ClassProps) {
  return (
    <div
      dir="rtl"
      className={cn(
        "group bg-white hover:bg-main transition-all duration-200 cursor-pointer shadow-card h-fit rounded-xl px-4 py-6 flex flex-col gap-4 border-1 border-black/30"
      )}
    >
      <h1
        className={cn(
          "text-main group-hover:text-white transition-all duration-200 font-bold text-[28px] lg:text-[36px]"
        )}
      >
        {name}
      </h1>
      <p
        className={cn(
          "text-black group-hover:text-white transition-all duration-200 font-[600] text-[14px]"
        )}
      >
        {description}
      </p>
    </div>
  );
}
