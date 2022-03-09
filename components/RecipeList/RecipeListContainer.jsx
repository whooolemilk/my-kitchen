import RecipeListPresentation from "./ResipeListPresentation";
import recipeList from "../../mocks/recipeList.json";
import { useState } from "react";
import { useRouter } from "next/router";

const RecipeListContainer = () => {
  const router = useRouter();
  const list = recipeList.result.filter(
    (recipe) => recipe.category === router.query.category
  );
  const [topRecipeList, setTopRecipeList] = useState(list); // ホームに表示される２このレシピを入れておく配列
  return (
    <RecipeListPresentation
      title={router.query.title}
      list={topRecipeList}
      description={router.query.description}
    />
  );
};

export default RecipeListContainer;
