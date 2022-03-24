import RecipeListPresentation from "./RecipeListPresentation";
import recipeList from "../../mocks/recipeList.json";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RecipeListContainer = () => {
  //categoryId description
  const router = useRouter();
  const [list, setList] = useState([]);
  const [title, setTitle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // レシピデータをとってくる
      const data = await fetch(
        "https://forked-mykitchen-backend.herokuapp.com/recipes?category=" +
          router.query.categoryId
      );
      const json = await data.json();
      setList(json);

      // カテゴリ―情報をとってくる
      const categories = await fetch(
        "https://forked-mykitchen-backend.herokuapp.com/categories"
      );
      const categoriesJson = await categories.json();
      const filteredCategory = categoriesJson.filter(
        (category) => category.id == router.query.categoryId
      );
      setTitle(filteredCategory[0].name);
    };

    fetchData().catch(console.error);
  }, [router.query.categoryId]);
  console.log(title);
  return (
    <RecipeListPresentation
      title={title}
      list={list}
      description={router.query.description}
    />
  );
};

export default RecipeListContainer;
