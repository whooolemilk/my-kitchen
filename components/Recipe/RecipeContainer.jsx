import RecipePresentation from "./RecipePresentation";
import recipeList from "../../mocks/recipeList.json";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RecipeContainer = () => {
  const router = useRouter();
  const [list, setList] = useState([]);
  useEffect(() => {
    const list = recipeList.result.filter(
      (recipe) => recipe.recipeTitle === router.query.recipeTitle
    );
    setList(list);
  }, [router.query.recipeTitle]);
  return <RecipePresentation list={list} />;
};

export default RecipeContainer;
