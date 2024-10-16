"use client";
import { IconCaretDown } from "@tabler/icons-react";
import React from "react";

const factors = [
  {
    title: "Ketersediaan Air Bersih",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ...",
    icon: (
      <img
        src="/images/menus/water.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Penyakit Penyerta Balita",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ...",
    icon: (
      <img
        src="/images/menus/Daze.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Jamban Sehat",
    description:
      "Pentingnya penggunaan jamban sehat adalah untuk mencegah penyebaran penyakit melalui air dan menjaga kebersihan lingkungan. Jamban ...",
    icon: (
      <img
        src="/images/menus/jamban.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Penyakit Infeksi",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ...",
    icon: (
      <img
        src="/images/menus/infeksi.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Imunisasi",
    description:
      "Pelaksanaan imunisasi kejar atau catch-up immunization perlu dipahami oleh klinisi dengan baik agar perlindungan optimal terhadap ...",
    icon: (
      <img
        src="/images/menus/imunisasi.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "BBLR",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ...",
    icon: (
      <img
        src="/images/menus/bblr.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Merokok (Keluarga)",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ...",
    icon: (
      <img
        src="/images/menus/rokok.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Gangguan Tumbuh Kembang",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ...",
    icon: (
      <img
        src="/images/menus/gangguan.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Kecacingan",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ...",
    icon: (
      <img
        src="/images/menus/cacing.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Kemiskinan",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ....",
    icon: (
      <img
        src="/images/menus/miskin.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Riwayat Kehamilan Ibu",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ....",
    icon: (
      <img
        src="/images/menus/hamil.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "MPASI",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ....",
    icon: (
      <img
        src="/images/menus/mpasi.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Resiko 4T",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ....",
    icon: (
      <img
        src="/images/menus/4t.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Kurangnya Pengetahuan Gizi",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ....",
    icon: (
      <img
        src="/images/menus/book.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Kepesertaan KB (Setelah Melahirkan)",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ....",
    icon: (
      <img
        src="/images/menus/kb.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "PHBS Kurang Optimal",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ....",
    icon: (
      <img
        src="/images/menus/phbs.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
  {
    title: "Pola Asuh yang Kurang Tepat",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa ....",
    icon: (
      <img
        src="/images/menus/asuh.svg"
        alt=""
        width={75}
        height={75}
        className="fill-current"
      />
    ),
  },
];

const Page: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-2">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="pb-1 text-2xl font-bold text-black">
            Faktor Stunting
          </h2>
          <p className="text-sm font-light text-gray-5">
            Untuk menambahkan informasi detail data Faktor Stunting
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {factors.map((factor, index) => (
          <div
            key={index}
            className="flex items-start rounded-lg bg-white p-6 shadow-md"
          >
            <div className="mr-4 text-4xl text-blue-500">{factor.icon}</div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {factor.title}
              </h3>
              <p className="text-sm font-light text-gray-500">
                {factor.description}
              </p>
            </div>
            <div className="ml-auto">
              <button className="text-gray-600 focus:outline-none">
                <IconCaretDown />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
