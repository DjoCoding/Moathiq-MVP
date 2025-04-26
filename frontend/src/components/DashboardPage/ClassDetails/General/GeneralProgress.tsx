import Progress from "../../../shared/Progress";

interface GeneralProgressProps {
  average: number;
}

export default function GeneralProgress({ average }: GeneralProgressProps) {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <h1 className="text-main text-2xl font-bold">مستوى المحاضرات العام</h1>
      <Progress value={Math.floor(average)} className="text-main font-bold" />
    </div>
  );
}
