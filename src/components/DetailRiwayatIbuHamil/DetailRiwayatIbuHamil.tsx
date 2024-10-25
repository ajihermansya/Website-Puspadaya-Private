"use client";
import TableRiwayatIbuHamil from "@/components/Tables/TableRiwayatIbuHamil";
import React from "react";
// import StatusStuntingBalita from "./StatusStantingBalita";
import DataDiriKeluarga from "./DataDiriKeluarga";
import GrafikTumbuhKembangBalita from "../Charts/GrafikTumbuhKembangBalita";


const DetailRiwayatIbuHamil = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      {/* Data Diri Keluarga */}
      <DataDiriKeluarga />

      {/* Grafik */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">Riwayat Pengukuran</h2>
        <p className="text-sm font-light text-gray-500">
          <b>keterangan :</b><br />
          BB : Berat Badan <br />
          TB : Tinggi Badan <br />
          Lila : Lingkar Lengan Atas <br />
          TFU : Tinggi Fundus Uteri <br />
          HB : Hemoglobin <br />
          KAR : Keterpaparan Asap Rokok
        </p>
      </div>

      {/* Tabel Riwayat Balita */}
      <TableRiwayatIbuHamil />
    </div>
  );
};

export default DetailRiwayatIbuHamil;
