import React from "react";
import CardDetail from "../ui/CardDetail";

const DataIbu = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6  md:grid-cols-2">
        <div>
          <div className="mb-4">
            <CardDetail label="Nomor Kartu Keluarga">3522010503102</CardDetail>
          </div>

          <div className="mb-4">
            <CardDetail label="NIK">352201050223102</CardDetail>
          </div>

          <div className="mb-4">
            <CardDetail label="Nama Lengkap">Siti Nurhalimah</CardDetail>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <CardDetail label="Tempat">Bandung</CardDetail>
            </div>
            <div className="mb-4">
              <CardDetail label="Tanggal Lahir">30 Agustus 1990</CardDetail>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <CardDetail label="Nomor Telepon">081234567890</CardDetail>
          </div>

          <div className="mb-4">
            <CardDetail label="Jenis KB">Suntik</CardDetail>
          </div>

          <div className="mb-4">
            <CardDetail label="Golongan Darah">A</CardDetail>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataIbu;
