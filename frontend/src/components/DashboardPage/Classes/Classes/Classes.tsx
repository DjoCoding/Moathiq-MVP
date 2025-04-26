import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { classes } from "../../../../constants";

import Class from "./Class";
import ClassDetails from "../../ClassDetails/Main";

type ParamsT = Record<string, string>;

const containerVariants = {
  from: {},
  to: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Classes() {
  const { id } = useParams<ParamsT>();

  if (id !== undefined) {
    return <ClassDetails id={id} />;
  }

  return (
    <motion.div
      initial="from"
      animate="to"
      variants={containerVariants}
      dir="rtl"
      className="w-fit grid grid-cols-[repeat(1,_350px)] lg:grid-cols-[repeat(3,_300px)] 2xl:grid-cols-[repeat(4,_300px)] gap-x-2 gap-y-6"
    >
      {classes.map(({ id, name, description }) => {
        return <Class key={id} id={id} name={name} description={description} />;
      })}
    </motion.div>
  );
}
