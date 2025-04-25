import { useState } from "react";
import { Link } from "react-router-dom";

interface LoginFormDataT {
  username: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginFormDataT>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {};

  return (
    <form className="mt-10 flex flex-col gap-4" dir="rtl">
      <input
        type="text"
        name="username"
        placeholder="رقم المستخدم"
        className="font-[500] focus:border-2 focus:border-black/50 outline-0 border-2 border-black/30 px-2 py-2 rounded-xl"
        onChange={handleChange}
        value={formData.username}
      />
      <input
        type="password"
        name="password"
        placeholder="كلمة السرّ"
        className="font-[500] focus:border-2 focus:border-black/50 outline-0 border-2 border-black/30 px-2 py-2 rounded-xl"
        onChange={handleChange}
        value={formData.password}
      />
      <div className="w-full flex justify-end">
        <button
          type="button"
          className="px-4 py-2 w-fit rounded-xl bg-main text-white hover:scale-105 focus:scale-95 duration-300 cursor-pointer"
          onClick={handleClick}
        >
          تسجيل الدخول
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Link className="font-bold text-sm text-black/70 underline" to="/reset-password">
          نسيت كلمة السر ؟
        </Link>
      </div>
    </form>
  );
}
