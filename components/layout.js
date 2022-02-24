import HeaderContainer from "../components/Header/HeaderContainer";
import FooterContainer from "./Footer/FooterContainer";

export default function Layout({ children }) {
  return (
    <>
      <HeaderContainer />
      <main>{children}</main>
      <FooterContainer />
    </>
  );
}
