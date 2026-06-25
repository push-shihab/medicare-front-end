"use client";

import { Pie, PieChart, Sector, Tooltip } from "recharts";

const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ef4444"];

const PieGradient = (props) => {
  const { index, cx, cy, outerRadius, width, height, isActive } = props;
  const color = COLORS[index % COLORS.length];

  return (
    <>
      <defs>
        <radialGradient
          id={`fillGradient${index}`}
          cx={cx}
          cy={cy}
          r={outerRadius}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={color} stopOpacity={0} />
          <stop offset="100%" stopColor={color} stopOpacity={0.85} />
        </radialGradient>
        <radialGradient
          id={`borderGradient${index}`}
          cx={(typeof width === "number" ? width : 0) / 2}
          cy={(typeof height === "number" ? height : 0) / 2}
        >
          <stop offset="0%" stopColor={color} stopOpacity={0} />
          <stop offset="100%" stopColor={color} stopOpacity={0.85} />
        </radialGradient>
        <clipPath id={`clipPath${index}`}>
          <Sector {...props} />
        </clipPath>
      </defs>
      <Sector
        {...props}
        clipPath={`url(#clipPath${index})`}
        fill={`url(#fillGradient${index})`}
        stroke={`url(#borderGradient${index})`}
        strokeWidth={isActive ? "100%" : 0}
      />
    </>
  );
};

export default function AllStatsPieChart({
  isAnimationActive = true,
  defaultIndex,
  doctors,
  patients,
  appointments,
  reviews,
}) {
  const data = [
    { name: "Doctors", value: doctors.length },
    { name: "Patients", value: patients.length },
    { name: "Appointments", value: appointments.length },
    { name: "Reviews", value: reviews.length },
  ];
  return (
    <main className="bg-white border border-slate-200/80 rounded-[20px] p-6 shadow-sm shadow-slate-100/40">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          background: "#F8FAFC",
          border: "1px solid #ddd",
          borderRadius: "20px",
        }}
      >
        <h2
          style={{
            marginBottom: "1rem",
            fontFamily: "sans-serif",
            fontSize: "1.25rem",
            fontWeight: 600,
          }}
        >
          Hospital Dashboard Overview
        </h2>

        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            isAnimationActive={isAnimationActive}
            shape={PieGradient}
            innerRadius="20%"
          />
          <Tooltip
            defaultIndex={defaultIndex}
            formatter={(value, name) => [value.toLocaleString(), name]}
          />
        </PieChart>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          {data.map((entry, index) => (
            <div
              key={entry.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "sans-serif",
                fontSize: "0.9rem",
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: COLORS[index],
                  display: "inline-block",
                }}
              />
              <span style={{ color: "#555" }}>{entry.name}:</span>
              <strong>{entry.value.toLocaleString()}</strong>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
