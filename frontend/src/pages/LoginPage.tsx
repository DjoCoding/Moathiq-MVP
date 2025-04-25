import loginPageBackgrondImage from "../public/login-page-background.png";

import LoginForm from "../components/LoginPage/LoginForm";
import Header from "../components/LoginPage/Header";

export default function LoginPage() {
  return (
    <div className="flex  justify-center items-center w-screen h-screen border">
      <div className="w-screen h-screen z-1 absolute inset-0">
        <img src={loginPageBackgrondImage} className="w-full h-full" />
      </div>
      <div className="shadow-form rounded-xl z-999 px-5 py-10 relative bg-white">
        <Header />
        <LoginForm />
      </div>
    </div>
  );
}
