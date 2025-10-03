// import "./css/CardSkeleton.css";

const CardSkeleton = () => {

  return (
    <div className="rounded-none border bg-white shadow-sm overflow-hidden animate-pulse" aria-hidden="true">
        <img
            src="https://placehold.co/600x600"
            alt=""
            className="w-full aspect-square object-cover"
        />
      <div className="p-3 space-y-2">
        <div className="h-3 w-2/3 rounded bg-gray-200" />
        <div className="h-3 w-1/2 rounded bg-gray-200" />
        <div className="h-3 w-1/3 rounded bg-gray-200" />
        <div className="h-9 w-full rounded-lg bg-gray-200" />
      </div>
    </div>

  );
};

export default CardSkeleton;
