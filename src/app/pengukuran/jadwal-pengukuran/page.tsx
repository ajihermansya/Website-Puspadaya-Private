"use client";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const TablesPage = () => {
  const [waktuMulai, setWaktuMulai] = useState<string>("");
  const [waktuSelesai, setWaktuSelesai] = useState<string>("");

  const [formData, setFormData] = useState({
    posyandu: "",
    waktuMulai: null,
    waktuSelesai: null,
    lokasi: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCalendarChange = (e: any, type: string) => {
    const selectedDate: Date = e.value;
    const dateString = selectedDate ? selectedDate.toISOString() : "";
    if (type === "start") {
      setWaktuMulai(dateString);
    } else if (type === "end") {
      setWaktuSelesai(dateString);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log(formData);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="mb-2 rounded-lg bg-white p-6 shadow-lg">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Jadwal Pemeriksaan
          </h1>
          <h5 className="text-lg text-gray-600">
            Atur Waktu Pemeriksaan untuk Cek Kesehatan Berkala!
          </h5>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="posyandu"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Posyandu
                </label>
                <InputText
                  id="posyandu"
                  name="posyandu"
                  value={formData.posyandu}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Posyandu Mawar 6"
                  readOnly
                />
              </div>

              <div>
                <label
                  htmlFor="lokasi"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Lokasi
                </label>
                <InputText
                  id="lokasi"
                  name="lokasi"
                  value={formData.lokasi}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Lokasi Pemeriksaan"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="calendar-start"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Waktu Mulai
                </label>
                <Calendar
                  placeholder="Waktu Mulai"
                  value={waktuMulai ? new Date(waktuMulai) : null}
                  onChange={(e) => handleCalendarChange(e, "start")}
                  showTime
                  hourFormat="24"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="calendar-end"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Waktu Selesai
                </label>
                <Calendar
                  placeholder="Waktu Selesai"
                  value={waktuSelesai ? new Date(waktuSelesai) : null}
                  onChange={(e) => handleCalendarChange(e, "end")}
                  showTime
                  hourFormat="24"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {/* Tombol di tengah */}
              <div className="mt-8 flex justify-center md:col-span-2">
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
    </>
  );
};

export default TablesPage;
