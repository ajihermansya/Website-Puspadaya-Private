import Link from "next/link";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { FileUpload } from "primereact/fileupload";
import { Image } from "primereact/image";
import React from "react";

const ImportCsv = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
      {/* Left Column - Instructions */}
      <div className="p-4">
        <h2 className="mb-4 text-base font-medium">
          Panduan Membuat Akun Anggota Menggunakan File CSV/XLSX
        </h2>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gray-100 text-sm">
              1
            </div>
            <div>
              <p className="font-medium">
                Siapkan Data dalam Format CSV atau XLSX
              </p>
              <p className="text-sm text-gray-500">
                Pastikan file yang akan digunakan memiliki format .csv atau
                .xlsx
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gray-100 text-sm">
                2
              </div>
              <div>
                <p className="font-medium">
                  Isi Data Sesuai Kolom yang Ditentukan
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
                  <li>Kolom pertama: nama (isi dengan nama lengkap)</li>
                  <li>
                    Kolom kedua: No. Telepon (isi dengan nomor telepon tanpa
                    spasi atau simbol)
                  </li>
                  <li>
                    Kolom ketiga: Email (isi dengan alamat email yang valid)
                  </li>
                </ul>
                <div className="mt-2">
                  <span className="text-sm font-medium">
                    Contoh format tabel:{" "}
                  </span>
                  <Link
                    href={"/data/data-anggota/import"}
                    className="p-0 text-sm text-blue-600 underline"
                  >
                    Download file Disini
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 flex justify-center">
            <Image
              src="/images/cards/cards-02.png"
              alt="Image"
              preview
              className="w-10/12"
            />
          </div>

          <div className="flex gap-3">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gray-100 text-sm">
              3
            </div>
            <div>
              <p className="font-medium">Simpan File</p>
              <p className="text-sm text-gray-500">
                Setelah mengisi data, simpan file dalam format .csv atau .xlsx
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gray-100 text-sm">
              4
            </div>
            <div>
              <p className="font-medium">Unggah File</p>
              <p className="text-sm text-gray-500">
                Klik atau seret file ke area ini untuk mengunggah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Upload Area */}
      <div className="p-4">
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gray-100 text-sm">
              5
            </div>
            <p className="font-medium">
              Unggah file data anggota (format: CSV atau XLSX)
            </p>
          </div>

          <FileUpload
            mode="basic"
            name="file"
            url="/api/upload"
            accept=".csv,.xlsx"
            maxFileSize={1000000}
            chooseLabel="Klik atau seret file ke area ini untuk mengunggah"
            className="upload-custom"
          />

          <Card className="border-none bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                <i className="pi pi-check text-sm text-white"></i>
              </div>
              <span className="text-sm">Data Akun Kabupaten Banyuwangi</span>
            </div>
          </Card>

          <div className="mt-6 w-full">
            <Button
              type="submit"
              className="flex  w-full justify-center border-none bg-[#486284] py-2 hover:bg-[#3c526e]"
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportCsv;
