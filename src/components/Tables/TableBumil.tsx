import React from "react";
import ButtonLink from "../ui/ButtonLink";
import { SvgDetailOrangTua } from "../ui/Svg";
import { Bumil } from "@/types/bumil";

const TableBumil = () => {
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
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[60px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                No
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                NIK
              </th>
              <th className="min-w-[160px] px-4 py-4 font-medium text-dark dark:text-white">
                Nama Lengkap
              </th>
              <th className="min-w-[140px] px-4 py-4 font-medium text-dark dark:text-white">
                Usia Kehamilan
              </th>
              <th className="min-w-[140px] px-4 py-4 text-center font-medium text-dark dark:text-white">
                Tanggal Pendampingan
              </th>
              <th className="px-4 py-4 pr-7 text-right font-medium text-dark dark:text-white xl:pr-14">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyDataBumil.map((item, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === dummyDataBumil.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{index + 1}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dummyDataBumil.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.nik}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dummyDataBumil.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">{item.nama}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dummyDataBumil.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <p className="inline-flex rounded-full bg-gray-2 px-3 py-1 text-body-sm font-medium text-dark dark:bg-dark-3 dark:text-white">
                    {item.usiaKehamilan}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dummyDataBumil.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <p className="text-center text-dark dark:text-white">
                    {item.tanggalPendampingan}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 text-right dark:border-dark-3 ${
                    index === dummyDataBumil.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <ButtonLink
                    href={`/data-keluarga/data-bumil/${index}`}
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

export default TableBumil;
