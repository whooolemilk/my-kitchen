import CardRecipeListPresentation from "./CardRecipeListPresentation";
import { useState, useEffect } from "react";

const CardRecipeListContainer = ({ id, description }) => {
  const MAX_ORDER_NUM = 2;
  const [list, setList] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // レシピデータをとってくる
      const data = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/recipes?category=" + id
      );
      const json = await data.json();
      const recipeList = json.slice(0, MAX_ORDER_NUM);
      setList(recipeList);

      // カテゴリ―情報をとってくる
      const categories = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/categories"
      );
      const categoriesJson = await categories.json();
      const filteredCategory = categoriesJson.filter(
        (category) => category.id === id
      );
      setTitle(filteredCategory[0].name);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <CardRecipeListPresentation
        categoryId={id}
        title={title}
        list={list}
        description={description}
      />
    </>
  );
};

export default CardRecipeListContainer;
