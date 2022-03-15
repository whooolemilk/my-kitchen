import Link from "next/link";

const CardCategoryPresentation = ({ categoryList, name }) => {
  return (
    <Link
      href={{
        pathname: "/result",
        query: {
          categoryId: categoryList[0].id,
        },
      }}
    >
      <a className="py-4 text-sm">
        <p>{name}</p>
      </a>
    </Link>
  );
};

export default CardCategoryPresentation;
