import Link from "next/link";
import IconInvalidHome from "../Icons/IconInvalidHome";
import IconValidHome from "../Icons/IconValidHome";
import IconValidSearch from "../Icons/IconValidSearch";
import IconInvalidSearch from "../Icons/IconInvalidSearch";

const FooterPresentation = ({ name }) => {
  const homePathList = ["/", "/lists", "/recipe"];
  const searchPathList = ["/search", "/result"];
  return (
    <footer className="w-full h-auto rounded-t-large border-2 border-solid block inset-x-0 bottom-0 z-10 bg-white shadow sticky">
      <ul className="mx-20 flex justify-between">
        <li>
          <Link href="/" passHref>
            {homePathList.includes(name) ? (
              <a className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
                <IconValidHome />
                <span className="text-ocher-400">ホーム</span>
              </a>
            ) : (
              <a className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
                <IconInvalidHome />
                <span className="text-gray-400">ホーム</span>
              </a>
            )}
          </Link>
        </li>
        <li>
          <Link href="/search" passHref>
            {searchPathList.includes(name) ? (
              <a className="w-full text-ocher-400 selection:justify-center inline-block text-center pt-2 pb-1">
                <IconValidSearch />
                <span className="block text-ocher-400">さがす</span>
              </a>
            ) : (
              <a className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
                <IconInvalidSearch />
                <span className="block text-gray-400">さがす</span>
              </a>
            )}
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default FooterPresentation;
