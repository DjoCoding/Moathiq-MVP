import { useParams } from "react-router-dom";

import Classes from "./Classes/Classes";
import Generalities from "./Generalities/Generalities";
import ClassDetails from "../ClassDetails/Main";

type ParamsT = Record<string, string>;

export default function Main() {
  const { id } = useParams<ParamsT>();

  if (id !== undefined) {
    return <ClassDetails id={id} />;
  }

  return (
    <div className="w-full grow flex justify-center">
      <div className="w-fit flex flex-col gap-6">
        <Classes />
        <Generalities />
      </div>
    </div>
  );
}
