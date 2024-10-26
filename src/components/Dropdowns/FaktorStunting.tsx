import { useState } from "react";
import { IconCaretDown, IconCaretUp } from "@tabler/icons-react";

const factors = [
  {
    title: "Ketersediaan Air Bersih",
    description:
      "Berdasarkan hasil Studi Kualitas Air Minum Rumah Tangga (SKAMRT) dari Kementerian Kesehatan pada tahun 2020 menyatakan bahwa 7 dari 10 rumah tangga Indonesia mengonsumsi air minum yang terkontaminasi bakteri Escherichia coli (E-coli). Mengingat air juga merupakan komponen utama penyusun tubuh manusia, ancaman krisis air bersih dan layak minum sudah seharusnya menjadi perhatian. Namun di Indonesia, menurut Kementerian Perencanaan Pembangunan Nasional menjelaskan bahwa capaian sanitasi aman Indonesia masih sangat rendah. Angka sanitasi aman Indonesia yaitu baru mencapai 7% di tahun 2020.",
    icon: (
      <img
        src="/images/menus/water.svg"
        alt="Water"
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Penyakit Penyerta Balita",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/Daze.svg"
        alt="Daze"
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Jamban Sehat",
    description:
      "Pentingnya penggunaan jamban sehat adalah untuk mencegah penyebaran penyakit melalui air dan menjaga kebersihan lingkungan. Jamban sehat harus memenuhi standar dan persyaratan kesehatan, serta mudah dijangkau oleh penghuni rumah. Berdasarkan Permenkes No. 3 Tahun 2014 tentang STBM bahwa kondisi jamban yang saniter merupakan kondisi fasilitas sanitasi yang memenuhi standar dan persyaratan kesehatan yaitu:a.  Tidak mengakibatkan terjadinya penyebaran langsung bahan-bahan yang berbahaya bagi manusia akibat pembuangan kotoran manusia; dan b.  Dapat mencegah vektor pembawa penyakit untuk menyebarkan penyakit pada pemakai dan lingkungan sekitarnya.",
    icon: (
      <img
        src="/images/menus/jamban.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Penyakit Infeksi",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/infeksi.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Imunisasi",
    description:
      "Pelaksanaan imunisasi kejar atau catch-up immunization perlu dipahami oleh klinisi dengan baik agar perlindungan optimal terhadap penyakit menular dapat tercapai, termasuk pada anak yang belum atau terlambat mendapatkan imunisasi. Pada dasarnya, imunisasi perlu diberikan sesuai dengan jadwal yang telah ditentukan. Namun, banyak kondisi yang menyebabkan anak tidak mendapatkan imunisasi sesuai dengan jadwal yang ditentukan. Berdasarkan data Riset Kesehatan Dasar (Riskesdas), terjadi peningkatan prevalensi pneumonia pada populasi balita di Indonesia, yaitu dari 1,6% pada tahun 2013 menjadi 2% pada tahun 2018. Indonesia juga masih termasuk dalam 10 negara dengan kasus difteri tertinggi di dunia pada tahun 2000–2015, dengan angka yang meningkat tiap tahunnya.",
    icon: (
      <img
        src="/images/menus/imunisasi.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "BBLR",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/bblr.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Merokok (Keluarga)",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/rokok.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Gangguan Tumbuh Kembang",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/gangguan.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Kecacingan",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/cacing.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Kemiskinan",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/miskin.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Riwayat Kehamilan Ibu",
    description:
      "Riwayat kehamilan ibu dapat dikaji pada Pengukuran obstetri pertama kali. Anamnesis pada ibu hamil meliputi: Identitas dan biodata ibu dan suami, Keluhan ibu, Penerimaan ibu terhadap kehamilannya, Ketidaknyamanan ibu akibat kehamilan. Selain itu, anamnesa juga dapat mencakup riwayat keluarga, seperti: Adakah penyakit keturunan dalam keluarga, Adakah riwayat anak kembar. Riwayat kehamilan yang bermasalah sebelumnya dapat berdampak negatif pada kehamilan berikutnya. Misalnya, riwayat kelahiran prematur dapat memicu gangguan pernapasan pada bayi dan berat badan lahir rendah (BBLR).",
    icon: (
      <img
        src="/images/menus/hamil.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "MPASI",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/mpasi.svg"
        alt=""
        width={20}
        height={20}
        className="fill-current"
      />
    ),
  },
  {
    title: "Resiko 4T",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/4t.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Kurangnya Pengetahuan Gizi",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/book.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Kepesertaan KB (Setelah Melahirkan)",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/kb.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "PHBS Kurang Optimal",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/phbs.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
  {
    title: "Pola Asuh yang Kurang Tepat",
    description: "No Description",
    icon: (
      <img
        src="/images/menus/asuh.svg"
        alt=""
        width={30}
        height={30}
        className="fill-current"
      />
    ),
  },
];

const FaktorStunting = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-2">
      {factors.map((factor, index) => (
        <div key={index} className="relative mt-2 p-2">
          <div className="flex flex-col rounded-lg bg-white p-3 shadow-md">
            <div className="flex items-start">
              <div className="mr-4 text-4xl text-blue-500">{factor.icon}</div>
              <div className="flex flex-grow items-center justify-between">
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
            </div>
            {openIndex === index && (
              <div className="mb-4">
                <p>{factor.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaktorStunting;
