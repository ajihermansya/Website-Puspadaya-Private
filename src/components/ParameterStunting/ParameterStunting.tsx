"use client";
import React, { useState } from "react";
import { Parameter } from "@/types/parameter";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { IconDownload } from "@tabler/icons-react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

interface City {
  name: string;
  code: string;
}

const ParameterStunting = () => {
  const [activeTab, setActiveTab] = useState("laki-laki");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const cities: City[] = [
    { name: "Tinggi Badan (Cm)", code: "TB" },
    { name: "Berat Badan (Cm)", code: "BB" },
  ];

  const header = (
    <div className="relative mb-12 flex items-center justify-between">
      <div>
        <h2 className="pb-1 text-2xl font-bold text-black">
          Parameter Stunting
        </h2>
        <p className="text-sm font-light text-gray-5">
          Untuk menambahkan informasi detail data Faktor Stunting
        </p>
      </div>

      <div className="flex space-x-4">
        <Button
          label="Laki-Laki"
          onClick={() => setActiveTab("laki-laki")}
          className={`w-[186px] border-none py-2 focus:outline-none focus:ring-2 focus:ring-[#347dde]
        ${activeTab === "laki-laki" ? "bg-[#1854a2] text-white" : "bg-[#9bc0ef] text-black"}`}
        />
        <Button
          label="Perempuan"
          onClick={() => setActiveTab("perempuan")}
          className={`w-[186px] border-none py-2 font-normal focus:outline-none focus:ring-2 focus:ring-[#347dde]
        ${activeTab === "perempuan" ? "bg-[#1854a2] text-white" : "bg-[#9bc0ef] text-black"}`}
        />
      </div>

      {/* Tombol Unduh PDF */}
      <div className="absolute right-0 mt-30 flex items-center space-x-4">
        <Dropdown
          value={selectedCity}
          onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Tinggi Badan (Cm)"
          className="h-10 w-[186px] border-none bg-blue-50 text-white focus:outline-none focus:ring-2 focus:ring-gray-500" // Menyesuaikan styling button
          checkmark={true}
          highlightOnSelect={false}
        />

        <Button
          label="Unduh PDF"
          onClick={() => console.log("Unduh PDF")} // Ganti dengan fungsi unduh PDF
          className="w-[186px] border-none bg-gray-400 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <IconDownload />
        </Button>
      </div>
    </div>
  );

  const dummyDataParameter: Parameter[] = [
    {
      umur: 1,
      min3: 44.38,
      min2: 46.27,
      min1: 48.17,
      median: 50.06,
      plus1: 51.96,
      plus2: 53.85,
      plus3: 55.74,
    },
    {
      umur: 2,
      min3: 44.38,
      min2: 46.27,
      min1: 48.17,
      median: 50.06,
      plus1: 51.96,
      plus2: 53.85,
      plus3: 55.74,
    },
    {
      umur: 3,
      min3: 44.38,
      min2: 46.27,
      min1: 48.17,
      median: 50.06,
      plus1: 51.96,
      plus2: 53.85,
      plus3: 55.74,
    },
    {
      umur: 4,
      min3: 44.38,
      min2: 46.27,
      min1: 48.17,
      median: 50.06,
      plus1: 51.96,
      plus2: 53.85,
      plus3: 55.74,
    },
    {
      umur: 5,
      min3: 44.38,
      min2: 46.27,
      min1: 48.17,
      median: 50.06,
      plus1: 51.96,
      plus2: 53.85,
      plus3: 55.74,
    },
    {
      umur: 6,
      min3: 44.38,
      min2: 46.27,
      min1: 48.17,
      median: 50.06,
      plus1: 51.96,
      plus2: 53.85,
      plus3: 55.74,
    },
    {
      umur: 7,
      min3: 44.38,
      min2: 46.27,
      min1: 48.17,
      median: 50.06,
      plus1: 51.96,
      plus2: 53.85,
      plus3: 55.74,
    },
  ];

  const setBackgroundColor = (value: string) => {
    if (["min3", "min2", "plus2", "plus3"].includes(value)) {
      return "bg-red-500 text-white";
    } else if (["min1", "plus1"].includes(value)) {
      return "bg-yellow-500 text-white";
    } else if (value === "median") {
      return "bg-green-500 text-white";
    }
    return "";
  };

  return (
    <div className="mt-8 rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <div className="rounded-lg ">
          <DataTable
            value={dummyDataParameter}
            showGridlines
            className="datatable-responsive"
            emptyMessage="No data available"
            header={header}
          >
            <Column
              field="umur"
              header="Umur (hari)"
              headerStyle={{ height: "54px", width: "10rem" }}
              style={{ minWidth: "8rem" }}
              headerClassName="border px-4 py-2 text-center"
              className="text-center"
            />

            <Column
              field="min3"
              header="-3 SD"
              bodyClassName={setBackgroundColor("min3")}
              headerClassName="border px-4 py-2 text-center"
              style={{ minWidth: "7rem" }}
            />

            <Column
              field="min2"
              header="-2 SD"
              bodyClassName={setBackgroundColor("min2")}
              headerClassName="border px-4 py-2 text-center"
              style={{ minWidth: "7rem" }}
            />

            <Column
              field="min1"
              header="-1 SD"
              bodyClassName={setBackgroundColor("min1")}
              headerClassName="border px-4 py-2 text-center"
              style={{ minWidth: "7rem" }}
            />

            <Column
              field="median"
              header="Median"
              bodyClassName={setBackgroundColor("median")}
              headerClassName="border px-4 py-2 text-center"
              style={{ minWidth: "7rem" }}
            />

            <Column
              field="plus1"
              header="+1 SD"
              bodyClassName={setBackgroundColor("plus1")}
              headerClassName="border px-4 py-2 text-center"
              style={{ minWidth: "7rem" }}
            />

            <Column
              field="plus2"
              header="+2 SD"
              bodyClassName={setBackgroundColor("plus2")}
              headerClassName="border px-4 py-2 text-center"
              style={{ minWidth: "7rem" }}
            />

            <Column
              field="plus3"
              header="+3 SD"
              bodyClassName={setBackgroundColor("plus3")}
              headerClassName="border px-4 py-2 text-center"
              style={{ minWidth: "7rem" }}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default ParameterStunting;
