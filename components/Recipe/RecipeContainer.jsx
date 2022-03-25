import RecipePresentation from "./RecipePresentation";
import recipeList from "../../mocks/recipeList.json";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RecipeContainer = () => {
  // recipeId
  const router = useRouter();
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    const fetchData = async () => {
      // レシピデータをとってくる
      const data = await fetch(
        "https://forked-mykitchen-backend.herokuapp.com/recipes/" +
          router.query.recipeId
      );
      const json = await data.json();
      setRecipe(json);
    };

    fetchData().catch(console.error);
  }, [router.query.recipeId]);
  console.log(recipe);
  return <RecipePresentation recipe={recipe} />;
};

export default RecipeContainer;
