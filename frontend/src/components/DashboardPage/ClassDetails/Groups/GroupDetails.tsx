import Progress from "../../../shared/Progress";

interface GroupDetailsProps {
  groupID: string;
  sessionsLevel: number;
  responsivenessLevel: number;
  quizWork: number;
}

export default function GroupDetails({
  groupID,
  sessionsLevel,
  responsivenessLevel,
  quizWork,
}: GroupDetailsProps) {
  return (
    <tr>
      <td className="p-3">
        <p className="underline text-sm text-black font-[600]">{groupID}</p>
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
