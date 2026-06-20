"use client";
import React, { useState, useMemo } from "react";
import { Select, ListBox } from "@heroui/react";
import { IoSearchOutline } from "react-icons/io5";
import ShowDoctors from "@/components/Shared/showDoctors/ShowDoctors";

const specializationColors = [
  "bg-rose-50 text-rose-500",
  "bg-violet-50 text-violet-500",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-blue-50 text-blue-500",
  "bg-pink-50 text-pink-500",
  "bg-orange-50 text-orange-500",
  "bg-teal-50 text-teal-600",
];

const sortOptions = [
  { id: "rating", label: "Highest Rated" },
  { id: "fee_asc", label: "Price: Low to High" },
  { id: "fee_desc", label: "Price: High to Low" },
  { id: "experience", label: "Most Experienced" },
];

export default function AllDoctorsClient({ allDoctors }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialization, setSpecialization] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  // Build specialization list + color map dynamically from real data
  const { specializations, colorMap } = useMemo(() => {
    const unique = [
      ...new Set(allDoctors.map((d) => d.specialization).filter(Boolean)),
    ];

    const colorMap = {};
    unique.forEach((spec, i) => {
      colorMap[spec] = specializationColors[i % specializationColors.length];
    });

    const specializations = [
      { id: "all", label: "All Specializations" },
      ...unique.map((spec) => ({ id: spec, label: spec })),
    ];

    return { specializations, colorMap };
  }, [allDoctors]);

  const filtered = useMemo(() => {
    let list = [...allDoctors];

    // 1. Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (d) =>
          d.doctorName?.toLowerCase().includes(q) ||
          d.specialization?.toLowerCase().includes(q),
      );
    }

    // 2. Specialization — exact match against real data value
    if (specialization !== "all") {
      list = list.filter((d) => d.specialization === specialization);
    }

    // 3. Sort
    if (sortBy === "rating") {
      list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    } else if (sortBy === "fee_asc") {
      list.sort((a, b) => (a.consultationFee ?? 0) - (b.consultationFee ?? 0));
    } else if (sortBy === "fee_desc") {
      list.sort((a, b) => (b.consultationFee ?? 0) - (a.consultationFee ?? 0));
    } else if (sortBy === "experience") {
      list.sort((a, b) => (b.experience ?? 0) - (a.experience ?? 0));
    }

    return list;
  }, [searchQuery, specialization, sortBy, allDoctors]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 py-8 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[13px] font-semibold tracking-widest text-sky-500 uppercase mb-1">
          Medicare
        </p>
        <h1 className="text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Find a Doctor
        </h1>
        <p className="text-[14px] text-slate-500 mt-1">
          Browse from {allDoctors.length}+ verified specialists across
          Bangladesh
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-3 mb-6">
        {/* Search */}
        <div className="flex-1 relative">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none" />
          <input
            type="text"
            placeholder="Search by name or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-9 pr-3 rounded-xl border border-slate-200 text-[14px] text-slate-800 placeholder:text-slate-400 outline-none focus:border-sky-500 hover:border-sky-300 transition-colors bg-white"
          />
        </div>

        {/* Specialization Select — built from real data */}
        <div className="w-full md:w-[210px]">
          <Select
            selectedKey={specialization}
            onSelectionChange={(key) => setSpecialization(String(key))}
            className="w-full"
          >
            <Select.Trigger className="h-11 w-full rounded-xl border border-slate-200 px-3 text-[14px] text-slate-700 bg-white hover:border-sky-300 focus:border-sky-500 outline-none transition-colors flex items-center justify-between">
              <Select.Value placeholder="All Specializations" />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover className="w-[210px]">
              <ListBox>
                {specializations.map((s) => (
                  <ListBox.Item key={s.id} id={s.id} textValue={s.label}>
                    {s.label}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Sort Select */}
        <div className="w-full md:w-[190px]">
          <Select
            selectedKey={sortBy}
            onSelectionChange={(key) => setSortBy(String(key))}
            className="w-full"
          >
            <Select.Trigger className="h-11 w-full rounded-xl border border-slate-200 px-3 text-[14px] text-slate-700 bg-white hover:border-sky-300 focus:border-sky-500 outline-none transition-colors flex items-center justify-between">
              <Select.Value placeholder="Highest Rated" />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover className="w-[190px]">
              <ListBox>
                {sortOptions.map((s) => (
                  <ListBox.Item key={s.id} id={s.id} textValue={s.label}>
                    {s.label}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-5">
        <p className="text-[13px] text-slate-500">
          Showing{" "}
          <span className="font-bold text-slate-800">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "doctor" : "doctors"}
          {specialization !== "all" && (
            <>
              {" "}
              in{" "}
              <span className="text-sky-600 font-semibold">
                {specialization}
              </span>
            </>
          )}
        </p>
      </div>

      {/* Doctor Cards Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((doctor) => {
            const chipClass =
              colorMap[doctor.specialization] ?? "bg-slate-100 text-slate-600";
            return (
              <ShowDoctors
                key={doctor._id}
                doctor={doctor}
                chipClass={chipClass}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-[18px] font-bold text-slate-700 mb-1">
            No doctors found
          </h3>
          <p className="text-[14px] text-slate-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
