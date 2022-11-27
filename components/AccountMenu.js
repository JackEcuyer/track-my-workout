const AccountMenu = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="m-1 btn">
        Click
      </label>
      <ul
        tabIndex={0}
        className="z-50 p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default AccountMenu;
