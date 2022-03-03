import Image from "next/image";
import Link from "next/link";
import LogoMykitchen from "../Icons/LogoMykitchen";

import style from "./../../styles/Header.module.css";

const HeaderPresentation = () => {
  return (
    <div>
      <header className="flex place-content-center border-2 border-solid ">
        <Link href="/search" passHref>
          <LogoMykitchen />
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
