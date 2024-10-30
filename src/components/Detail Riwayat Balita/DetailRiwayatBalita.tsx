"use client";
import TableRiwayatBalita from "@/components/Tables/TableRiwayatBalita";

import React from "react";
import StatusStuntingBalita from "./StatusStantingBalita";
import DataDiriKeluarga from "./DataDiriKeluarga";
import Boy6 from "../Charts/MonitoringStunting/Boy6";
import Boy5 from "../Charts/MonitoringStunting/Boy5";
import Boy2 from "../Charts/MonitoringStunting/Boy2";
import Girl2 from "../Charts/MonitoringStunting/Girl2";
import Girl5 from "../Charts/MonitoringStunting/Girl5";
import Girl6 from "../Charts/MonitoringStunting/Girl6";

const DetailRiwayatBalita = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      {/* Data Diri Keluarga */}
      <DataDiriKeluarga />

      {/* Status Stunting dan Gizi Balita */}
      <StatusStuntingBalita />

      {/* Grafik */}
      {/* Boy 0-2 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">Weight-for-age BOYS</h2>
        <p className="text-sm font-light text-gray-500">
          Birth to 2 years (z-scores)
        </p>
        <div style={{ width: "80%", margin: "0 auto", paddingTop: "10px" }}>
          <Boy2 />
        </div>
      </div>

      {/* Boy 0-5 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">Weight-for-age BOYS</h2>
        <p className="text-sm font-light text-gray-500">
          Birth to 5 years (z-scores)
        </p>
        <div style={{ width: "80%", margin: "0 auto", paddingTop: "10px" }}>
          <Boy5 />
        </div>
      </div>

      {/* Boy 0-6 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">Grafik Tumbuh Kembang Balita</h2>
        <p className="text-sm font-light text-gray-500">
          Birth to 6 months (z-scores)
        </p>
        <div style={{ width: "80%", margin: "0 auto", paddingTop: "10px" }}>
          <Boy6 />
        </div>
      </div>

      {/* Girl 0-2 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">Weight-for-age GIRL</h2>
        <p className="text-sm font-light text-gray-500">
          Birth to 2 years (z-scores)
        </p>
        <div style={{ width: "80%", margin: "0 auto", paddingTop: "10px" }}>
          <Girl2 />
        </div>
      </div>

      {/* Boy 0-5 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">Weight-for-age GIRL</h2>
        <p className="text-sm font-light text-gray-500">
          Birth to 5 years (z-scores)
        </p>
        <div style={{ width: "80%", margin: "0 auto", paddingTop: "10px" }}>
          <Girl5 />
        </div>
      </div>

      {/* Boy 0-6 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">Weight-for-age GIRL</h2>
        <p className="text-sm font-light text-gray-500">
          Birth to 6 months (z-scores)
        </p>
        <div style={{ width: "80%", margin: "0 auto", paddingTop: "10px" }}>
          <Girl6 />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">Riwayat Pengukuran Balita</h2>
      </div>

      {/* Tabel Riwayat Balita */}
      <TableRiwayatBalita />
      <div className="mt-5">
        <p className="text-sm font-light text-gray-500">
          <b>Keterangan :</b><br />
          BB : Berat Badan <br />
          TB : Tinggi Badan <br />
          Lila : Lingkar Lengan Atas <br />
          LP : Lingkar Kepala
        </p>
      </div>
    </div>
  );
};

export default DetailRiwayatBalita;
