import { Navigate } from "react-router-dom";
import { classes, classesDetails } from "../../../constants";

import General from "./General/General";
import Groups from "./Groups/Groups";

interface MainProps {
  id: string;
}

export default function Main({ id }: MainProps) {
  const c = classes.find((c) => c.id === id);

  if (!c) {
    return <Navigate to="/not-found" />;
  }

  const details = classesDetails.filter((details) => details.class_id === c.id);

  if (details.length == 0) {
    return <Navigate to="/dashboard/classes" />;
  }

  return (
    <div dir="rtl" className="grow flex flex-col gap-10 items-center">
      <div className="w-fit flex flex-col gap-8">
        <General classItem={c} details={details} />
        <Groups details={details} />
      </div>
    </div>
  );
}
