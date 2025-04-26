import { useState } from "react";
import Progress from "../../../shared/Progress";
import { Navigate } from "react-router-dom";

interface GroupDetailsProps {
  classID: string;
  groupID: string;
  sessionsLevel: number;
  responsivenessLevel: number;
  quizWork: number;
}

export default function GroupDetails({
  classID,
  groupID,
  sessionsLevel,
  responsivenessLevel,
  quizWork,
}: GroupDetailsProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  if (isClicked) {
    return <Navigate to={`/groups/${groupID}/${classID}`} />;
  }

  return (
    <tr>
      <td className="p-3">
        <button
          onClick={() => setIsClicked(true)}
          className="cursor-pointer p-1 border-2 border-main group hover:bg-main duration-300 transition-all rounded"
        >
          <p className="text-sm text-black font-[600] group-hover:text-white transition-all duration-300">
            {groupID}
          </p>
        </button>
      </td>
      <td className="py-3 px-2">
        <Progress value={sessionsLevel} className="text-main font-bold" />
      </td>
      <td className="py-3 px-2">
        <Progress value={responsivenessLevel} className="text-main font-bold" />
      </td>
      <td className="py-3 px-2">
        <Progress value={quizWork} className="text-main font-bold" />
      </td>
    </tr>
  );
}
