import CardCategoryContainer from "../CardCategory/CardCategoryContainer";

const SearchCategoryPresentation = ({ active }) => {
  return (
    <>
      {active ? (
        <div className="text-center divide-y divide-ocher-200">
          <div className="grid grid-cols-3 divide-x divide-ocher-200">
            <CardCategoryContainer categoryName="肉" name="肉" />
            <CardCategoryContainer categoryName="魚" name="魚" />
            <CardCategoryContainer
              categoryName="大豆・豆腐"
              name="大豆・豆腐"
            />
          </div>
          <div className="grid grid-cols-3 divide-x divide-ocher-200">
            <CardCategoryContainer categoryName="野菜" name="野菜" />
            <CardCategoryContainer categoryName="果物" name="果物" />
            <CardCategoryContainer categoryName="飲みもの" name="飲みもの" />
          </div>
        </div>
      ) : (
        <div className="text-center divide-y divide-ocher-200">
          <div className="grid grid-cols-4 divide-x divide-ocher-200">
            <CardCategoryContainer categoryName="ご飯もの" name="時短料理" />
            <CardCategoryContainer categoryName="節約料理" name="節約料理" />
            <CardCategoryContainer categoryName="麺・粉物料理" name="麺類" />
            <CardCategoryContainer
              categoryName="汁物・スープ"
              name="汁物・スープ"
            />
          </div>
          <div className="grid grid-cols-4 divide-x divide-ocher-200">
            <CardCategoryContainer categoryName="定番の肉料理" name="肉料理" />
            <CardCategoryContainer categoryName="定番の魚料理" name="魚料理" />
            <CardCategoryContainer categoryName="パン" name="パン" />
            <CardCategoryContainer categoryName="お菓子" name="お菓子" />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchCategoryPresentation;
