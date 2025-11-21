import { Outlet } from "react-router";
import background from "../assets/background.png";
import logo from "../assets/complete-logo.svg";

export function AuthLayout() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center pt-8 flex justify-end sm:pt-3"
      style={{ backgroundImage: `url(${background})` }}
    >
      <main className="w-screen h-full bg-gray-50 rounded-tl-[20px] rounded-tr-[20px] py-8 px-6 flex flex-col items-center sm:w-[680px] sm:py-12 sm:rounded-tr-none">
        <img
          src={logo}
          alt="Logo HelpDesk"
          className="w-[157px] mb-6 sm:mb-8"
        />

        <Outlet />
      </main>
    </div>
  );
}
