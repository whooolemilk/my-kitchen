// 灰色の有効でない状態を示すサーチアイコン
const IconInvalidSearch = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-auto stroke-gray-400 hover:stroke-gray-400 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export default IconInvalidSearch;
