import HeaderContainer from "../components/Header/HeaderContainer";

export default function Layout({ children }) {
  return (
    <>
      <HeaderContainer />
      <main>{children}</main>
    </>
  );
}
