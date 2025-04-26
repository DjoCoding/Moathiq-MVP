import Permission from "./Permission";

export default function Permissions() {
  const activeVideo = () => {
    navigator.mediaDevices
      .getDisplayMedia({ video: true, audio: false })
      .then(() => {
        console.log("video access granted!");
      })
      .catch((err) => {
        console.error("video access denied:", err);
      });
  };
  const disactiveVideo = () => {};

  const activeAudio = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => {
        console.log("Microphone access granted!");
      })
      .catch((err) => {
        console.error("Microphone access denied:", err);
      });
  };
  const disactiveAudio = () => {};

  return (
    <div className="shadow-permissions-container w-fit rounded-2xl px-4 py-4 flex flex-col gap-4">
      <Permission
        text="السماح بالوصول للفيديو"
        handlers={{
          onActivate: activeVideo,
          onDisactivate: disactiveVideo,
        }}
      />
      <Permission
        text="السماح بالوصول للصوت"
        handlers={{
          onActivate: activeAudio,
          onDisactivate: disactiveAudio,
        }}
      />
    </div>
  );
}
