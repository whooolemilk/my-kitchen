import IconSearch from "../Icons/IconSearch";

const SearchFormPresentation = ({ keyword, onChange }) => {
  return (
    <form
      action="/result"
      method="get"
      className="flex screen mx-4 my-3 relative z-10 bg-ocher-100 rounded-full"
    >
      <input
        name="keyword"
        type="search"
        placeholder="料理名、材料名を入力"
        className="py-3 pl-7 w-5/6 placeholder-gray-600 focus:outline-none focus:border-none focus:ring-none focus:placeholder-opacity-0 bg-transparent"
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        value={keyword}
        onChange={onChange}
      />
      <button type="submit" className="w-1/6 py-3">
        <IconSearch />
      </button>
    </form>
  );
};

export default SearchFormPresentation;
