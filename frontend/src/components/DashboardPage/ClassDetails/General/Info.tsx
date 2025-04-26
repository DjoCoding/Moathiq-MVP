interface InfoProps {
  name: string;
  description: string;
}

export default function Info({ name, description }: InfoProps) {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <h1 className="text-main text-2xl font-bold">{name}</h1>
      <p className="text-[#000000] text-sm">{description}</p>
    </div>
  );
}
