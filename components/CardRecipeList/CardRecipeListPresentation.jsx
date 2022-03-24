import Image from "next/image";
import Link from "next/link";

const CardRecipeListPresentation = ({ title, list, description }) => {
  return (
    <div>
      <div className="flex mx-5 mb-2 mt-5">
        <h1 className="text-lg font-bold flex-grow">{title}</h1>
        <Link
          href={{
            pathname: "/lists",
            query: {
              title: title,
              description: description,
            },
          }}
        >
          <a className="text-ocher-400 text-sm my-1">もっと見る</a>
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-4 mx-4">
        {list.map((recipe, i) => (
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
                <Image
                  src={recipe.food_image_url}
                  width={200}
                  height={200}
                  objectFit="cover"
                  alt="Food Image"
                  className="rounded-2xl"
                ></Image>
                <p className="font-semibold text-sm line-clamp-2">
                  {recipe.title}
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
