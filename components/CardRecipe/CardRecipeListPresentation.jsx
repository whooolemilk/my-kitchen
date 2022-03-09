import Image from "next/image";
import Link from "next/link";

const CardRecipeListPresentation = ({ title, list, category, description }) => {
  return (
    <div>
      <div className="flex mx-6 my-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <Link
          href={{
            pathname: "/lists",
            query: {
              title: title,
              category: category,
              description: description,
            },
          }}
        >
          <a className="text-ocher-400 ml-auto">もっと見る</a>
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-4 mx-5">
        {list.map((recipe, i) => (
          <li key={i}>
            <Link href={recipe.recipeUrl}>
              <a>
                <Image
                  src={recipe.foodImageUrl}
                  width={200}
                  height={200}
                  objectFit="cover"
                  alt="Food Image"
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

export default CardRecipeListPresentation;
