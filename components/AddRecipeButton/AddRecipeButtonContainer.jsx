import AddRecipeButtonPresentation from "./AddRecipeButtonPresentation";
import { useState } from "react/cjs/react.production.min";

const AddRecipeButtonContainer = ({ list }) => {
  const recipe = list[0];
  const key = recipe.recipeId;
  const menuData = recipe.recipeMaterial;

  // const [flag, setFlag] = useState(false);
  // const submit = () => {
  //   if (!flag) {
  //     localStorage.setItem(recipeId, JSON.stringify(menuData));
  //     setFlag(true);
  //   } else {
  //     setFlag(false);
  //     localStorage.removeItem(recipeId);
  //   }
  // };

  // const handleClick = () => {
  //   submit();
  // };

  return (
    <AddRecipeButtonPresentation
      recipeId={key}
      menuData={menuData}
      // flag={flag}
      // onClick={() => handleClick()}
    />
  );
};

export default AddRecipeButtonContainer;
