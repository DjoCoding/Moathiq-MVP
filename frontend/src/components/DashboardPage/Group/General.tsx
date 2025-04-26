import { AnimatedNumber } from "../../shared/AnimatedNumber";
import Progress from "../../shared/Progress";

interface GeneralProps {
  groupID: string;
}

export default function General({ groupID }: GeneralProps) {
  return (
    <div
      dir="rtl"
      className="rounded-xl mx-auto shadow-normal flex w-full px-4 py-4 gap-4"
    >
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-2xl text-main font-bold">الشعبة {groupID}</h1>
        <div className="flex flex-col lg:flex-row gap-1 items-center">
          <p className="text-main text-sm font-semibold">
            عدد الطلاب المنتظمين:
            <AnimatedNumber from={0} to={24} className="" />
          </p>
          <p className="text-main text-sm font-semibold">
            متوسط الغياب في الأسبوع:
            <AnimatedNumber from={0} to={4} className="" />
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-2xl text-main font-bold">مستوى المحاضرة</h1>
        <Progress value={67} className="text-main font-bold" />
      </div>
    </div>
  );
}
