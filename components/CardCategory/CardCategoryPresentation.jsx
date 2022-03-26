import Link from "next/link";

const CardCategoryPresentation = ({ categoryId, name }) => {
  return (
    <Link
      href={{
        pathname: "/result",
        query: {
          categoryId: categoryId,
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
