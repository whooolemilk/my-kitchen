import Link from "next/link";
import IconInvalidHome from "../Icons/IconInvalidHome";
import IconValidHome from "../Icons/IconValidHome";
import IconValidSearch from "../Icons/IconValidSearch";
import IconInvalidSearch from "../Icons/IconInvalidSearch";

const FooterPresentation = ({ name }) => {
  const homePathList = ["/", "/lists", "/recipe"];
  const searchPathList = ["/search", "/result"];
  const menuPathList = ["/menu"];
  return (
    <footer className="w-full h-auto rounded-t-large border-2 border-solid block inset-x-0 bottom-0 z-10 bg-white shadow sticky">
      <ul className="px-16 flex justify-between">
        <li>
          <Link href="/" passHref>
            {homePathList.includes(name) ? (
              <a className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
                <IconValidHome />
                <span className="text-ocher-400 text-xs">ホーム</span>
              </a>
            ) : (
              <a className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
                <IconInvalidHome />
                <span className="text-gray-400 text-xs">ホーム</span>
              </a>
            )}
          </Link>
        </li>
        <li>
          <Link href="/search" passHref>
            {searchPathList.includes(name) ? (
              <a className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
                <IconValidSearch />
                <span className="text-ocher-400 text-xs">さがす</span>
              </a>
            ) : (
              <a className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
                <IconInvalidSearch />
                <span className="text-gray-400 text-xs">さがす</span>
              </a>
            )}
          </Link>
        </li>
        <li>
          <Link href="/menu" passHref>
            {menuPathList.includes(name) ? (
              <a className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-1 stroke-ocher-400 focus:stroke-ocher-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                <span className="text-ocher-400 text-xs">つくる</span>
              </a>
            ) : (
              <a className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mx-1 stroke-gray-400 focus:stroke-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                <span className="text-gray-400 text-xs">つくる</span>
              </a>
            )}
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default FooterPresentation;
