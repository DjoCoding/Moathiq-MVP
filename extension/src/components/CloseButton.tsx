export default function CloseButton() {
  const handleClick = () => {
    window.close();
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 flex items-center justify-center hover:bg-[#0D0D0D66]/40 duration-300 transition-all cursor-pointer rounded-[50%]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
