import TableDaftarHadirBalita from "@/components/Tables/TableDaftarHadirBalita";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar Tamu Balita",
  description: "",
};

const TablesPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <TableDaftarHadirBalita />
      </div>
    </>
  );
};

export default TablesPage;
