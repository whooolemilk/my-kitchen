import AppBannerContainer from "../AppBanner/AppBannerContainer";
import CardRecipeListContainer from "../CardRecipe/CardRecipeContainer";

const HomePresentation = () => {
  return (
    <>
      <AppBannerContainer />
      <CardRecipeListContainer
        category="dinner"
        title="簡単ばんごはん"
        description="おいしいばんごはんだよ"
      />
      <CardRecipeListContainer
        category="lunch"
        title="おいしいおひるごはん"
        description="３分以内にできるよ"
      />
    </>
  );
};
export default HomePresentation;
