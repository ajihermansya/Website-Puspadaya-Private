"use client";
import React, { useState } from "react";
import { OrangTua } from "@/types/orang-tua";
import ButtonLink from "../ui/ButtonLink";
import { SvgDetailOrangTua } from "../ui/Svg";
import { DataTable } from "primereact/datatable";
import { Column, ColumnBodyOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";

const TableOrangTua = () => {
  const [globalFilter, setGlobalFilter] = useState("");

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
    </div>
  );

  const indexTemplate = (data: any, options: ColumnBodyOptions) => {
    return <span className="text-center">{options.rowIndex + 1}</span>;
  };

  const actionTemplate = (data: any, options: ColumnBodyOptions) => {
    return (
      <ButtonLink
        href={`/data-keluarga/data-orang-tua/${data.nomorKK}`}
        className="bg-[#486284] hover:bg-[#405672] focus-visible:ring-[#405672]"
      >
        <div className="flex items-center gap-1">
          <SvgDetailOrangTua />
          <span>Lihat Detail</span>
        </div>
      </ButtonLink>
    );
  };

  const balitaTemplate = (data: any, options: ColumnBodyOptions) => {
    return (
      <span className="inline-flex rounded-full bg-gray-2 px-3 py-1 text-center text-body-sm font-medium text-dark dark:bg-dark-3 dark:text-white">
        {data.jumlahBalita} Balita
      </span>
    );
  };

  const dataOrangTua: OrangTua[] = [
    {
      nomorKK: "1234567890123456",
      namaAyah: "Budi Santoso",
      namaIbu: "Siti Aminah",
      jumlahBalita: 2,
    },
    {
      nomorKK: "9876543210987654",
      namaAyah: "Dedi Prasetyo",
      namaIbu: "Dewi Ratnasari",
      jumlahBalita: 1,
    },
    {
      nomorKK: "5432167890432156",
      namaAyah: "Andi Surya",
      namaIbu: "Rina Widya",
      jumlahBalita: 3,
    },
    {
      nomorKK: "7654321098765432",
      namaAyah: "Teguh Hariyanto",
      namaIbu: "Maya Sari",
      jumlahBalita: 2,
    },
    {
      nomorKK: "4567891234567890",
      namaAyah: "Agus Saputra",
      namaIbu: "Lina Marlina",
      jumlahBalita: 1,
    },
  ];

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <div className="rounded-lg ">
          <DataTable
            value={dataOrangTua}
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
            globalFilterFields={["nomorKK", "namaAyah", "namaIbu"]}
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
              field="namaAyah"
              header="Nama Ayah"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "10rem" }}
            />

            <Column
              field="namaIbu"
              header="Nama Ibu"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "10rem" }}
            />

            <Column
              field="jumlahBalita"
              header="Jumlah Balita"
              sortable
              body={balitaTemplate}
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

export default TableOrangTua;
