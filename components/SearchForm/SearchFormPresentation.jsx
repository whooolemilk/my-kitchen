import IconSearch from "../Icons/IconSearch";
const SearchFormPresentation = () => {
  return (
    <>
      <form
        id="form1"
        action="/result"
        method="get"
        className="relative screen mx-4 my-3"
      >
        <input
          id="sbox1"
          name="query"
          type="search"
          placeholder="料理名、材料名を入力"
          className="absolute top-0 left-4/6 py-3 pl-7 w-5/6 bg-ocher-100 placeholder-gray-600 rounded-l-full focus:outline-none focus:border-none focus:ring-none focus:placeholder-opacity-0"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 w-1/6 py-3 bg-ocher-100  rounded-r-full"
        >
          <IconSearch />
        </button>
      </form>
    </>
  );
};

export default SearchFormPresentation;