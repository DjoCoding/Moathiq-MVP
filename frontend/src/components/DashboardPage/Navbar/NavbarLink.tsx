import { Link } from "react-router-dom";
import cn from "../../../utils/cn";
import { LinkT } from "../../../types";

interface NavbarLinkProps {
  name: LinkT;
  to: string;
  isME: boolean;
  setLink: (link: LinkT) => void;
}

export default function NavbarLink({
  isME,
  name,
  to,
  setLink,
}: NavbarLinkProps) {
  const handleClick = () => {
    return setLink(name);
  };
  return (
    <Link
      className={cn(
        "text-center w-[90px] px-2 py-6 hover:bg-white hover:text-main duration-200 transition-all",
        isME ? "text-main bg-white" : "text-white bg-main"
      )}
      to={to}
      onClick={handleClick}
    >
      {name}
    </Link>
  );
}
