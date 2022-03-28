import IconInvalidSpoonFork from "../Icons/IconInvalidSpoonFork";
import IconValidSpoonFork from "../Icons/IconValidSpoonFork";

const AddRecipeButtonPresentation = ({ wasRegistered, onClick }) => {
  return (
    <>
      {wasRegistered ? (
        <button
          name="query"
          onClick={onClick}
          className="fixed bottom-24 right-4 w-20 h-20 text-center rounded-full border-orange-400 border-2 bg-white"
        >
          <IconValidSpoonFork />
          <p className="text-xs font-bold text-orange-400">つくる</p>
        </button>
      ) : (
        <button
          name="query"
          onClick={onClick}
          className="fixed bottom-24 right-4 w-20 h-20 text-center rounded-full border-gray-400 border-2 bg-white"
        >
          <IconInvalidSpoonFork />
          <p className="text-xs font-bold text-gray-400">つくる</p>
        </button>
      )}
    </>
  );
};

export default AddRecipeButtonPresentation;
