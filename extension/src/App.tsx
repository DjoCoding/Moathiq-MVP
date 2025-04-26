import Header from "./components/Header";
import Permissions from "./components/Permissions";
import RedirectLink from "./components/RedirectLink";

function App() {
  return (
    <div
      dir="rtl"
      className="rounded-2xl w-[400px] px-4 pb-4 h-fit flex justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <Header />
        <Permissions />
        <RedirectLink />
      </div>
    </div>
  );
}

export default App;
