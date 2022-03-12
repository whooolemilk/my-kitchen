import HeaderContainer from "../components/Header/HeaderContainer";
import FooterContainer from "./Footer/FooterContainer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderContainer />
      <main className="grow">{children}</main>
      <FooterContainer />
    </div>
  );
}
