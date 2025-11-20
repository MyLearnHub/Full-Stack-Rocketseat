import { Outlet } from "react-router";
import background from "../assets/background.png";
import logo from "../assets/complete-logo.svg";

export function AuthLayout() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center pt-3 flex justify-end"
      style={{ backgroundImage: `url(${background})` }}
    >
      <main className="w-[680px] h-full bg-gray-50 rounded-tl-[20px] py-12 px-[140px] flex flex-col items-center">
        <img src={logo} alt="Logo HelpDesk" className="w-[157px] mb-8" />

        <Outlet />
      </main>
    </div>
  );
}
