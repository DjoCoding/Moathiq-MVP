import { navBarLinks } from "../../../constants";
import { LinkT } from "../../../types";
import MoathiqMainSVG from "../../../shared/MoathiqMainSVG";
import NavbarLink from "./NavbarLink";
import AccountButton from "./AccountButton/AccountButton";

interface NavbarProps {
  linkSelected: LinkT;
  setLink: (link: LinkT) => void;
}

export default function Navbar({ setLink, linkSelected }: NavbarProps) {
  return (
    <header className="bg-main w-screen">
      <div className="m-auto container px-4 flex items-center justify-between">
        <div className="flex justify-center items-center gap-8">
          <AccountButton />
          <button className="cursor-pointer text-white font-bold">اللغة</button>
        </div>
        <nav dir="rtl" className="flex items-center justify-center">
          {navBarLinks.map((link) => (
            <NavbarLink
              name={link.name as LinkT}
              to={link.to}
              isME={linkSelected == link.name}
              setLink={setLink}
            />
          ))}
        </nav>
        <MoathiqMainSVG color="#f2f2f2" width={150} height={50} />
      </div>
    </header>
  );
}
