/**
 * Props:
 *  title: string
 *  subtitle: string
 *  percent: number (0-100)
 *  deltaLabel: string (e.g., "+10%")
 *  message: string (center paragraph)
 *  target: string | number (e.g., "$20K")
 *  revenue: string | number (e.g., "$20K")
 *  today: string | number (e.g., "$20K")
 *  targetTrend: "up" | "down" | "flat"
 *  revenueTrend: "up" | "down" | "flat"
 *  todayTrend: "up" | "down" | "flat"
 */
const Trend = ({ dir = "up" }) => {
  const cls =
    dir === "up"
      ? "text-emerald-500"
      : dir === "down"
      ? "text-rose-500"
      : "text-slate-400";
  const path =
    dir === "up"
      ? "M12 4l6 6H6l6-6z" // up
      : dir === "down"
      ? "M12 20l-6-6h12l-6 6z" // down
      : "M4 12h16"; // flat
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${cls}`}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d={path} />
    </svg>
  );
};

const Gauge = ({ percent = 75.55 }) => {
  // semi-circle gauge math
  const size = 220; // svg width
  const stroke = 14;
  const r = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = Math.PI * r; // HALF of full circle (since we draw a half arc)
  const progress = Math.max(0, Math.min(100, percent)) / 100;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="relative mx-auto w-full max-w-[230px]">
      <svg
        width={size}
        height={size / 2 + 10}
        viewBox={`0 0 ${size} ${size / 2 + 10}`}
      >
        {/* background track */}
        <path
          d={`M ${cx - r},${cy} A ${r},${r} 0 0 1 ${cx + r},${cy}`}
          fill="none"
          stroke="#e8ecf2"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        {/* progress arc */}
        <path
          d={`M ${cx - r},${cy} A ${r},${r} 0 0 1 ${cx + r},${cy}`}
          fill="none"
          stroke="url(#grad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashOffset}
        />
        {/* gradient for the arc */}
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
      </svg>

      {/* center percentage + chip */}
      <div className="absolute inset-0 flex -translate-y-3 flex-col items-center justify-center">
        <div className="text-3xl font-semibold text-slate-800">
          {percent.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value, trend = "flat" }) => (
  <div className="flex items-center">
    <span className="text-slate-500">{label}</span>
    <div className="flex items-center gap-1">
      <span className="font-semibold text-slate-800">{value}</span>
      <Trend dir={trend} />
    </div>
  </div>
);

const MonthlyTarget = ({
  title = "Monthly Target",
  subtitle = "Target you’ve set for each month",
  percent = 75.55,
  deltaLabel = "+10%",
  message = "You earn $3287 today, it’s higher than last month. Keep up your good work!",
  target = "$20K",
  revenue = "$20K",
  today = "$20K",
  targetTrend = "down",
  revenueTrend = "up",
  todayTrend = "up",
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-50 hover:text-slate-600"
          aria-label="More"
        >
          ⋮
        </button>
      </div>

      {/* gauge */}
      <Gauge percent={percent} />

      {/* delta chip */}
      <div className="mt-3 flex justify-center">
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
          {deltaLabel}
        </span>
      </div>

      {/* message */}
      <p className="mx-auto mt-3 max-w-md text-center text-sm leading-6 text-slate-600">
        {message}
      </p>

      {/* divider */}
      <div className="mt-6 h-px w-full bg-slate-100" />

      {/* bottom stats */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Stat label="Target" value={target} trend={targetTrend} />
        <Stat label="Revenue" value={revenue} trend={revenueTrend} />
        <Stat label="Today" value={today} trend={todayTrend} />
      </div>
    </div>
  );
};

export default MonthlyTarget;
