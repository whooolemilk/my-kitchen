import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const FooterPresentation = (props) => {
  const router = useRouter();
  const [activeTabs, setActiveTabs] = useState(props.name);
  activeTabs = "home";
  useEffect(() => {
    switch (activeTabs) {
      case "home":
        router.push("/");
        break;
      case "search":
        router.push("/search");
        break;
    }
  }, [activeTabs, router]);
  return (
    <footer className="w-full h-auto rounded-t-large border-2 border-solid block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
      <ul className="mx-20 flex justify-between">
        <li>
          <Link href="/home" passHref>
            <div className="w-full selection:justify-center inline-block text-center pt-2 pb-1">
              {activeTabs === "home" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-auto stroke-ocher-400 focus:stroke-ocher-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setActiveTabs("home")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-auto stroke-gray-400 focus:stroke-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setActiveTabs("home")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              )}
              <span className="text-ocher-400">ホーム</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/search" passHref>
            <div className="w-full text-ocher-400 selection:justify-center inline-block text-center pt-2 pb-1">
              {activeTabs === "search" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-auto stroke-ocher-400 hover:stroke-ocher-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setActiveTabs("search")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-auto stroke-gray-400 hover:stroke-gray-400 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setActiveTabs("search")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}

              <span className="block">さがす</span>
            </div>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default FooterPresentation;
