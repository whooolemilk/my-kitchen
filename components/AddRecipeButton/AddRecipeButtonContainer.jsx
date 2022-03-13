import AddRecipeButtonPresentation from "./AddRecipeButtonPresentation";

const AddRecipeButtonContainer = ({ list }) => {
  const recipe = list[0];
  const key = recipe.recipeId;
  const menuData = recipe.recipeMaterial;

  return <AddRecipeButtonPresentation recipeId={key} menuData={menuData} />;
};

export default AddRecipeButtonContainer;
