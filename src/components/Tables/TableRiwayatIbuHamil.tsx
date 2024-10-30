"use client";
import React from "react";

const TableRiwayatBalita = () => {
  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">Tanggal Pengukuran</th>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">BB (Kg)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">TB (Cm)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">Lila (Cm)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">TFU (Cm)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">HB (mg/dl)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">Tablet Fe</th>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">KAR</th>
                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">Petugas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {/* Data Pengukuran */}
              {dataPengukuran.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.no}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.tanggal}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.bb}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.tb}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.lila}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.tfu}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.hb}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.fe}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.kar}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">{item.petugas}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Sebelumnya
            </button>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-purple-500 text-white rounded">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                3
              </button>
            </div>
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Selanjutnya
            </button>
          </div>
    </div>
  );
};

// Data Pengukuran Dummy
const dataPengukuran = [
  { no: 1, tanggal: "12 September 2024", bb: 12, tb: 20, lila: 3, tfu: 6, hb: 6, fe: "Iya", kar: 6, petugas: "Siti Ahyani" },
  { no: 2, tanggal: "1 September 2024", bb: 12, tb: 20, lila: 3, tfu: 6, hb: 6, fe: "Iya", kar: 6, petugas: "Siti Ahyani" },
  { no: 3, tanggal: "12 Agustus 2024", bb: 12, tb: 20, lila: 3, tfu: 6, hb: 6, fe: "Iya", kar: 6, petugas: "Yovita Nanda" },
  { no: 4, tanggal: "1 Agustus 2024", bb: 12, tb: 20, lila: 3, tfu: 6, hb: 6, fe: "Iya", kar: 6, petugas: "Yovita Nanda" },
  { no: 5, tanggal: "12 Juli 2024", bb: 12, tb: 20, lila: 3, tfu: 6, hb: 6, fe: "Iya", kar: 6, petugas: "Risma Tahmidi" },
  { no: 6, tanggal: "1 Juli 2024", bb: 12, tb: 20, lila: 3, tfu: 6, hb: 6, fe: "Iya", kar: 6, petugas: "Risma Tahmidi" },
  { no: 7, tanggal: "12 Juni 2024", bb: 12, tb: 20, lila: 3, tfu: 6, hb: 6, fe: "Iya", kar: 6, petugas: "Willa Wikarsi" },
  { no: 8, tanggal: "1 Juni 2024", bb: 12, tb: 20, lila: 3, tfu: 6, hb: 6, fe: "Iya", kar: 6, petugas: "Willa Wikarsi" }
];


export default TableRiwayatBalita;