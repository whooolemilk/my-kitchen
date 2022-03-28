import Link from "next/link";
import Image from "next/image";
import IconReturn from "../Icons/IconReturn";
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
            <div className="w-40 mt-1">
              <Image
                src="/MYKITCHEN.png"
                width={200}
                height={30}
                alt="logo-image"
              ></Image>
            </div>
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
