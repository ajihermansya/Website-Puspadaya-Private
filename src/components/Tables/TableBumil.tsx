"use client";
import React, { useState } from "react";
import ButtonLink from "../ui/ButtonLink";
import { Bumil } from "@/types/bumil";
import { DataTable } from "primereact/datatable";
import { Column, ColumnBodyOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import {
  IconEye,
  IconPencil,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";
import {
  CascadeSelect,
  CascadeSelectChangeEvent,
} from "primereact/cascadeselect";
import "./style.css";
import Link from "next/link";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

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

const TableBumil = () => {
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
      <h2 className="pb-1 text-2xl font-bold text-black">Data Ibu Hamil</h2>
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
            className="md:w-14rem flex h-11 w-full items-center"
            breakpoint="767px"
            placeholder="Select a City"
            style={{ minWidth: "14rem" }}
          />
        </div>
        <ButtonLink
          href={`/data-keluarga/data-bumil/create`}
          className="h-11 bg-[#486284] hover:bg-[#405672] focus-visible:ring-[#405672]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4286 1.42857C11.4286 0.639593 10.789 0 10 0C9.21103 0 8.57143 0.639593 8.57143 1.42857V8.57143H1.42857C0.639593 8.57143 0 9.21103 0 10C0 10.789 0.639593 11.4286 1.42857 11.4286H8.57143V18.5714C8.57143 19.3604 9.21103 20 10 20C10.789 20 11.4286 19.3604 11.4286 18.5714V11.4286H18.5714C19.3604 11.4286 20 10.789 20 10C20 9.21103 19.3604 8.57143 18.5714 8.57143H11.4286V1.42857Z"
              fill="#fff"
            />
          </svg>
        </ButtonLink>
      </div>
    </div>
  );

  const indexTemplate = (data: any, options: ColumnBodyOptions) => {
    return <span className="text-center">{options.rowIndex + 1}</span>;
  };

  const actionBodyTemplate = (rowData: Bumil) => {
    return (
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Link href={`/data-keluarga/data-bumil/${rowData.nik}`} passHref>
          <IconEye style={{ color: "green", cursor: "pointer" }} />
        </Link>
        <Link href={`/data-keluarga/data-bumil/${rowData.nik}/edit`} passHref>
          <IconPencil style={{ color: "purple", cursor: "pointer" }} />
        </Link>
        <IconTrash
          onClick={() => confirmDelete()}
          style={{ color: "red", cursor: "pointer" }}
        />
      </div>
    );
  };

  const confirmDelete = () => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept,
    });
  };

  const accept = () => {
    alert("Sukses  Dihapus");
  };

  const dummyDataBumil: Bumil[] = [
    {
      nik: "3201234567890123",
      nama: "Ani Lestari",
      usiaKehamilan: "24 minggu",
      posyandu: "Posyandu Mawar",
    },
    {
      nik: "3209876543210987",
      nama: "Rina Kusuma",
      usiaKehamilan: "16 minggu",
      posyandu: "Posyandu Mawar",
    },
    {
      nik: "3212345678901234",
      nama: "Siti Fatimah",
      usiaKehamilan: "32 minggu",
      posyandu: "Posyandu Mawar",
    },
    {
      nik: "3207654321098765",
      nama: "Dewi Kartika",
      usiaKehamilan: "20 minggu",
      posyandu: "Posyandu Mawar",
    },
    {
      nik: "3203456789012345",
      nama: "Maya Sari",
      usiaKehamilan: "28 minggu",
      posyandu: "Posyandu Mawar",
    },
    {
      nik: "3210987654321098",
      nama: "Nina Andriani",
      usiaKehamilan: "12 minggu",
      posyandu: "Posyandu Mawar",
    },
    {
      nik: "3208765432109876",
      nama: "Putri Mawar",
      usiaKehamilan: "24 minggu",
      posyandu: "Posyandu Mawar",
    },
    {
      nik: "3204567890123456",
      nama: "Rani Utami",
      usiaKehamilan: "36 minggu",
      posyandu: "Posyandu Mawar",
    },
    {
      nik: "3211234567890123",
      nama: "Lina Apriani",
      usiaKehamilan: "16 minggu",
      posyandu: "Posyandu Mawar",
    },
    {
      nik: "3205678901234567",
      nama: "Sari Melati",
      usiaKehamilan: "20 minggu",
      posyandu: "Posyandu Mawar",
    },
  ];

  const usiaTemplate = (data: Bumil, options: ColumnBodyOptions) => {
    return (
      <span className="inline-flex rounded-full bg-gray-2 px-3 py-1 text-body-sm font-medium text-dark dark:bg-dark-3 dark:text-white">
        {data.usiaKehamilan}
      </span>
    );
  };

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <div className="rounded-lg ">
          <ConfirmDialog />
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
              field="posyandu"
              header="Posyandu"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              style={{ minWidth: "10rem" }}
            />

            <Column
              field="usiaKehamilan"
              header="Usia Kehamilan"
              sortable
              headerClassName="bg-[#F7F9FC] text-black"
              body={usiaTemplate}
              style={{ minWidth: "10rem" }}
            />

            <Column
              header="Aksi"
              headerClassName="bg-[#F7F9FC] text-black rounded-r-lg text-center"
              body={actionBodyTemplate}
              style={{ minWidth: "5rem" }}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default TableBumil;
