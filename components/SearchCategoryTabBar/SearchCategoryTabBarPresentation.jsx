import { useState } from "react";
import SearchCategoryContainer from "../SearchCategory/SearchCategoryContainer";

const SearchCategoryTabBarPresentation = () => {
  const [active, setActive] = useState(true); //trueなら材料がON、falseならメニューがON
  const tabsToggle = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <div className="my-4">
      <nav className="grid grid-cols-2 text-sm bg-white">
        <button
          onClick={tabsToggle}
          className={
            active
              ? "text-ocher-300 py-3 px-6 w-auto focus:outline-none border font-medium border-ocher-200 rounded-t-lg"
              : "text-gray-600 bg-gray-200 py-3 px-6 focus:outline-none border-2 border-gray-200 rounded-t-lg"
          }
        >
          材料から探す
        </button>

        <button
          onClick={tabsToggle}
          className={
            active
              ? "text-gray-600 bg-gray-200 py-3 px-6 focus:outline-none border-2 border-gray-200 rounded-t-lg"
              : "text-ocher-300 py-3 px-6 w-auto focus:outline-none border font-medium border-ocher-200 rounded-t-lg"
          }
        >
          メニューから探す
        </button>
      </nav>
      <SearchCategoryContainer active={active} />
    </div>
  );
};

export default SearchCategoryTabBarPresentation;
