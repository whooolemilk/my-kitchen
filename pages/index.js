import Head from "next/head";
import Image from "next/image";
import HeaderContainer from "../components/Header/HeaderContainer";
import HomeContainer from "../components/Home/HomeContainer";
import AppBannerContainer from "../components/Item/AppBannerContainer";
import CardRecipeListContainer from "../components/Item/CardRecipeListPresentation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <HomeContainer />
      <AppBannerContainer />
      <CardRecipeListContainer title="簡単ばんごはん" category="dinner" />
      <CardRecipeListContainer title="簡単ばんごはん" category="dinner" />
      <CardRecipeListContainer title="簡単ばんごはん" category="dinner" />
    </div>
  );
}
