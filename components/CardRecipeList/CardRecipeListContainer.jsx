import CardRecipeListPresentation from "./CardRecipeListPresentation";
import recipeList from "../../mocks/recipeList.json";
import { useState, useEffect } from "react";

const CardRecipeListContainer = ({ id, description }) => {
  const MAX_ORDER_NUM = 2;
  const [list, setList] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // レシピデータをとってくる
      const data = await fetch(
        "https://forked-mykitchen-backend.herokuapp.com/recipes?category=" + id
      );
      const json = await data.json();
      const recipeList = json.slice(0, MAX_ORDER_NUM);
      setList(recipeList);

      // カテゴリ―情報をとってくる
      const categories = await fetch(
        "https://forked-mykitchen-backend.herokuapp.com/categories"
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
        title={title}
        list={list}
        description={description}
      />
    </>
  );
};

// const CardRecipeListContainer = ({ title, category, description }) => {
//   const MAX_ORDER_NUM = 2;

//   const list = recipeList.result
//     .filter((recipe) => recipe.category === category)
//     .slice(0, MAX_ORDER_NUM);

//   const [topRecipeList, setTopRecipeList] = useState(list); // ホームに表示される２このレシピを入れておく配列
//   return (
//     <>
//       <CardRecipeListPresentation
//         title={title}
//         list={topRecipeList}
//         category={category}
//         description={description}
//       />
//     </>
//   );
// };
export default CardRecipeListContainer;
