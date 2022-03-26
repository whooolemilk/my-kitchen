import { useState } from "react";
import { useEffect } from "react";
import MenuPresentation from "./MenuPresentation";

const MenuContainer = () => {
  const [recipeList, setRecipeList] = useState([]);
  let idList = [];
  let keyList = [];

  useEffect(() => {
    const length = localStorage.length;
    for (let i = 0; i < length; i++) {
      if (!isNaN(localStorage.key(i))) {
        keyList.push(localStorage.key(i));
      }
    }

    const fetchData = async () => {
      for (let i = 0; i < keyList.length; i++) {
        const data = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/recipes/" + keyList[i]
        );
        const json = await data.json();
        idList.push(json);
      }
      setRecipeList(idList);
    };

    fetchData().catch(console.error);
  }, [keyList.length]);
  return <MenuPresentation recipeList={recipeList} />;
};

export default MenuContainer;
