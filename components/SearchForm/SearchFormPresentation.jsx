import IconSearch from "../Icons/IconSearch";

const SearchFormPresentation = ({ keyword, onChange }) => {
  return (
    <form
      action="/result"
      method="get"
      className="flex screen mx-4 my-3 relative z-10"
    >
      <input
        name="keyword"
        type="search"
        placeholder="料理名、材料名を入力"
        className="py-3 pl-7 w-5/6 bg-ocher-100 placeholder-gray-600 rounded-l-full focus:outline-none focus:border-none focus:ring-none focus:placeholder-opacity-0"
        value={keyword}
        onChange={onChange}
      />
      <button type="submit" className="w-1/6 py-3 bg-ocher-100 rounded-r-full">
        <IconSearch />
      </button>
    </form>
  );
};

export default SearchFormPresentation;
