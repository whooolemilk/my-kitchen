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
      <h1 className="text-xl mx-4">つくる</h1>
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
                <li className="py-3 flex-grow">材料を確認</li>
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
