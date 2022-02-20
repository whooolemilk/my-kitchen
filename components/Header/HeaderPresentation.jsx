import Image from "next/image";
import Link from "next/link";
import Mykitchen from "../Icons/MYKITCHEN";

import style from "./../../styles/Header.module.css";

const HeaderPresentation = () => {
  return (
    <div>
      <header className="flex place-content-center shadow-md">
        <Link href="/search" passHref>
          <Mykitchen />
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
