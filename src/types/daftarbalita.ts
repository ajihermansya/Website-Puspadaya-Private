// Definisi enum untuk kehadiran
enum Kehadiran {
  Hadir = "Hadir",
  KunjunganHadir = "KunjunganHadir",
  KunjunganTidakHadir = "KunjunganTidakHadir",
  Izin = "Izin",
}

// Definisi type untuk daftarBalita
export type DaftarBalita = {
  id: number;
  namaIbu: string;
  namaBalita: string;
  absensi: {
    jan?: Kehadiran[]; // Absensi untuk bulan Januari, array dari enum Kehadiran
    feb?: Kehadiran[]; // Contoh untuk bulan Februari (opsional)
    mar?: Kehadiran[];
    apr?: Kehadiran[];
    mei?: Kehadiran[];
    jun?: Kehadiran[];
    jul?: Kehadiran[];
    ags?: Kehadiran[];
    sep?: Kehadiran[];
    okt?: Kehadiran[];
    nov?: Kehadiran[];
    des?: Kehadiran[];
  };
};
