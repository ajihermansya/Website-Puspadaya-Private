"use client";
import React, { useState } from "react";
import ButtonLink from "../ui/ButtonLink";
import { SvgDetailOrangTua } from "../ui/Svg";
import { Bumil } from "@/types/bumil";
import { DataTable } from "primereact/datatable";
import { Column, ColumnBodyOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";

const TableBumil = () => {
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
        href={`/data-keluarga/data-bumil/${data.nik}`}
        className="bg-[#486284] hover:bg-[#405672] focus-visible:ring-[#405672]"
      >
        <div className="flex items-center gap-1">
          <SvgDetailOrangTua />
          <span>Lihat Detail</span>
        </div>
      </ButtonLink>
    );
  };

  const dummyDataBumil: Bumil[] = [
    {
      nik: "3201234567890123",
      nama: "Ani Lestari",
      usiaKehamilan: "24 minggu",
      tanggalPendampingan: "2024-01-15",
    },
    {
      nik: "3209876543210987",
      nama: "Rina Kusuma",
      usiaKehamilan: "16 minggu",
      tanggalPendampingan: "2024-02-10",
    },
    {
      nik: "3212345678901234",
      nama: "Siti Fatimah",
      usiaKehamilan: "32 minggu",
      tanggalPendampingan: "2024-03-20",
    },
    {
      nik: "3207654321098765",
      nama: "Dewi Kartika",
      usiaKehamilan: "20 minggu",
      tanggalPendampingan: "2024-04-05",
    },
    {
      nik: "3203456789012345",
      nama: "Maya Sari",
      usiaKehamilan: "28 minggu",
      tanggalPendampingan: "2024-05-12",
    },
    {
      nik: "3210987654321098",
      nama: "Nina Andriani",
      usiaKehamilan: "12 minggu",
      tanggalPendampingan: "2024-06-18",
    },
    {
      nik: "3208765432109876",
      nama: "Putri Mawar",
      usiaKehamilan: "24 minggu",
      tanggalPendampingan: "2024-07-02",
    },
    {
      nik: "3204567890123456",
      nama: "Rani Utami",
      usiaKehamilan: "36 minggu",
      tanggalPendampingan: "2024-07-25",
    },
    {
      nik: "3211234567890123",
      nama: "Lina Apriani",
      usiaKehamilan: "16 minggu",
      tanggalPendampingan: "2024-08-15",
    },
    {
      nik: "3205678901234567",
      nama: "Sari Melati",
      usiaKehamilan: "20 minggu",
      tanggalPendampingan: "2024-09-10",
    },
  ];

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <div className="rounded-lg ">
          <DataTable
            value={dummyDataBumil}
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
            globalFilterFields={["nama", "nik"]}
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
              field="nik"
              header="NIK"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "10rem" }}
            />

            <Column
              field="nama"
              header="Nama Lengkap"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "10rem" }}
            />

            <Column
              field="usiaKehamilan"
              header="Usia Kehamilan"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "10rem" }}
            />

            <Column
              field="tanggalPendampingan"
              header="Tgl. Pendampingan"
              sortable
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

export default TableBumil;
