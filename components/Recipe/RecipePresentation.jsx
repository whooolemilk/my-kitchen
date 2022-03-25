import Image from "next/image";
import IconClockSmall from "../Icons/IconClockSmall";
import IconYenSmall from "../Icons/IconYenSmall";
import IconExternalLink from "../Icons/IconExternalLink";
import Link from "next/link";
import AddRecipeButtonContainer from "../AddRecipeButton/AddRecipeButtonContainer";
const RecipePresentation = ({ list }) => {
  console.log(list);
  return (
    <>
      {/* <Image
        src={list.food_image_url}
        width={800}
        height={500}
        layout={"responsive"}
        objectFit="cover"
        alt="Food Image"
      ></Image> */}
      <div className="mx-4">
        <h1 className="font-bold text-xl text-ocher-400  my-3">{list.title}</h1>
        <div className="flex text-center">
          <div className="flex items-center">
            <IconYenSmall />
            <p className="text-gray-500">{list.cost}</p>
          </div>
          <div className="flex">
            <IconClockSmall />
            <p className="text-gray-500">{list.indication}</p>
          </div>
        </div>
        <p className="my-2">{list.description}</p>
      </div>
      <h2 className="font-bold text-xl mt-4 mb-3 mx-4">材料</h2>
      <ul>
        {/* {list.materials.map((material, i) => (
          <li key={i} className="px-8 py-3 bg-white odd:bg-ocher-100">
            {material}
          </li>
        ))} */}
      </ul>
      <div className="text-center my-6">
        {/* <Link href={list.url}>
          <a>
            <button className="mx-auto bg-orange-500 flex gap-2 py-4 px-20 rounded-full text-white font-bold">
              楽天レシピでもっと見る
              <IconExternalLink />
            </button>
          </a>
        </Link> */}
      </div>

      {/* {list.map((recipe) => (
        <>
        </>
      ))} */}
    </>
  );
};

export default RecipePresentation;
