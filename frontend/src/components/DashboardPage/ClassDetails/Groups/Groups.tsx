import { ClassDetails } from "../../../../types";
import GroupDetails from "./GroupDetails";

interface GroupsProps {
  details: ClassDetails[];
}

export default function Groups({ details }: GroupsProps) {
  return (
    <div dir="rtl" className="w-full flex flex-col gap-4">
      <h1 className="text-main text-2xl font-bold">الشعب</h1>
      <table className="w-full">
        <colgroup>
          <col className="w-[150px]" />
          <col className="w-1/3" />
          <col className="w-1/3" />
          <col className="w-1/3" />
        </colgroup>
        <thead>
          <tr>
            <td className="font-bold p-2 text-main text-sm">رقم الشعبة</td>
            <td className="font-bold p-2 text-main text-sm">مستوى المحاضرة</td>
            <td className="font-bold p-2 text-main text-sm">
              مستوى التجاوب مع الأسئلة
            </td>
            <td className="font-bold p-2 text-main text-sm">
              مستوى مساهمة الطلاب في الواجبات
            </td>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => {
            return (
              <GroupDetails
                classID={detail.class_id}
                groupID={detail.group_id}
                quizWork={detail.quiz_work}
                responsivenessLevel={detail.responsiveness_level}
                sessionsLevel={detail.sessions_level}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
