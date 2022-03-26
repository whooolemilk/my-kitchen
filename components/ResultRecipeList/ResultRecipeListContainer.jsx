import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import ResultRecipeListPresentation from "./ResultRecipeListPresentation";

const ResultRecipeListContainer = () => {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (router.query.keyword) {
        const data = await fetch(
          process.env.NEXT_PUBLIC_API_URL +
            "/recipes?keyword=" +
            router.query.keyword
        );

        const json = await data.json();
        setList(json);
      } else if (router.query.categoryId) {
        const data = await fetch(
          process.env.NEXT_PUBLIC_API_URL +
            "/recipes?category=" +
            router.query.categoryId
        );

        const json = await data.json();
        setList(json);

        // カテゴリ―情報をとってくる
        const categories = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/categories"
        );
        const categoriesJson = await categories.json();

        const filteredCategory = categoriesJson.filter(
          (category) => category.id == router.query.categoryId
        );

        setCategory(filteredCategory[0].name);
      }
    };
    fetchData().catch(console.error);
  }, [router.query.keyword]);

  return (
    <>
      <ResultRecipeListPresentation
        list={list}
        keyword={router.query.keyword}
        category={category}
      />
    </>
  );
};

export default ResultRecipeListContainer;
