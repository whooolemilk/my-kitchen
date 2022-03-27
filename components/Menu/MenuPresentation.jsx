import MyRecipeItemContainer from "../MyRecipeItem/MyRecipeItemContainer";
import Image from "next/image";

const MenuPresentation = ({ recipeList }) => {
  return (
    <>
      <div className="flex mx-4 my-3">
        <h1 className="text-xl flex-grow font-bold">マイレシピリスト</h1>
      </div>
      <p className="mx-4 p-2 bg-ocher-100 rounded-lg">
        今日作りたい料理や近いうちに作ってみたい料理などを材料メモとともに保存しておくことが出来ます！
      </p>
      <ul className="divide-y divide-gray-300">
        {recipeList.length === 0 ? (
          <div className="text-center my-8">
            <Image
              src="/empty-myrecipe.png"
              width={300}
              height={450}
              alt="description"
            ></Image>
          </div>
        ) : (
          recipeList.map((recipe, i) => (
            <MyRecipeItemContainer recipe={recipe} key={i} />
          ))
        )}
      </ul>
    </>
  );
};

export default MenuPresentation;
