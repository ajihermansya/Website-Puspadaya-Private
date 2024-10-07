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
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
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
  mpasi: string;
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
  "Rina Puspita",
];

const Page: React.FC = () => {
  const [timezone, setTimezone] = useState("Asia/Jakarta");
  const [filteredNames, setFilteredNames] = useState<Name[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [ingredient, setIngredient] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");

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
    mpasi: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,

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
        name.toLowerCase().includes(query.toLowerCase()),
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
          Detail Riwayat Pemeriksaan
        </h1>
        <h5 className="text-lg text-gray-600">
        Pantau pertumbuhan balita disini!
        </h5>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            
            <div>
              

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
                    placeholder="Masukkan Berat Badan"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                    Kg
                  </span>
                </div>

                {formData.beratBadan && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Bagaimana Posisi Balita Saat Ditimbang?
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center cursor-pointer">
                        <RadioButton
                          inputId="terlentang"
                          value="terlentang"
                          onChange={(e: RadioButtonChangeEvent) =>
                            setIngredients(e.value)
                          }
                          checked={ingredients === "terlentang"}
                        />
                        <label htmlFor="terlentang" className="ml-2">
                          Terlentang
                        </label>
                      </label>


                      <RadioButton
                        inputId="berdiri"
                        value="berdiri"
                        onChange={(e: RadioButtonChangeEvent) =>
                          setIngredients(e.value)
                        }
                        checked={ingredients === "berdiri"}
                      />
                      <label htmlFor="ingredient4" className="ml-2">
                        Berdiri
                      </label>

                    </div>
                  </div>
                )}

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

              <div>
                <label
                  htmlFor="mpasi"
                  className="mb-1 mt-4 block text-sm font-medium text-gray-700"
                >
                  Apakah Balita Mendapatkan MPASI?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex cursor-pointer items-center">
                    <RadioButton
                      inputId="ingredient2"
                      value="Ya"
                      onChange={(e: RadioButtonChangeEvent) =>
                        setIngredient(e.value)
                      }
                      checked={ingredient === "Ya"}
                    />
                    <label htmlFor="ingredient2" className="ml-2">
                      Ya
                    </label>
                  </label>
                  <label className="flex cursor-pointer items-center">
                    <RadioButton
                      inputId="ingredient2"
                      value="Tidak"
                      onChange={(e: RadioButtonChangeEvent) =>
                        setIngredient(e.value)
                      }
                      checked={ingredient === "Tidak"}
                    />
                    <label htmlFor="ingredient2" className="ml-2">
                      Tidak
                    </label>
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="mpasi"
                  className="mb-1 mt-4 block text-sm font-medium text-gray-700"
                >
                  Apakah Balita Mendapatkan ASI Eksklusif?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex cursor-pointer items-center">
                    <RadioButton
                      inputId="ingredient3"
                      value="ya"
                      onChange={(e: RadioButtonChangeEvent) =>
                        setIngredients(e.value)
                      }
                      checked={ingredients === "ya"}
                    />
                    <label htmlFor="ingredient4" className="ml-2">
                      Ya
                    </label>
                  </label>
                  <label className="flex cursor-pointer items-center">
                    <RadioButton
                      inputId="ingredient5"
                      value="tidak"
                      onChange={(e: RadioButtonChangeEvent) =>
                        setIngredients(e.value)
                      }
                      checked={ingredients === "tidak"}
                    />
                    <label htmlFor="ingredient6" className="ml-2">
                      Tidak
                    </label>
                  </label>
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

              <div className="mt-6 rounded-lg bg-gray-50 p-4 shadow-sm">
                <h2 className="mb-3 text-lg font-medium text-gray-700">
                  Hasil Perhitungan
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-md border border-gray-200 bg-white p-3 shadow-sm">
                    <h3 className="mb-2 text-sm font-medium text-gray-600">
                      Status Gizi
                    </h3>
                    <div className="relative">
                      <InputText
                        id="statusGizi"
                        name="statusGizi"
                        value={formData.statusGizi || ""}
                        onChange={handleInputChange}
                        className="w-full rounded-md border-gray-300 bg-gray-50 p-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Menunggu hasil..."
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="rounded-md border border-gray-200 bg-white p-3 shadow-sm">
                    <h3 className="mb-2 text-sm font-medium text-gray-600">
                      Status Stunting
                    </h3>
                    <div className="relative">
                      <InputText
                        id="statusStunting"
                        name="statusStunting"
                        value={formData.statusStunting || ""}
                        onChange={handleInputChange}
                        className="w-full rounded-md border-gray-300 bg-gray-50 p-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
                className="rounded bg-[#486284] px-20 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-[#3a4f6a]"
              />
            </div>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Page;
