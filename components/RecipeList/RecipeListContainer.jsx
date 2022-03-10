import RecipeListPresentation from "./ResipeListPresentation";
import recipeList from "../../mocks/recipeList.json";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RecipeListContainer = () => {
  const router = useRouter();
  const [list, setList] = useState([]);
  useEffect(() => {
    const list = recipeList.result.filter(
      (recipe) => recipe.category === router.query.category
    );
    setList(list);
  }, [router.query.category]);
  return (
    <RecipeListPresentation
      title={router.query.title}
      list={list}
      description={router.query.description}
    />
  );
};

export default RecipeListContainer;
