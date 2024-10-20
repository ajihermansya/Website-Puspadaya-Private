"use client";
import TableRiwayatBalita from "@/components/Tables/TableRiwayatBalita";

import React from "react";
import StatusStuntingBalita from "./StatusStantingBalita";
import DataDiriKeluarga from "./DataDiriKeluarga";
import GrafikTumbuhKembangBalita from "../Charts/GrafikTumbuhKembangBalita";


const DetailRiwayatBalita = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      {/* Data Diri Keluarga */}
      <DataDiriKeluarga />

      {/* Status Stunting dan Gizi Balita */}
      <StatusStuntingBalita />

      {/* Grafik */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">Weight-for-age BOYS</h2>
        <p className="text-sm font-light text-gray-500">
          Birth to 6 months (z-scores)
        </p>
        <div style={{ width: "80%", margin: "0 auto", paddingTop: "10px" }}>
          <GrafikTumbuhKembangBalita />
        </div>
      </div>

      {/* Tabel Riwayat Balita */}
      <TableRiwayatBalita />
    </div>
  );
};

export default DetailRiwayatBalita;
