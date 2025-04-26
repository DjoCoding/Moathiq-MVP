import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import cn from "../../../../utils/cn";
import { useState } from "react";

interface ClassProps {
  id: string;
  name: string;
  description: string;
}

const itemVariants = {
  from: {
    opacity: 0,
    y: 10,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  },
};

export default function Class({ id, name, description }: ClassProps) {
  const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);

  const handleClick = () => setShouldNavigate(true);

  if (shouldNavigate) {
    return <Navigate to={`/classes/${id}`} />;
  }

  return (
    <motion.div
      variants={itemVariants}
      onClick={handleClick}
      dir="rtl"
      className={cn(
        "cursor-pointer group bg-white hover:bg-main transition-all duration-200 shadow-card h-full rounded-xl px-4 py-6 flex flex-col gap-4 border-1 border-black/30"
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
    </motion.div>
  );
}
