import Link from "next/link";
import IconReturn from "../Icons/IconReturn";
import LogoMykitchen from "../Icons/LogoMykitchen";
import { useRouter } from "next/router";

const HeaderPresentation = () => {
  const router = useRouter();
  console.log(router.pathname);
  const pathList = ["/lists"];
  return (
    <div>
      <header className="grid grid-cols-3 items-center border-2 border-solid h-16">
        {pathList.includes(router.pathname) ? (
          <button type="button" onClick={() => router.back()}>
            <IconReturn className="" />
          </button>
        ) : (
          <></>
        )}
        <Link href="/" passHref>
          <a className="block">
            <LogoMykitchen />
          </a>
        </Link>
        <div className="hidden md:block">
          <nav>
            <ul>
              <li>
                <Link href="/search">探す</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderPresentation;
