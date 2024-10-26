"use client";
import React from "react";

const TableRiwayatBalita = () => {
  return (
    <div className="mt-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">
              No
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">
              Tanggal Pengukuran
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">
              BB (Kg)
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">
              TB (Cm)
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">
              Lila (Cm)
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">
              LP (Cm)
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">
              Petugas
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">
              Status Gizi
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-black">
              Faktor Resiko
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">
              1
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-xs text-black">
              17 Mei 2020
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-xs text-black">
              12 Kg
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-xs text-black">
              20 Cm
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-xs text-black">
              Gizi Baik
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-xs font-medium text-black">
              2
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-xs text-black">
              18 Mei 2021
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-xs text-black">
              13 Kg
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-xs text-black">
              22 Cm
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-xs text-black">
              Gizi Baik
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRiwayatBalita;
