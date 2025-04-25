import { classes } from "../../constants";

import Class from "./Class";

export default function Classes() {
  return (
    <div className="w-full grow flex justify-center">
      <div className="w-fit px-4 grid grid-cols-3 gap-x-2 gap-y-6">
        {classes.map(({ name, description }, index) => {
          return (
            <Class
              name={name}
              description={description}
              reverse={index % 2 == 1}
            />
          );
        })}
      </div>
    </div>
  );
}
