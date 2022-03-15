import AddRecipeButtonPresentation from "./AddRecipeButtonPresentation";
import { useState } from "react";

const AddRecipeButtonContainer = ({ list }) => {
  const recipe = list[0];
  const recipeId = recipe.recipeId;
  const menuData = recipe.recipeMaterial;

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
    <AddRecipeButtonPresentation flag={flag} onClick={() => handleClick()} />
  );
};

export default AddRecipeButtonContainer;
