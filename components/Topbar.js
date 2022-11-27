import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Topbar = () => {
  return (
    <div className="fixed h-[60px]">
      <label htmlFor="my-drawer" className="lg:hidden">
        <HiOutlineMenuAlt2
          htmlFor="my-drawer"
          className="w-[32px] h-[32px] cursor-pointer drawer-button "
        ></HiOutlineMenuAlt2>
      </label>
      <div className="hidden lg:block">
        <h1 className="text-2xl font-bold">Track My Workout</h1>
      </div>
    </div>
  );
};

export default Topbar;
