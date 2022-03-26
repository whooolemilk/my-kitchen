import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import ResultRecipeListPresentation from "./ResultRecipeListPresentation";

const ResultRecipeListContainer = () => {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          "/recipes?keyword=" +
          router.query.keyword
      );
      const json = await data.json();
      setList(json);
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
