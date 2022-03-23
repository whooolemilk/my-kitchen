import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import ResultRecipeListPresentation from "./ResultRecipeListPresentation";

const ResultRecipeListContainer = () => {
  const router = useRouter();
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://forked-mykitchen-backend.herokuapp.com/recipes?keyword=" +
          router.query.keyword
      );
      const json = await data.json();
      setList(json);
      console.log(json);
    };
    fetchData().catch(console.error);
  }, [router.query.keyword]);

  return (
    <>
      <ResultRecipeListPresentation
        list={list}
        keyword={router.query.keyword}
      />
    </>
  );
};

export default ResultRecipeListContainer;
