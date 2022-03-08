import Head from "next/head";
import Image from "next/image";
import HeaderContainer from "../components/Header/HeaderContainer";
import HomeContainer from "../components/Home/HomeContainer";
import AppBannerContainer from "../components/AppBanner/AppBannerContainer";
import CardRecipeListContainer from "../components/CardRecipe/CardRecipeContainer";
import CardRecipeListPresentation from "../components/CardRecipe/CardRecipeListPresentation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <HomeContainer />;
}
