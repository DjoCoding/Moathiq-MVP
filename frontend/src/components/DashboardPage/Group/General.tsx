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
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <p className="text-main text-sm">عدد الطلاب المنتظمين: 25</p>
          <p className="text-main text-sm">متوسط الغياب في الأسبوع: 4</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h1 className="text-2xl text-main font-bold">مستوى المحاضرة</h1>
        <Progress value={67} className="text-main font-bold" />
      </div>
    </div>
  );
}
