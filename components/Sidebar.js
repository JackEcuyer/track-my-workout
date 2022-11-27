import Topbar from "./Topbar";

const Sidebar = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content mt-[60px]">Main content</div>
      <div className="drawer-side lg:mt-[60px]">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 menu w-80 bg-base-100 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
