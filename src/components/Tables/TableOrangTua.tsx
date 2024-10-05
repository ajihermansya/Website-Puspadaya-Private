"use client";
import React from "react";
import { OrangTua } from "@/types/orang-tua";
import ButtonLink from "../ui/Button";
import { SvgDetailOrangTua } from "../ui/Svg";

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

const TableOrangTua = () => {
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[60px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                No
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                Nomor KK
              </th>
              <th className="min-w-[160px] px-4 py-4 font-medium text-dark dark:text-white">
                Nama Ayah
              </th>
              <th className="min-w-[160px] px-4 py-4 font-medium text-dark dark:text-white">
                Nama Ibu
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                Jumlah Balita
              </th>
              <th className="px-4 py-4 pr-7 text-right font-medium text-dark dark:text-white xl:pr-14">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {dataOrangTua.map((item, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === dataOrangTua.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{index + 1}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dataOrangTua.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.nomorKK}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dataOrangTua.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">{item.namaAyah}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dataOrangTua.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">{item.namaIbu}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dataOrangTua.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <p className="inline-flex rounded-full bg-gray-2 px-3 py-1 text-body-sm font-medium text-dark dark:bg-dark-3 dark:text-white">
                    {item.jumlahBalita} Balita
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 text-right dark:border-dark-3 ${
                    index === dataOrangTua.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <ButtonLink
                    href={`data-keluarga/data-orang-tua/${item.nomorKK}`}
                    className="bg-[#486284] hover:bg-[#405672] focus-visible:ring-[#405672]"
                  >
                    <div className="flex items-center gap-1">
                      <SvgDetailOrangTua />
                      <span>Lihat Detail</span>
                    </div>
                  </ButtonLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOrangTua;
