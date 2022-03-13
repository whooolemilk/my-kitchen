import { useState } from "react";
import { useEffect } from "react";
import MenuPresentation from "./MenuPresentation";

const MenuContainer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const length = localStorage.length;
    for (let i = 0; i < length; i++) {
      setList([...list, localStorage.key(i)]); //なぜか同じ値がlength文配列に入ってしまう…
      console.log(localStorage.key(i));
    }
  }, []);

  console.log(list);
  return <MenuPresentation />;
};

export default MenuContainer;
