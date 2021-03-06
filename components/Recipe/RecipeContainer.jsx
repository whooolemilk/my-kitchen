import RecipePresentation from "./RecipePresentation";
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
        process.env.NEXT_PUBLIC_API_URL + "/recipes/" + router.query.recipeId
      );
      const json = await data.json();
      setRecipe(json);
    };

    fetchData().catch(console.error);
  }, [router.query.recipeId]);
  return <RecipePresentation recipe={recipe} />;
};

export default RecipeContainer;
