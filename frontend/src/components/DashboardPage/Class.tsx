import cn from "../../utils/cn";

interface ClassProps {
  name: string;
  description: string;
  reverse: boolean;
}

export default function Class({ name, description, reverse }: ClassProps) {
  return (
    <div
      dir="rtl"
      className={cn(
        "shadow-card h-fit rounded-xl px-2 py-6 flex flex-col gap-4 border-1 border-black/30",
        reverse ? "bg-white" : "bg-main"
      )}
    >
      <h1
        className={cn(
          "text-[20px] lg:text-[24px]",
          reverse ? "text-main" : "text-white"
        )}
      >
        {name}
      </h1>
      <p
        className={cn(
          "text-[12px] lg:text-[16px]",
          reverse ? "text-black" : "text-white"
        )}
      >
        {description}
      </p>
    </div>
  );
}
