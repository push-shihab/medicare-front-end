"use client";

import {
  Bar,
  BarChart,
  Rectangle,
  Tooltip,
  usePlotArea,
  XAxis,
  YAxis,
} from "recharts";

const AnimatedShape = (props) => {
  return (
    <>
      <Rectangle {...props} fill="transparent" />
      <Rectangle
        {...props}
        fill="#0EA5E9"
        style={{
          transform: props.isActive ? undefined : `scaleX(20%)`,
          transformOrigin: `${props.x}px center`,
          transition: "all 0.2s ease-out",
          pointerEvents: "none",
        }}
      />
    </>
  );
};

const BottomTooltip = ({ defaultIndex }) => {
  const plotArea = usePlotArea();
  if (plotArea == null) return null;

  return (
    <Tooltip
      defaultIndex={defaultIndex}
      cursor={false}
      position={{ y: plotArea.y + plotArea.height - 100 }}
      formatter={(value) => [`${value} / 5.0`, "Rating"]}
    />
  );
};

export default function DoctorRatingChart({
  isAnimationActive = true,
  defaultIndex,
  doctors,
}) {
  const data = [];
  const data1 = doctors.map((doctor) =>
    data.push({ name: doctor.doctorName, rating: doctor.rating }),
  );

  return (
    <main className="bg-white border border-slate-200/80 rounded-[20px] p-6 shadow-sm shadow-slate-100/40">
      <div className="pb-8">
        <h1 className=" font-bold text-2xl">Doctor Performance</h1>
        <p className="text-[12px] font-medium text-sky-300">
          Based on average rating
        </p>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          background: "#F8FAFC",
          border: "1px solid #ddd",
          borderRadius: "20px",
        }}
      >
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          barCategoryGap={4}
        >
          <XAxis
            dataKey="name"
            mirror
            padding={{ right: 30 }}
            interval={0}
            tick={{ fontSize: 11 }}
          />
          <YAxis
            mirror
            orientation="right"
            tickLine={false}
            domain={[0, 5]}
            tick={{ angle: 90, textAnchor: "start" }}
            padding={{ bottom: 30 }}
          />
          <Bar
            dataKey="rating"
            isAnimationActive={isAnimationActive}
            activeBar={AnimatedShape}
            shape={AnimatedShape}
            label={{
              fill: "white",
              position: "insideTopRight",
              angle: 90,
              textAnchor: "start",
            }}
          />
          <BottomTooltip defaultIndex={defaultIndex} />
        </BarChart>
      </div>
    </main>
  );
}
