import IconSearch from "../Icons/IconSearch";
const SearchFormPresentation = () => {
  return (
    <form
      id="form1"
      action="/result"
      method="get"
      className="flex screen mx-4 my-3"
      // relative
    >
      <input
        id="sbox1"
        name="query"
        type="search"
        placeholder="料理名、材料名を入力"
        className=" top-0 left-4/6 py-3 pl-7 w-5/6 bg-ocher-100 placeholder-gray-600 rounded-l-full focus:outline-none focus:border-none focus:ring-none focus:placeholder-opacity-0"
        // absolute
      />
      <button
        type="submit"
        className="top-0 right-0 w-1/6 py-3 bg-ocher-100  rounded-r-full"
        // absolute
      >
        <IconSearch />
      </button>
    </form>
  );
};

export default SearchFormPresentation;
