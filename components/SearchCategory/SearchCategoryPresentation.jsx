import CardCategoryContainer from "../CardCategory/CardCategoryContainer";

const SearchCategoryPresentation = ({ activeIndex }) => {
  return (
    <>
      {activeIndex === 0 && (
        <div className="text-center divide-y divide-ocher-200">
          <div className="grid grid-cols-3 divide-x divide-ocher-200">
            <CardCategoryContainer name="肉" categoryId={10} />
            <CardCategoryContainer name="魚" categoryId={11} />
            <CardCategoryContainer name="大豆・豆腐" categoryId={35} />
          </div>
          <div className="grid grid-cols-3 divide-x divide-ocher-200">
            <CardCategoryContainer name="野菜" categoryId={12} />
            <CardCategoryContainer name="果物" categoryId={34} />
            <CardCategoryContainer name="飲みもの" categoryId={27} />
          </div>
        </div>
      )}
      {activeIndex === 1 && (
        <div className="text-center divide-y divide-ocher-200">
          <div className="grid grid-cols-4 divide-x divide-ocher-200">
            <CardCategoryContainer name="時短料理" categoryId={36} />
            <CardCategoryContainer name="節約料理" categoryId={37} />
            <CardCategoryContainer name="麺類" categoryId={16} />
            <CardCategoryContainer name="汁物・スープ" categoryId={17} />
          </div>
          <div className="grid grid-cols-4 divide-x divide-ocher-200">
            <CardCategoryContainer name="肉料理" categoryId={31} />
            <CardCategoryContainer name="魚料理" categoryId={32} />
            <CardCategoryContainer name="パン" categoryId={22} />
            <CardCategoryContainer name="お菓子" categoryId={21} />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchCategoryPresentation;
