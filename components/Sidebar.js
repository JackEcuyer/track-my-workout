import Topbar from "./Topbar";
import { IoAddCircle } from "react-icons/io5";
import { BsJournalBookmarkFill } from "react-icons/bs";

const Sidebar = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content mt-[60px] p-4">
        {children}
      </div>
      <div className="drawer-side md:mt-[60px]">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 bg-base-100 text-base-content">
          <li>
            <a>
              <IoAddCircle className="w-9 h-9" />
              <h2 className="text-xl font-semibold">Add a Workout</h2>
            </a>
          </li>
          <li>
            <a>
              <BsJournalBookmarkFill className="w-9 h-9" />
              <h2 className="text-xl font-semibold">My Workouts</h2>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
