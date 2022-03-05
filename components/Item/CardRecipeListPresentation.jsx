import recipeList from "../../mocks/recipeList.json";
import Image from "next/image";
import Link from "next/link";

const CardRecipeListContainer = ({ title, category }) => {
  var topRecipeList = [];
  var count = 0;
  for (let i = 0; i < recipeList.result.length; i++) {
    if (recipeList.result[i].category == category && count < 2) {
      topRecipeList.push(recipeList.result[i]);
      count++;
    }
  }
  return (
    <div>
      <div className="flex mx-6 my-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <Link href="/">
          <a className="text-ocher-400 ml-auto">もっと見る</a>
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-4 mx-5">
        {topRecipeList.map((recipe, i) => (
          <li key={i}>
            <Link href={recipe.recipeUrl}>
              <a>
                <Image
                  src={recipe.foodImageUrl}
                  width={200}
                  height={200}
                  objectFit="cover"
                  alt=" "
                  className="rounded-2xl"
                ></Image>
                <p className="font-semibold text-sm line-clamp-2">
                  {recipe.recipeTitle}
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardRecipeListContainer;
