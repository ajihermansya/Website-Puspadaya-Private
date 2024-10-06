"use client";
import { IconCalendarEvent } from "@tabler/icons-react";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useEffect, useState } from "react";

type Name = string;

type FormData = {
  nama: string;
  posyandu: string;
  tanggalPemeriksaan: string;
  tinggiBadan: string;
  beratBadan: string;
  lingkarLenganAtas: string;
  lingkarKepala: string;
  catatan: string;
  keluhan: string;
  statusGizi: string;
  statusStunting: string;
};

const existingNames: Name[] = [
  "Budi Santoso",
  "Siti Aminah",
  "Andi Wijaya",
  "Putri Maharani",
  "Rizky Pratama",
  "Desi Puspitasari",
  "Agus Supriyadi",
  "Lestari Dewi",
  "Bayu Saputra",
  "Ratna Sari",
  "Eko Purwanto",
  "Fitriani Rahma",
  "Teguh Wibowo",
  "Dewi Sartika",
  "Hariyanto Siregar",
  "Lina Kusuma",
  "Wawan Setiawan",
  "Ayu Lestari",
  "Fajar Nugraha",
  "Rina Puspita"
];


const Page: React.FC = () => {
  const [timezone, setTimezone] = useState("Asia/Jakarta");
  const [filteredNames, setFilteredNames] = useState<Name[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    nama: "",
    posyandu: "",
    tanggalPemeriksaan: "",
    tinggiBadan: "",
    beratBadan: "",
    lingkarLenganAtas: "",
    lingkarKepala: "",
    catatan: "",
    keluhan: "",
    statusGizi: "",
    statusStunting: "",
  });


  const getCurrentDateTime = (): string => {
    const now = new Date();
    return now.toLocaleString("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setFormData((prevState) => ({
        ...prevState,
        tanggalPemeriksaan: getCurrentDateTime(),
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [name]: Math.max(0, Number(value))
    }));
  };


  const handleAutoCompleteChange = (e: AutoCompleteChangeEvent) => {
    const { value } = e;
    setFormData((prevState) => ({
      ...prevState,
      nama: value,
    }));
    searchName(value);
  };

  // Search for names
  const searchName = (query: string) => {
    let filtered: Name[];
    if (!query.trim().length) {
      filtered = [];
    } else {
      filtered = existingNames.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredNames(filtered);
    setShowPopup(filtered.length === 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const itemTemplate = (item: string, index: number) => (
    <div key={index}>
      <div className="cursor-pointer px-4 py-2 hover:bg-gray-100">{item}</div>
      {index < filteredNames.length - 1 && (
        <div className="border-b border-gray-200"></div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Pemeriksaan Balita
        </h1>
        <h5 className="text-lg text-gray-600">
          Ukur data balita sesuai dengan informasi yang tepat
        </h5>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="nama"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Nama Lengkap
              </label>
              <AutoComplete
                id="nama"
                name="nama"
                value={formData.nama}
                suggestions={filteredNames}
                completeMethod={(e: AutoCompleteCompleteEvent) =>
                  searchName(e.query)
                }
                onChange={handleAutoCompleteChange}
                className="w-full"
                inputClassName="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                panelClassName="bg-white shadow-lg rounded-md mt-1 border-none"
                placeholder="Masukkan Nama Lengkap"
                itemTemplate={itemTemplate}
              />
              {showPopup && (
                <div className="mt-1 rounded-md bg-red-100 p-2 text-red-700">
                  Nama tidak ditemukan dalam database.
                </div>
              )}

              <div>
                <label
                  htmlFor="posyandu"
                  className="mb-1 mt-4 block text-sm font-medium text-gray-700"
                >
                  Posyandu
                </label>
                <InputText
                  id="posyandu"
                  name="posyandu"
                  value={formData.posyandu}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="Posyandu Mawar 6"
                  readOnly
                />
              </div>

              <div>
                <label
                  htmlFor="tanggalPemeriksaan"
                  className="mb-1 mt-4 block text-sm font-medium text-gray-700"
                >
                  Tanggal Pemeriksaan (Waktu Lokal)
                </label>
                <div className="relative">
                  <InputText
                    id="tanggalPemeriksaan"
                    name="tanggalPemeriksaan"
                    value={formData.tanggalPemeriksaan}
                    className="w-full rounded-md border border-gray-300 p-2 pr-10 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                  <IconCalendarEvent
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="tinggiBadan"
                  className="mb-1 mt-4 block text-sm font-medium text-gray-700"
                >
                  Tinggi Badan
                </label>
                <div className="relative">
                  <InputText
                    type="number"
                    required
                    id="tinggiBadan"
                    name="tinggiBadan"
                    min="0"
                    value={formData.tinggiBadan}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 p-2 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan Tinggi Badan"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                    Cm
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="beratBadan"
                  className="mb-1 mt-4 block text-sm font-medium text-gray-700"
                >
                  Berat Badan
                </label>
                <div className="relative">
                  <InputText
                    type="number"
                    required
                    id="beratBadan"
                    name="beratBadan"
                    value={formData.beratBadan}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 p-2 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                   min="0"
                    placeholder="Masukkan Berat Badan"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                    Kg
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="lingkarLenganAtas"
                  className="mb-1 mt-4 block text-sm font-medium text-gray-700"
                >
                  Lingkar Lengan Atas
                </label>
                <div className="relative">
                  <InputText
                    type="number"
                    required
                    min="0"
                    id="lingkarLenganAtas"
                    name="lingkarLenganAtas"
                    value={formData.lingkarLenganAtas}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 p-2 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                   
                    placeholder="Masukkan Lingkar Lengan Atas"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                    Cm
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="lingkarKepala"
                  className="mb-1 mt-4 block text-sm font-medium text-gray-700"
                >
                  Lingkar Kepala
                </label>
                <div className="relative">
                  <InputText
                    type="number"
                    required
                    id="lingkarKepala"
                    min="0"
                    name="lingkarKepala"
                    value={formData.lingkarKepala}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 p-2 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan Lingkar Kepala"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                    Cm
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="catatan"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Catatan
              </label>
              <InputTextarea
                id="catatan"
                name="catatan"
                value={formData.catatan}
                onChange={handleInputChange}
                rows={5}
                className="w-full rounded-md border border-gray-300 p-1 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan catatan"
              />

              <label
                htmlFor="keluhan"
                className="mb-1 mt-2 block text-sm font-medium text-gray-700"
              >
                Keluhan
              </label>
              <InputTextarea
                id="keluhan"
                name="keluhan"
                value={formData.keluhan}
                onChange={handleInputChange}
                rows={5}
                className="w-full rounded-md border border-gray-300 p-1 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan keluhan"
              />

              <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-sm">
                <h2 className="text-lg font-medium text-gray-700 mb-3">Hasil Perhitungan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-md shadow-sm p-3 border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">Status Gizi</h3>
                    <div className="relative">
                      <InputText
                        id="statusGizi"
                        name="statusGizi"
                        value={formData.statusGizi || ""}
                        onChange={handleInputChange}
                        className="w-full outline-none rounded-md border-gray-300 bg-gray-50 p-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Menunggu hasil..."
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-md shadow-sm p-3 border border-gray-200">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">Status Stunting</h3>
                    <div className="relative">
                      <InputText
                        id="statusStunting"
                        name="statusStunting"
                        value={formData.statusStunting || ""}
                        onChange={handleInputChange}
                        className="w-full outline-none rounded-md border-gray-300 bg-gray-50 p-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Menunggu hasil..."
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="flex justify-center md:col-span-4">
              <Button
                type="submit"
                label="Simpan"
                className="rounded bg-[#486284] px-20 py-2 font-bold text-white hover:bg-[#3a4f6a] transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default Page;