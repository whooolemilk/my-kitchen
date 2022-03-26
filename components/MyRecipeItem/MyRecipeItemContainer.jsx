import MyRecipeItemPresentation from "./MyRecipeItemPresentation";
import { useState } from "react";

const MyRecipeItemContainer = ({ recipe }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <MyRecipeItemPresentation
      recipe={recipe}
      isVisible={isVisible}
      onClick={handleClick}
    />
  );
};

export default MyRecipeItemContainer;
