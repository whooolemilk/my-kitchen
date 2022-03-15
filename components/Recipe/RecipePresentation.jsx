import Image from "next/image";
import IconClockSmall from "../Icons/IconClockSmall";
import IconYenSmall from "../Icons/IconYenSmall";
import IconExternalLink from "../Icons/IconExternalLink";
import Link from "next/link";
import AddRecipeButtonContainer from "../AddRecipeButton/AddRecipeButtonContainer";
const RecipePresentation = ({ list }) => {
  return (
    <>
      {list.map((recipe) => (
        <>
          <Image
            src={recipe.foodImageUrl}
            width={800}
            height={500}
            layout={"responsive"}
            objectFit="cover"
            alt="Food Image"
            className=""
          ></Image>
          <div className="mx-4">
            <h1 className="font-bold text-xl text-ocher-400  my-3">
              {recipe.recipeTitle}
            </h1>
            <div className="flex text-center">
              <div className="flex items-center">
                <IconYenSmall />
                <p className="text-gray-500">{recipe.recipeCost}</p>
              </div>
              <div className="flex">
                <IconClockSmall />
                <p className="text-gray-500">{recipe.recipeIndication}</p>
              </div>
            </div>
            <p className="my-2">{recipe.recipeDescription}</p>
          </div>
          <h2 className="font-bold text-xl mt-4 mb-3 mx-4">材料</h2>
          <ul>
            {recipe.recipeMaterial.map((material, i) => (
              <li key={i} className="px-8 py-3 bg-white odd:bg-ocher-100">
                {material}
              </li>
            ))}
          </ul>
          <div className="text-center my-6">
            <Link href={recipe.recipeUrl}>
              <a>
                <button className="mx-auto bg-orange-500 flex gap-2 py-4 px-20 rounded-full text-white font-bold">
                  楽天レシピでもっと見る
                  <IconExternalLink />
                </button>
              </a>
            </Link>
          </div>
          <AddRecipeButtonContainer list={list} />
        </>
      ))}
    </>
  );
};

export default RecipePresentation;
