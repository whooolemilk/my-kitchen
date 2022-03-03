import { useRouter } from "next/router";
import { useState } from "react";
import FooterPresentation from "./FooterPresentation";

const FooterContainer = () => {
  const router = useRouter();
  return <FooterPresentation name={router.pathname} />;
};

export default FooterContainer;
