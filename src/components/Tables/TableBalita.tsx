import { Balita } from "@/types/balita";
import React from "react";
import ButtonLink from "../ui/ButtonLink";
import { SvgDetailOrangTua } from "../ui/Svg";

const TableBalita = () => {
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
                Nama Lengkap
              </th>
              <th className="min-w-[160px] px-4 py-4 font-medium text-dark dark:text-white">
                Jenis Kelamin
              </th>
              <th className="min-w-[120px] px-4 py-4 ps-10 font-medium text-dark dark:text-white">
                Usia
              </th>
              <th className="px-4 py-4 pr-7 text-right font-medium text-dark dark:text-white xl:pr-14">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyDataBalita.map((item, index) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                    index === dummyDataBalita.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{index + 1}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dummyDataBalita.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <h5 className="text-dark dark:text-white">{item.nomorKK}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dummyDataBalita.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">
                    {item.namaLengkap}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dummyDataBalita.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <p className="text-dark dark:text-white">
                    {item.jenisKelamin}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === dummyDataBalita.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <p className="inline-flex rounded-full bg-gray-2 px-3 py-1 text-body-sm font-medium text-dark dark:bg-dark-3 dark:text-white">
                    {item.usia}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 text-right dark:border-dark-3 ${
                    index === dummyDataBalita.length - 1
                      ? "border-b-0"
                      : "border-b"
                  }`}
                >
                  <ButtonLink
                    href={`/data-keluarga/data-balita/${item.nomorKK}`}
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

export default TableBalita;
