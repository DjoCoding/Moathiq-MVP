import CloseButton from "./CloseButton";
import Logo from "./Logo";

export default function Header() {
  return (
    <header dir="ltr" className="w-full flex justify-between items-center">
      <Logo width={100} height={100} />
      <CloseButton />
    </header>
  );
}
