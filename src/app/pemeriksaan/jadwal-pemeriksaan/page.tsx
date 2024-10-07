'use client';
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const TablesPage = () => {
  const [waktuMulai, setWaktuMulai] = useState<string>('');
  const [waktuSelesai, setWaktuSelesai] = useState<string>('');

  const [formData, setFormData] = useState({
    posyandu: "",
    waktuMulai: null,
    waktuSelesai: null,
    lokasi: ""
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
    const dateString = selectedDate ? selectedDate.toISOString() : '';
    if (type === 'start') {
      setWaktuMulai(dateString);
    } else if (type === 'end') {
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
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">Jadwal Pemeriksaan</h1>
          <h5 className="text-lg text-gray-600">Atur Waktu Pemeriksaan untuk Cek Kesehatan Berkala!</h5>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="posyandu" className="block text-sm font-medium text-gray-700 mb-1">Posyandu</label>
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
                <label htmlFor="lokasi" className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
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
                <label htmlFor="calendar-start" className="block text-sm font-medium text-gray-700 mb-1">Waktu Mulai</label>
                <Calendar placeholder="Waktu Mulai" value={waktuMulai ? new Date(waktuMulai) : null} onChange={(e) => handleCalendarChange(e, 'start')} showTime hourFormat="24"  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                           

                
              </div>

              <div>
                <label htmlFor="calendar-end" className="block text-sm font-medium text-gray-700 mb-1">Waktu Selesai</label>
                <Calendar placeholder="Waktu Selesai" value={waktuSelesai ? new Date(waktuSelesai) : null} onChange={(e) => handleCalendarChange(e, 'end')} showTime hourFormat="24"  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                          
              </div>

              {/* Tombol di tengah */}
              <div className="md:col-span-2 flex justify-center mt-8">
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
    </>
  );
};

export default TablesPage;
