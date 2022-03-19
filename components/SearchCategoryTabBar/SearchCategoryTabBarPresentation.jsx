import { useState } from "react";
import SearchCategoryContainer from "../SearchCategory/SearchCategoryContainer";

const SearchCategoryTabBarPresentation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (num) => {
    setActiveIndex(num);
  };
  return (
    <div className="my-4">
      <nav className="grid grid-cols-2 text-sm bg-white">
        <button
          onClick={() => handleClick(0)}
          className={
            activeIndex === 0
              ? "text-ocher-300 py-3 px-6 w-auto focus:outline-none border font-medium border-ocher-200 rounded-t-lg"
              : "text-gray-600 bg-gray-200 py-3 px-6 focus:outline-none border-2 border-gray-200 rounded-t-lg"
          }
        >
          材料から探す
        </button>

        <button
          onClick={() => handleClick(1)}
          className={
            activeIndex === 1
              ? "text-ocher-300 py-3 px-6 w-auto focus:outline-none border font-medium border-ocher-200 rounded-t-lg"
              : "text-gray-600 bg-gray-200 py-3 px-6 focus:outline-none border-2 border-gray-200 rounded-t-lg"
          }
        >
          メニューから探す
        </button>
      </nav>
      <SearchCategoryContainer activeIndex={activeIndex} />
    </div>
  );
};

export default SearchCategoryTabBarPresentation;
