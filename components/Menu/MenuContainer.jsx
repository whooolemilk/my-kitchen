import { useState } from "react";
import { useEffect } from "react";
import MenuPresentation from "./MenuPresentation";

const MenuContainer = () => {
  const [list, setList] = useState([]);
  const [keysList, setKeysList] = useState([]);
  const [materialsList, setMaterialsList] = useState([]);

  useEffect(() => {
    const keyList = [];
    const materialList = [];
    const idList = [];

    const length = localStorage.length;
    for (let i = 0; i < length; i++) {
      if (!isNaN(localStorage.key(i))) {
        keyList.push(localStorage.key(i));
      }
    }
    setKeysList(keyList);

    const keyListlength = keyList.length;
    for (let i = 0; i < keyListlength; i++) {
      materialList.push(localStorage.getItem(String(keyList[i])));
    }
    setMaterialsList(materialList);

    // const fetchData = async () => {
    //   // レシピデータをとってくる
    //   // keyListはレシピのidが複数入ってるリスト
    //   for (let i = 0; i < keyListlength; i++) {
    //     const data = await fetch(
    //       "https://forked-mykitchen-backend.herokuapp.com/recipes?category=" +
    //         keyList[i]
    //     );
    //     const json = await data.json();
    //     console.log(data); // response
    //     console.log(json); // 空

    //     //idList.push(json);
    //   }

    //   //setList(idList);
    //   //console.log(idList);
    // };

    // fetchData().catch(console.error);
  }, []);

  //console.log(keysList);
  // console.log(materialsList);

  return <MenuPresentation keysList={keysList} materialsList={materialsList} />;
};

export default MenuContainer;
