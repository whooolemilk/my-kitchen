import RecipePresentation from "./RecipePresentation";
import recipeList from "../../mocks/recipeList.json";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RecipeContainer = () => {
  // recipeId
  const router = useRouter();
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // レシピデータをとってくる
      const data = await fetch(
        "https://forked-mykitchen-backend.herokuapp.com/recipes/" +
          router.query.recipeId
      );
      const json = await data.json();
      setList(json);
      console.log(json);
    };

    fetchData().catch(console.error);
  }, [router.query.recipeId]);
  return <RecipePresentation list={list} />;
};

export default RecipeContainer;
