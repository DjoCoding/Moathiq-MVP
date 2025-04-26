import { AnimatedNumber } from "../../shared/AnimatedNumber";

interface StatisticsProps {
  groupID: string;
  classID: string;
}

function InteractionWithTeacher() {
  return (
    <div className="flex-1 flex flex-col gap-2 px-4">
      <h2 className="w-fit font-bold text-main text-xl">مؤشرات تفاعل الطلبة</h2>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">نسبة تفاعل المحاضر</p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            متوسط عدد الأسئلة المطروحة
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            متوسط تأخير بدء الجلسات
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            نسبة الالتزام بوقت الحصة
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">معدل وضوح الشرح</p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InteractionWithStudents() {
  return (
    <div className="flex-1 flex flex-col gap-2 px-4">
      <h2 className="font-bold text-main text-xl">مؤشرات تفاعل الطلبة</h2>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            نسبة التفاعل العام للطلبة
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            نسبة الحضور في الوقت المحدد
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            معدل تجاوب الطلبة مع المحاضر
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            معدل استخدام الدردشة والتفاعلات
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            نسبة المشاركة في التصويتات
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            متوسط الدقائق النشطة لكل طالب
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsistencyStatistics() {
  return (
    <div className="flex-1 flex flex-col gap-2 px-4">
      <h2 className="font-bold text-main text-xl">مؤشرات تفاعل الطلبة</h2>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            نسبة إنجاز الواجبات في الوقت المحدد
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            نسبة التكاليف المتأخرة
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-main font-semibold">
            نسبة الإجابات الصحيحة
          </p>
          <div className="px-2 bg-main rounded">
            <AnimatedNumber from={0} to={67} className="font-bold text-white" />
            <span className="text-white font-bold">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Statistics({ classID, groupID }: StatisticsProps) {
  // just to bypass the vercel error
  console.log(classID + groupID);
  
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl text-main">الاحصائيات</h1>
      <div className="w-full flex">
        <InteractionWithStudents />
        <div className="border border-black/25"></div>
        <InteractionWithTeacher />
        <div className="border border-black/25"></div>
        <ConsistencyStatistics />
      </div>
    </div>
  );
}
