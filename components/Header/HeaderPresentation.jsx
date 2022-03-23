import Link from "next/link";
import IconReturn from "../Icons/IconReturn";
import LogoMykitchen from "../Icons/LogoMykitchen";
import { useRouter } from "next/router";

const HeaderPresentation = () => {
  const router = useRouter();
  const displayBackPathList = ["/lists", "/recipe", "/result"];
  return (
    <div>
      <header className="relative flex items-center border-2 border-solid h-14">
        {displayBackPathList.includes(router.pathname) ? (
          <button type="button" className="" onClick={() => router.back()}>
            <IconReturn className="" />
          </button>
        ) : (
          <div></div>
        )}
        <Link href="/" passHref>
          <a className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
