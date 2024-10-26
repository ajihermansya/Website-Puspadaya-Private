import { useState } from "react";
import { IconCaretDown } from "@tabler/icons-react";

const factors = [
  {
    title: "Senin, 15 April 2024",
    waktu: "Senin, 15 April 2024",
    petugas: "Tanaya Suma",
    status: "Balita sudah diberi PMT",
  },
  {
    title: "Selasa, 16 April 2024",
    waktu: "Selasa, 16 April 2024",
    petugas: "Tanaya Suma",
    status: "Balita sudah diberi PMT",
  },
  {
    title: "Rabu, 17 April 2024",
    waktu: "Rabu, 17 April 2024",
    petugas: "Tanaya Suma",
    status: "Balita sudah diberi PMT",
  },
  {
    title: "Kamis, 18 April 2024",
    waktu: "Kamis, 18 April 2024",
    petugas: "Tanaya Suma",
    status: "Balita sudah diberi PMT",
  },
];

const DropdownIntervensi = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-2">
      {factors.map((factor, index) => (
        <div key={index} className="relative mt-2 p-2">
          <div className="flex flex-col rounded-lg bg-white p-3 shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-800">
                {factor.title}
              </h3>
              <button
                onClick={() => toggleDropdown(index)}
                className="text-gray-600 focus:outline-none"
              >
                <IconCaretDown />
              </button>
            </div>
            {openIndex === index && (
              <div className="mb-4">
                <label className="text-sm text-gray-700">Waktu Pemberian</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                  value={factor.waktu}
                  readOnly
                />
                <label className="text-sm text-gray-700">Nama Petugas</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md bg-gray-100 p-2 focus:outline-none"
                  value={factor.petugas}
                  readOnly
                />
                <input
                  type="text"
                  className="mt-2 inline-block rounded-lg bg-green-100 px-3 py-2 text-green-700"
                  value={factor.status}
                  readOnly
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownIntervensi;
