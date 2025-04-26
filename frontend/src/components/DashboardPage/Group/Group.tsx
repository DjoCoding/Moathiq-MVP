import { useParams } from "react-router-dom";
import General from "./General";
import Statistics from "./Statistics";

export default function Group() {
  const { groupID, classID } = useParams();

  return (
    <div dir="rtl" className="grow flex flex-col gap-4">
      <div className="mx-auto w-[800px] grow flex flex-col gap-8">
        <General groupID={groupID as string} />
        <Statistics groupID={groupID as string} classID={classID as string} />
      </div>
    </div>
  );
}
