"use client";
import React, { useEffect, useState } from "react";
import { Select, ListBox } from "@heroui/react";
import { IoSearchOutline } from "react-icons/io5";
import ShowDoctors from "@/components/Shared/showDoctors/ShowDoctors";
import { useRouter } from "next/navigation";
import PaginationInAllDoctorPage from "./PaginationInAllDoctorPage";

const sortOptions = [
  { id: "rating", label: "Highest Rated" },
  { id: "price-low-high", label: "Price: Low to High" },
  { id: "price-high-low", label: "Price: High to Low" },
  { id: "experience", label: "Most Experienced" },
];

export default function AllDoctorsClient({ allDoctors, params }) {
  const [searchQuery, setSearchQuery] = useState(params.search);
  const [specialization, setSpecialization] = useState(
    params.specialization || "all",
  );
  const [sortBy, setSortBy] = useState(params.sortBy);
  const [page, setPage] = useState(params.page || 1);

  const specializations = [
    { id: "all", label: "All Specializations" },
    { id: "Neurology", label: "Neurology" },
    { id: "Cardiology", label: "Cardiology" },
    { id: "Dermatology", label: "Dermatology" },
    { id: "Pediatrics", label: "Pediatrics" },
  ];
  const router = useRouter();
  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (specialization !== "all") {
      searchParams.set("specialization", specialization);
    }
    if (sortBy) {
      searchParams.set("sortBy", sortBy);
    }
    if (searchQuery) {
      searchParams.set("search", searchQuery);
    }
    if (page) {
      searchParams.set("page", page);
    }
    const path = `?${searchParams.toString()}`;
    router.push(path);
  }, [specialization, router, sortBy, searchQuery, page]);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 py-8 min-h-screen">
      <div className="mb-8">
        <p className="text-[13px] font-semibold tracking-widest text-sky-500 uppercase mb-1">
          Medicare
        </p>
        <h1 className="text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Find a Doctor
        </h1>
        <p className="text-[14px] text-slate-500 mt-1">
          Browse from {allDoctors.paginationResult.length}+ verified specialists
          across Bangladesh
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-3 mb-6">
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

      <div className="max-w-7xl mx-auto mb-5 text-[13px] text-slate-500">
        Showing{" "}
        <span className="font-bold text-slate-800">
          {allDoctors.paginationResult.length}
        </span>{" "}
        {allDoctors.paginationResult.length === 1 ? "doctor" : "doctors"}
        {specialization !== "all" && (
          <>
            {" "}
            in{" "}
            <span className="text-sky-600 font-semibold">{specialization}</span>
          </>
        )}
      </div>

      {allDoctors.paginationResult.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {allDoctors.paginationResult.map((doctor) => (
              <ShowDoctors key={doctor._id} doctor={doctor} />
            ))}
          </div>

          <PaginationInAllDoctorPage
            page={page}
            setPage={setPage}
            allDoctors={allDoctors}
          ></PaginationInAllDoctorPage>
        </>
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
