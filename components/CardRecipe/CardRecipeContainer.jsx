import CardRecipeListPresentation from "./CardRecipeListPresentation";
import recipeList from "../../mocks/recipeList.json";
import { useState } from "react";

const CardRecipeListContainer = ({ category, title }) => {
  const MAX_ORDER_NUM = 2;

  const list = recipeList.result
    .filter((recipe) => recipe.category === category)
    .slice(0, MAX_ORDER_NUM);

  const [topRecipeList, setTopRecipeList] = useState(list); // ホームに表示される２このレシピを入れておく配列
  return (
    <div>
      <CardRecipeListPresentation title={title} list={topRecipeList} />
    </div>
  );
};

export default CardRecipeListContainer;
