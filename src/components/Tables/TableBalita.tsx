"use client";
import { Balita } from "@/types/balita";
import React, { useState } from "react";
import ButtonLink from "../ui/ButtonLink";
import { SvgDetailOrangTua } from "../ui/Svg";
import { DataTable } from "primereact/datatable";
import { Column, ColumnBodyOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const TableBalita = () => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" },
  ];

  const selectedCountryTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="align-items-center flex">
          <img
            alt={option.name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`flag mr-2 flag-${option.code.toLowerCase()}`}
            style={{ width: "18px" }}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: any) => {
    return (
      <div className="align-items-center flex">
        <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`flag mr-2 flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  const header = (
    <div className="flex flex-wrap items-center justify-end gap-2 py-3">
      <div className="relative max-w-sm">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            type="search"
            placeholder="Search..."
            className="w-[280px] rounded-lg border p-2 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            onInput={(e) =>
              setGlobalFilter((e.target as HTMLInputElement).value)
            }
          />
        </span>
      </div>
      <div>
        <Dropdown
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.value)}
          options={countries}
          optionLabel="name"
          placeholder="Filter Wilayah"
          filter
          valueTemplate={selectedCountryTemplate}
          itemTemplate={countryOptionTemplate}
          className="flex h-10 w-[280px] items-center"
        />
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
              style={{ minWidth: "10rem" }}
            />

            <Column
              field="jenisKelamin"
              header="Jenis Kelamin"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "10rem" }}
            />

            <Column
              field="usia"
              header="Usia"
              sortable
              body={usiaTemplate}
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "10rem" }}
            />

            <Column
              header="Aksi"
              headerClassName="bg-[#F7F9FC] text-black rounded-r-lg text-center"
              body={actionTemplate}
              style={{ minWidth: "5rem" }}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default TableBalita;
