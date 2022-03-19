import { useState } from "react";
import { useEffect } from "react";
import MenuPresentation from "./MenuPresentation";

const MenuContainer = () => {
  const [list, setList] = useState([]);
  let keyList = [];

  useEffect(() => {
    const length = localStorage.length;
    for (let i = 0; i < length; i++) {
      if (!isNaN(localStorage.key(i))) {
        keyList.push(localStorage.key(i));
      }
    }
    setList(keyList);
  }, []);
  return <MenuPresentation />;
};

export default MenuContainer;
