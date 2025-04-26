import SwitchButton from "./SwitchButton";

interface PermissionProps {
  text: string;
  handlers: {
    onActivate: () => void;
    onDisactivate: () => void;
  };
}

export default function Permission({ text, handlers }: PermissionProps) {
  return (
    <div dir="rtl" className="flex items-center justify-between gap-4">
      <p className="text-[22px] text-black font-[600]">{text}</p>
      <SwitchButton
        onActivate={handlers.onActivate}
        onDesactivate={handlers.onDisactivate}
      />
    </div>
  );
}
