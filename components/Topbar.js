import AccountMenu from "./AccountMenu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Topbar = () => {
  return (
    <div className="w-[100vw] fixed h-[60px] px-4 flex flex-row items-center justify-between">
      <label htmlFor="my-drawer" className="md:hidden">
        <HiOutlineMenuAlt2
          htmlFor="my-drawer"
          className="w-[32px] h-[32px] cursor-pointer drawer-button "
        ></HiOutlineMenuAlt2>
      </label>
      <div className="hidden md:block">
        <h1 className="text-2xl font-bold">Track My Workout</h1>
      </div>
      <AccountMenu />
    </div>
  );
};

export default Topbar;
