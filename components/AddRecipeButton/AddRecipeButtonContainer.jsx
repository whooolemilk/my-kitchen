import AddRecipeButtonPresentation from "./AddRecipeButtonPresentation";
import { useState } from "react";

const AddRecipeButtonContainer = ({ recipe }) => {
  const recipeId = recipe.id;
  const menuData = recipe.materials;

  const [wasRegistered, setWasRegistered] = useState(false);
  const submit = () => {
    if (wasRegistered) {
      setWasRegistered(false);
      localStorage.removeItem(recipeId);
    } else {
      localStorage.setItem(recipeId, JSON.stringify(menuData));
      setWasRegistered(true);
    }
  };

  const handleClick = () => {
    submit();
  };

  return (
    <AddRecipeButtonPresentation
      wasRegistered={wasRegistered}
      onClick={() => handleClick()}
    />
  );
};

export default AddRecipeButtonContainer;
