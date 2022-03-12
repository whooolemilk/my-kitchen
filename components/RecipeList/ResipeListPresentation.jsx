import Image from "next/image";
import Link from "next/link";
import IconYen from "../Icons/IconYen";
import IconClock from "../Icons/IconClock";

const RecipeListPresentation = ({ title, list, description }) => {
  return (
    <>
      <div className="w-full h-48 bg-ocher-100">グラフィック画像が入るよ</div>
      <h1 className="text-2xl font-bold mx-5 mt-3">{title}</h1>
      <p className="w-auto mx-5  mb-10">{description}</p>
      <ul>
        {list.map((recipe, i) => (
          <li key={i}>
            <div className="flex space-x-4 mx-5">
              <Image
                src={recipe.foodImageUrl}
                width={180}
                height={180}
                objectFit="cover"
                alt="Food Image"
                className="rounded-2xl responsive"
              ></Image>
              <div className="h-auto">
                <p className="font-semibold w-auto line-clamp-2">
                  {recipe.recipeTitle}
                </p>
                <div className="grid grid-cols-2 divide-x gap-2 text-center mt-2 divide-gray-300">
                  <div>
                    <IconYen />
                    <p className="font-bold">{recipe.recipeCost}</p>
                  </div>
                  <div>
                    <IconClock />
                    <p className="font-bold">{recipe.recipeIndication}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-auto mx-5 my-4 bg-ocher-100 px-4 py-3 rounded-lg">
              {recipe.recipeDescription}
            </p>
            <div className="text-center mb-16">
              <Link href="/">
                <a>
                  <button className="bg-ocher-300 px-24 py-4 rounded-full text-white font-bold">
                    レシピの詳細を見る
                  </button>
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecipeListPresentation;
