import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface AnimatedNumberProps {
  from: number;
  to: number;
  duration?: number;
  decimals?: number;
  className: string;
}

export const AnimatedNumber = ({
  from,
  to,
  duration = 1,
  decimals = 0,
  className = "",
}: AnimatedNumberProps) => {
  const motionValue = useMotionValue(from);
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    const controls = animate(motionValue, to, {
      duration,
      ease: "easeInOut",
    });

    motionValue.on("change", (latest) => {
      setCurrent(latest);
    });

    return controls.stop;
  }, [to, duration, motionValue]);


  return <motion.span className={className}>{current.toFixed(decimals)}</motion.span>;
};
