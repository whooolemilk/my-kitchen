import Image from "next/image";
import Link from "next/link";
import IconYen from "../Icons/IconYen";
import IconClock from "../Icons/IconClock";

const RecipeListPresentation = ({ id, title, list, description }) => {
  return (
    <>
      <div className="w-full h-48">
        <Image
          src={"/" + id + ".png"}
          width={800}
          height={400}
          alt="title-img"
        ></Image>
      </div>
      <h1 className="text-2xl font-bold mx-5 mt-4">{title}</h1>
      <p className="mx-5 my-2">{description}</p>
      <ul className="divide-y divide-gray-300">
        {list.map((recipe, i) => (
          <li key={i} className="py-4">
            <div className="flex space-x-4 mx-4">
              <div className="rounded-2xl flex-none w-36">
                <Image
                  src={recipe.food_image_url}
                  width={180}
                  height={180}
                  objectFit="cover"
                  alt="Food Image"
                  className="rounded-2xl responsive"
                ></Image>
              </div>
              <div className="h-auto">
                <p className="font-semibold w-auto line-clamp-2">
                  {recipe.title}
                </p>
                <div className="grid grid-cols-2 divide-x gap-2 text-center mt-2 divide-gray-300">
                  <div>
                    <IconYen />
                    <p className="font-bold">{recipe.cost}</p>
                  </div>
                  <div>
                    <IconClock />
                    <p className="font-bold">{recipe.indication}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="w-auto mx-4 my-2 bg-ocher-100 px-4 py-3 rounded-lg">
              {recipe.description}
            </p>
            <div className="text-center">
              <Link
                href={{
                  pathname: "/recipe",
                  query: {
                    recipeId: recipe.id,
                  },
                }}
              >
                <a>
                  <button className="bg-yellow-400 px-24 pb-4 pt-3 rounded-full text-yellow-900 font-bold">
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
