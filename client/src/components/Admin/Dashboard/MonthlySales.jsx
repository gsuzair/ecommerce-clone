const MonthlySales = ({
  title = "Monthly Sales",
  data = [150, 360, 180, 290, 170, 185, 275, 95, 200, 350, 260, 100],
  labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  maxY = 400,           // top of y-axis
  gridStep = 100,       // distance between grid lines
}) => {
  const width = 820;    // SVG internal size (not CSS)
  const height = 260;
  const pad = { t: 20, r: 16, b: 42, l: 40 };

  const chartW = width - pad.l - pad.r;
  const chartH = height - pad.t - pad.b;

  const barGap = 14; // px gap between bars
  const barW = chartW / data.length - barGap;

  const scaleY = (v) => Math.max(0, Math.min(1, v / maxY)) * chartH;

  const ticks = [];
  for (let y = 0; y <= maxY; y += gridStep) ticks.push(y);
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm`}>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <button className="h-8 w-8 rounded-full text-slate-400 hover:bg-slate-50">⋮</button>
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full"
          role="img"
          aria-label={title}
        >
          {/* Grid lines */}
          <g transform={`translate(${pad.l}, ${pad.t})`}>
            {ticks.map((t, i) => {
              const y = chartH - (t / maxY) * chartH;
              return (
                <g key={i}>
                  <line
                    x1="0"
                    x2={chartW}
                    y1={y}
                    y2={y}
                    className="stroke-slate-100"
                    strokeWidth="1"
                  />
                </g>
              );
            })}

            {/* Bars */}
            {data.map((v, i) => {
              const h = scaleY(v);
              const x = i * (barW + barGap) + barGap / 2;
              const y = chartH - h;
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={barW}
                  height={h}
                  rx="6"
                  className="fill-indigo-600 hover:opacity-90 transition-opacity"
                >
                  <title>{`${labels[i]}: ${v}`}</title>
                </rect>
              );
            })}

            {/* X labels */}
            {labels.map((lbl, i) => {
              const x = i * (barW + barGap) + barGap / 2 + barW / 2;
              return (
                <text
                  key={i}
                  x={x}
                  y={chartH + 24}
                  textAnchor="middle"
                  className="fill-slate-500 text-[12px]"
                >
                  {lbl}
                </text>
              );
            })}

            {/* Y axis (0 at left) – optional numbers */}
            {/* {ticks.map((t, i) => {
              const y = chartH - (t / maxY) * chartH;
              return (
                <text key={i} x={-10} y={y + 4} textAnchor="end" className="fill-slate-400 text-[11px]">
                  {t}
                </text>
              );
            })} */}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default MonthlySales;