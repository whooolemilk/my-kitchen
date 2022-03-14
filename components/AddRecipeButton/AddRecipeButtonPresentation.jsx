import { useState } from "react";
import IconInvalidSpoonFork from "../Icons/IconInvalidSpoonFork";
import IconValidSpoonFork from "../Icons/IconValidSpoonFork copy";

const AddRecipeButtonPresentation = ({ recipeId, menuData }) => {
  const [flag, setFlag] = useState(false);
  const submit = () => {
    if (!flag) {
      localStorage.setItem(recipeId, JSON.stringify(menuData));
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.removeItem(recipeId);
    }
  };

  const handleClick = () => {
    submit();
  };
  return (
    <>
      {!flag ? (
        <button
          name="query"
          // onClick={() => onClick}
          onClick={submit}
          className="fixed bottom-24 right-4 w-20 h-20 text-center rounded-full border-gray-400 border-2 bg-white"
        >
          <IconInvalidSpoonFork />
          <p className="text-xs font-bold text-gray-400"> たべる</p>
        </button>
      ) : (
        <button
          name="query"
          // onClick={() => onClick}
          onClick={submit}
          className="fixed bottom-24 right-4 w-20 h-20 text-center rounded-full border-orange-400 border-2 bg-white"
        >
          <IconValidSpoonFork />
          <p className="text-xs font-bold text-orange-400"> たべる</p>
        </button>
      )}
    </>
  );
};

export default AddRecipeButtonPresentation;
