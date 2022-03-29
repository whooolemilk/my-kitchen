import IconNotFound from "../Icons/IconNotFound";

const EmptyDataPresentation = () => {
  return (
    <>
      <div className="w-full h-48 bg-slate-200 text-center"></div>
      <div className="flex m-4 gap-3">
        <IconNotFound />
        <h1 className="text-xl font-bold text-ocher-300">
          レシピデータがありません＞＜
        </h1>
      </div>
      <div className="flex gap-4 mx-4">
        <div className="w-20 h-6 bg-slate-200"></div>
        <div className="w-20 h-6 bg-slate-200"></div>
      </div>
      <div className="flex-grow m-4 h-16 bg-slate-200"></div>
    </>
  );
};

export default EmptyDataPresentation;
