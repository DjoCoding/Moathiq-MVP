import Info from "./Info";
import GeneralProgress from "./GeneralProgress";
import { ClassDetails, ClassItem } from "../../../../types";

interface GeneralProps {
  details: ClassDetails[];
}

interface GeneralProps {
  details: ClassDetails[];
  classItem: ClassItem;
}

export default function General({ details, classItem }: GeneralProps) {
  const average =
    details.reduce((acc, curr) => acc + curr["sessions_level"], 0) /
    details.length;

  return (
    <div className="rounded-xl shadow-normal flex flex-row gap-4 w-fit px-4 py-4">
      <Info name={classItem.name} description={classItem.description} />
      <GeneralProgress average={average} />
    </div>
  );
}
