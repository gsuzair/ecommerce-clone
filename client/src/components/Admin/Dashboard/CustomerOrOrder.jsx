import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const CustomerOrOrder = ({
  title = "Metric",
  value = "0",
  delta = "0%",
  positive = true,
  icon = null,
  className = "",
}) => {
  const badgeBase =
    "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs ring-1 ring-inset";
  const badgePos = "bg-green-50 text-green-700 ring-green-200";
  const badgeNeg = "bg-red-50 text-red-700 ring-red-200";

  return (
    <div className={`rounded-2xl border bg-white shadow-sm p-5 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="h-10 w-10 rounded-xl bg-gray-100 grid place-items-center text-gray-700">
          {icon}
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-500">{title}</div>

      <div className="mt-1 flex items-center justify-between">
        <div className="text-3xl font-semibold tracking-tight text-slate-900">
          {value}
        </div>
        <span
          className={`${badgeBase} ${positive ? badgePos : badgeNeg}`}
          aria-label={`${positive ? "Up" : "Down"} ${delta}`}
          title={`${positive ? "Up" : "Down"} ${delta}`}
        >
          {positive ? <FiTrendingUp /> : <FiTrendingDown />}
          {delta}
        </span>
      </div>
    </div>
  );
};

export default CustomerOrOrder;
