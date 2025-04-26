import { useState } from "react";
import cn from "../utils/cn";

interface SwitchButtonProps {
  onActivate: () => void;
  onDesactivate: () => void;
}

export default function SwitchButton({
  onActivate,
  onDesactivate,
}: SwitchButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggle = () => setIsActive((prev) => !prev);

  const handleClick = () => {
    toggle();
    if (isActive) return onDesactivate();
    return onActivate();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "cursor-pointer shadow-sm shadow-black/30 py-[2px] px-[4px] transition-all duration-300 rounded-2xl w-[60px] h-[35px]",
        isActive ? "bg-main" : "bg-white"
      )}
    >
      <div
        className={cn(
          "transition-all duration-300 w-[30px] aspect-square rounded-[50%]",
          isActive ? "translate-x-[0%] bg-white" : "-translate-x-[80%]  bg-main"
        )}
      ></div>
    </button>
  );
}
