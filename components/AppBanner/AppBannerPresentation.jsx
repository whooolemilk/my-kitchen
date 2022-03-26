import Image from "next/image";
import Link from "next/link";

const AppBannerPresentation = () => {
  return (
    <Link href="/">
      <a>
        <div className="mx-4 my-3">
          <Image
            src="/banner.png"
            width={1792}
            height={686}
            alt="banner"
            className=" rounded-2xl"
          ></Image>
        </div>
      </a>
    </Link>
  );
};

export default AppBannerPresentation;
