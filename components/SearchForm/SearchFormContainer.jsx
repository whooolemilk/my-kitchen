import SearchFormPresentation from "./SearchFormPresentation";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
const SearchFormContainer = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    if (router.query.keyword && !keyword) {
      setKeyword(router.query.keyword);
    }
  }, [router.query.keyword]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return <SearchFormPresentation keyword={keyword} onChange={handleChange} />;
};

export default SearchFormContainer;
