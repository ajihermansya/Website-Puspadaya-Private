"use client";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnBodyOptions } from "primereact/column";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto">

      {/* Bagian Detail Riwayat Balita */}
      <div className="mb-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="pb-1 text-2xl font-bold text-black">
            Detail Riwayat Balita
          </h2>
          <p className="text-sm font-light text-gray-500">
            Untuk menambahkan informasi detail data Faktor Stunting
          </p>
        </div>
      </div>

      {/* Data Diri Keluarga */}
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h3 className="pb-4 text-xl font-bold text-black">
          Data Diri Keluarga
        </h3>

        <div className="grid grid-cols-2 gap-6">
          {/* Kiri */}
          <div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                Nomor Kartu Keluarga
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="3201326565656987"
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Nama Ayah</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="Muhammad Mawang"
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Nama Ibu</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="Tiara Andini"
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Alamat</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="mt-1 rounded-md bg-gray-100 p-2 focus:outline-none"
                  value="Kabupaten"
                  readOnly
                />
                <input
                  type="text"
                  className="mt-1 rounded-md bg-gray-100 p-2 focus:outline-none"
                  value="Kecamatan"
                  readOnly
                />
                <input
                  type="text"
                  className="mt-1 rounded-md bg-gray-100 p-2 focus:outline-none"
                  value="Desa"
                  readOnly
                />
                <input
                  type="text"
                  className="mt-1 rounded-md bg-gray-100 p-2 focus:outline-none"
                  value="Dusun / Dati"
                  readOnly
                />
                <input
                  type="text"
                  className="mt-1 rounded-md bg-gray-100 p-2 focus:outline-none"
                  value="RW"
                  readOnly
                />
                <input
                  type="text"
                  className="mt-1 rounded-md bg-gray-100 p-2 focus:outline-none"
                  value="RT"
                  readOnly
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="JL Raya Jember - Banyuwangi KM 13"
                readOnly
              />
            </div>
          </div>

          {/* Kanan */}
          <div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                NIK Balita
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="3201326565656987"
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                Nama Lengkap Balita
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="Soke Bahtera"
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Usia</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="3 Tahun"
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold text-gray-700">Posyandu</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="Posyandu Rogojampi"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Status Stunting dan Gizi Balita */}
      <div className="mt-4 rounded-lg bg-white p-6 shadow-lg">
        <h3 className="pb-4 text-xl font-bold text-black">
          Status Stunting dan Gizi Balita
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Kolom Kiri */}
          <div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                Tanggal Indikasi Stunting
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="17 Mei 2013"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                Berat Badan Saat Ini
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                  value="12"
                  readOnly
                />
                <span className="ml-2 text-gray-700">Kg</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                Tanggal Kelulusan Stunting
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                value="17 Mei 2015"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold text-gray-700">
                Tinggi Badan Saat Ini
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                  value="20"
                  readOnly
                />
                <span className="ml-2 text-gray-700">Cm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-6">
          {/* Status Kelulusan */}
          <div>
            <label className="block font-bold text-gray-700">
              Status Kelulusan
            </label>
            <button className="mt-2 w-full rounded-md bg-green-500 p-2 font-bold text-white">
              LULUS KARENA USIA
            </button>
          </div>
          {/* Status Gizi */}
          <div>
            <label className="block font-bold text-gray-700">Status Gizi</label>
            <button className="mt-2 w-full rounded-md bg-green-500 p-2 font-bold text-white">
              GIZI BAIK
            </button>
          </div>
        </div>
      </div>

      {/* Tabel */}
      <div className="mt-4 rounded-lg border border-stroke bg-white p-4 shadow-lg dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <div className="max-w-full overflow-x-auto">
          <div className="rounded-lg ">
            <DataTable
              // value={dummyDataBalita}
              dataKey="nik"
              paginator
              rows={5}
              rowsPerPageOptions={[20, 40, 60, 80, 100]}
              className="datatable-responsive"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
              emptyMessage="No data available"
              stripedRows
              paginatorClassName="bg-gray-50 p-4 mt-4 rounded-lg"
            >
              <Column
                header="No"
                headerStyle={{ height: "54px", width: "3rem" }}
                // body={indexTemplate}
                headerClassName="bg-[#F7F9FC] text-black rounded-l-lg"
                className="text-center"
              />

              <Column
                // field="nomorKK"
                header="Tanggal Pengukuran"
                headerClassName="bg-[#F7F9FC] text-black"
                style={{ minWidth: "10rem" }}
              />

              <Column
                // field="namaLengkap"
                header="BB (kg)"
                headerClassName="bg-[#F7F9FC] text-black"
                style={{ minWidth: "10rem" }}
              />

              <Column
                // field="jenisKelamin"
                header="TB (Cm)"
                headerClassName="bg-[#F7F9FC] text-black"
                style={{ minWidth: "10rem" }}
              />

              <Column
                // field="usia"
                header="Lila (Cm)"
                // body={usiaTemplate}
                headerClassName="bg-[#F7F9FC] text-black"
                style={{ minWidth: "10rem" }}
              />

              <Column
                // field="usia"
                header="LP (Cm)"
                // body={usiaTemplate}
                headerClassName="bg-[#F7F9FC] text-black"
                style={{ minWidth: "10rem" }}
              />

              <Column
                // field="usia"
                header="Petugas"
                // body={usiaTemplate}
                headerClassName="bg-[#F7F9FC] text-black"
                style={{ minWidth: "10rem" }}
              />

              <Column
                // field="usia"
                header="Status"
                // body={usiaTemplate}
                headerClassName="bg-[#F7F9FC] text-black"
                style={{ minWidth: "10rem" }}
              />

              <Column
                // field="usia"
                header="Faktor Resiko"
                // body={usiaTemplate}
                headerClassName="bg-[#F7F9FC] text-black"
                style={{ minWidth: "10rem" }}
              />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
