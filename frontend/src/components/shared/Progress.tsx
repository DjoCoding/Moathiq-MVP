import { motion } from "framer-motion";
import cn from "../../utils/cn";
import { AnimatedNumber } from "./AnimatedNumber";

interface ProgressProps {
  value: number;
  className: string;
}

function generateProgressVariants(value: number) {
  return {
    from: {
      width: 0,
    },
    to: {
      width: `${value}%`,
      transition: {
        duration: value / 100,
      },
    },
  };
}

export default function Progress({ value, className = "" }: ProgressProps) {
  const variants = generateProgressVariants(value);

  return (
    <div className="w-full flex gap-2 items-center">
      <div className="relative grow rounded-xl border-2 border-main h-[16px]">
        <motion.div
          initial="from"
          animate="to"
          variants={variants}
          className={cn("rounded-xl absolute right-0 bg-main top-0 bottom-0")}
        ></motion.div>
      </div>
      <span>
        <AnimatedNumber
          className={className}
          from={0}
          to={value}
          duration={value / 100}
        />
        <span className={className}>%</span>
      </span>
    </div>
  );
}
