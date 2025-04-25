import { classes } from "../../constants";

import Class from "./Class";

export default function Classes() {
  return (
    <div className="w-full grow flex justify-center">
      <div className="w-fit px-4 grid grid-cols-[repeat(1,_350px)] lg:grid-cols-[repeat(3,_300px)] xl:grid-cols-[repeat(4,_350px)] 2xl:grid-cols-[repeat(5,_350px)] gap-x-2 gap-y-6">
        {classes.map(({ name, description }) => {
          return (
            <Class
              name={name}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}
