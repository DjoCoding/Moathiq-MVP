import { LoginPageURL } from "../constants";

export default function RedirectLink() {
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab.id !== undefined) {
        chrome.tabs.update(tab.id, {
          url: LoginPageURL,
        });
      }
    });
    return window.close();
  };

  return (
    <div className="flex w-full">
      <button
        onClick={handleClick}
        className="cursor-pointer text-lg underline text-[#0D0D0DCC]/80"
      >
        الانتقال إلى المنصة
      </button>
    </div>
  );
}
