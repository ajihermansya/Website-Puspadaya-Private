"use client";
import { Balita } from "@/types/balita";
import React, { useState } from "react";
import ButtonLink from "../ui/ButtonLink";
import { SvgDetailOrangTua } from "../ui/Svg";
import { DataTable } from "primereact/datatable";
import { Column, ColumnBodyOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconSearch } from "@tabler/icons-react";
import {
  CascadeSelect,
  CascadeSelectChangeEvent,
} from "primereact/cascadeselect";
import "./style.css";

interface City {
  cname: string;
  code: string;
}

interface CountryState {
  name: string;
  cities: City[];
}

interface Country {
  name: string;
  code: string;
  states: CountryState[];
}

const TableBalita = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const countries: Country[] = [
    {
      name: "Banyuwangi",
      code: "BWI",
      states: [
        {
          name: "Kabat",
          cities: [
            { cname: "Kedayunan", code: "A-SY" },
            { cname: "Tambong", code: "A-NE" },
          ],
        },
        {
          name: "Rogojampi",
          cities: [
            { cname: "Brisbane", code: "A-BR" },
            { cname: "Townsville", code: "A-TO" },
          ],
        },
      ],
    },
    {
      name: "Maluku",
      code: "MLK",
      states: [
        {
          name: "A",
          cities: [
            { cname: "A1", code: "C-MO" },
            { cname: "B1", code: "C-QU" },
          ],
        },
      ],
    },
  ];

  const header = (
    <div className="mb-1 flex flex-col md:flex-row md:items-center md:justify-between">
      <h2 className="pb-1 text-2xl font-bold text-black">Data balita</h2>
      <div className="mt-2 flex items-center justify-end space-x-4 md:mt-0">
        <span className="relative flex items-center">
          <IconSearch className="absolute left-3 text-gray-500" />
          <InputText
            type="search"
            onInput={(e) =>
              setGlobalFilter((e.target as HTMLInputElement).value)
            }
            placeholder="Search..."
            className="rounded-lg border border-gray-300 py-2 pl-10 pr-4"
          />
        </span>
        <div>
          <CascadeSelect
            value={selectedCity}
            onChange={(e: CascadeSelectChangeEvent) => setSelectedCity(e.value)}
            options={countries}
            optionLabel="cname"
            optionGroupLabel="name"
            optionGroupChildren={["states", "cities"]}
            className="md:w-14rem w-full"
            breakpoint="767px"
            placeholder="Select a City"
            style={{ minWidth: "14rem" }}
          />
        </div>
      </div>
    </div>
  );

  const indexTemplate = (data: any, options: ColumnBodyOptions) => {
    return <span className="text-center">{options.rowIndex + 1}</span>;
  };

  const actionTemplate = (data: any, options: ColumnBodyOptions) => {
    return (
      <ButtonLink
        href={`/data-keluarga/data-balita/${data.nomorKK}`}
        className="bg-[#486284] hover:bg-[#405672] focus-visible:ring-[#405672]"
      >
        <div className="flex items-center gap-1">
          <SvgDetailOrangTua />
          <span>Lihat Detail</span>
        </div>
      </ButtonLink>
    );
  };

  const usiaTemplate = (data: any, options: ColumnBodyOptions) => {
    return (
      <span className="inline-flex rounded-full bg-gray-2 px-3 py-1 text-body-sm font-medium text-dark dark:bg-dark-3 dark:text-white">
        {data.usia}
      </span>
    );
  };

  const dummyDataBalita: Balita[] = [
    {
      nomorKK: "1234567890123456",
      namaLengkap: "Andi Pratama",
      jenisKelamin: "Laki-laki",
      usia: "2 tahun",
    },
    {
      nomorKK: "1234567890123456",
      namaLengkap: "Putri Santoso",
      jenisKelamin: "Perempuan",
      usia: "4 tahun",
    },
    {
      nomorKK: "9876543210987654",
      namaLengkap: "Bintang Prasetyo",
      jenisKelamin: "Laki-laki",
      usia: "3 tahun",
    },
    {
      nomorKK: "5432167890432156",
      namaLengkap: "Dewi Surya",
      jenisKelamin: "Perempuan",
      usia: "1 tahun",
    },
    {
      nomorKK: "5432167890432156",
      namaLengkap: "Fahri Surya",
      jenisKelamin: "Laki-laki",
      usia: "5 tahun",
    },
    {
      nomorKK: "7654321098765432",
      namaLengkap: "Bagas Hariyanto",
      jenisKelamin: "Laki-laki",
      usia: "3 tahun",
    },
    {
      nomorKK: "7654321098765432",
      namaLengkap: "Rara Hariyanto",
      jenisKelamin: "Perempuan",
      usia: "2 tahun",
    },
    {
      nomorKK: "4567891234567890",
      namaLengkap: "Siti Saputra",
      jenisKelamin: "Perempuan",
      usia: "4 tahun",
    },
    {
      nomorKK: "4567891234567890",
      namaLengkap: "Rizky Saputra",
      jenisKelamin: "Laki-laki",
      usia: "3 tahun",
    },
    {
      nomorKK: "4567891234567890",
      namaLengkap: "Nina Saputra",
      jenisKelamin: "Perempuan",
      usia: "1 tahun",
    },
  ];

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <div className="rounded-lg ">
          <DataTable
            value={dummyDataBalita}
            dataKey="nik"
            paginator
            rows={5}
            rowsPerPageOptions={[20, 40, 60, 80, 100]}
            className="datatable-responsive"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
            emptyMessage="No data available"
            stripedRows
            globalFilter={globalFilter}
            filters={{ global: { value: globalFilter, matchMode: "contains" } }}
            globalFilterFields={["nomorKK", "namaLengkap"]}
            header={header}
            paginatorClassName="bg-gray-50 p-4 mt-4 rounded-lg"
          >
            <Column
              header="No"
              headerStyle={{ height: "54px", width: "4rem" }}
              body={indexTemplate}
              headerClassName="bg-[#F7F9FC] text-black rounded-l-lg"
              className="text-center"
            />

            <Column
              field="nomorKK"
              header="Nomor KK"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "10rem" }}
            />

            <Column
              field="namaLengkap"
              header="Nama Lengkap"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "15rem" }}
            />

            <Column
              field="jenisKelamin"
              header="Jenis Kelamin"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "15rem" }}
            />

            <Column
              field="usia"
              header="Usia"
              sortable
              body={usiaTemplate}
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "15rem" }}
            />

            <Column
              header="Aksi"
              headerClassName="bg-[#F7F9FC] text-black rounded-r-lg text-center"
              body={actionTemplate}
              style={{ minWidth: "15rem" }}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default TableBalita;
