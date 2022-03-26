import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import IconClock from "../Icons/IconClock";
import IconYen from "../Icons/IconYen";

const ResultRecipeListPresentation = ({ list, keyword, category }) => {
  return (
    <>
      {keyword ? (
        <h1 className="text-xl mx-4">
          <span className="font-bold">{keyword}</span>の検索結果
        </h1>
      ) : (
        <h1 className="text-xl mx-4">
          <span className="font-bold">{category}</span>の関連レシピ
        </h1>
      )}

      <ul className="divide-y divide-gray-300">
        {list.map((recipe, i) => (
          <li key={i} className=" ">
            <Link
              href={{
                pathname: "/recipe",
                query: {
                  recipeId: recipe.id,
                },
              }}
            >
              <a>
                <div className="flex space-x-3 mx-4 py-3">
                  <div className="rounded-2xl flex-none w-36">
                    <Image
                      src={recipe.food_image_url}
                      width={300}
                      height={300}
                      objectFit="cover"
                      alt="Food Image"
                      className="rounded-2xl responsive"
                    ></Image>
                  </div>
                  <div className="h-auto">
                    <p className="font-semibold flex-grow line-clamp-2">
                      {recipe.title}
                    </p>
                    <p className="text-sm flex-grow line-clamp-2">
                      {recipe.description}
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
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResultRecipeListPresentation;
