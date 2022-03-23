import React, { useEffect, useState } from "react";

function Index() {
  const [list, setList] = useState([]);
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch(
        "https://forked-mykitchen-backend.herokuapp.com/recipes"
      );
      console.log(data);
      const json = await data.json();
      console.log(json);
      setList(json);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div>
      index
      {list.map((recipe, i) => (
        <p key={i}>{recipe.title}</p>
      ))}
    </div>
  );
}

export default Index;
