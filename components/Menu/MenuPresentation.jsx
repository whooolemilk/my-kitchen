import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useState } from "react";
import IconClock from "../Icons/IconClock";
import IconDown from "../Icons/IconDown";
import IconUp from "../Icons/IconUp";
import IconYen from "../Icons/IconYen";

const MenuPresentation = ({ recipeList }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="flex mx-4 my-3">
        <h1 className="text-xl flex-grow font-bold">マイレシピリスト</h1>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mx-2 my-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 my-1 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg> */}
      </div>
      <p className="mx-4 p-2 bg-ocher-100 rounded-lg">
        今日作りたい料理や近いうちに作ってみたい料理などを材料メモとともに保存しておくことが出来ます！
      </p>
      <ul className="divide-y divide-gray-300">
        {recipeList.map((recipe, i) => (
          <li key={i}>
            <Link
              href={{
                pathname: "/recipe",
                query: {
                  recipeTitle: recipe.title,
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
            <ul>
              <div className="flex border-y px-4 ">
                <li className="py-3 flex-grow">材料メモを確認</li>
                <button onClick={() => handleClick(isVisible)}>
                  <li>{isVisible ? <IconUp /> : <IconDown />}</li>
                </button>
              </div>
              {isVisible ? (
                recipe.materials.map((material, i) => (
                  <li key={i} className="px-8 py-3 bg-white odd:bg-ocher-100">
                    {material}
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuPresentation;
