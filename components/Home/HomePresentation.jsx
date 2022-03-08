import AppBannerContainer from "../AppBanner/AppBannerContainer";
import CardRecipeListContainer from "../CardRecipe/CardRecipeContainer";

const HomePresentation = () => {
  return (
    <>
      <AppBannerContainer />
      <CardRecipeListContainer category="dinner" title="簡単ばんごはん" />
      <CardRecipeListContainer category="lunch" title="おいしいおひるごはん" />
    </>
  );
};
export default HomePresentation;
