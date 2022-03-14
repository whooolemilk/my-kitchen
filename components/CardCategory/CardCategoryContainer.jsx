import CardCategoryPresentation from "./CardCategoryPresentation";
import categoryList from "../../mocks/categoryList.json";

const CardCategoryContainer = ({ categoryName, name }) => {
  const list = categoryList.result.filter(
    (category) => category.name === categoryName
  );
  return <CardCategoryPresentation categoryList={list} name={name} />;
};

export default CardCategoryContainer;
