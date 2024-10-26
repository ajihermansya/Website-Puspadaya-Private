import TableOrangTua from "@/components/Tables/TableOrangTua";
import TablePuskesmas from "@/components/Tables/TablePuskesmas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Puskesmas",
  description: "Data Puskesmas Page",
};

const Page = () => {
  return (
    <>
      <div className="container mx-auto">
        <TablePuskesmas />
      </div>
    </>
  );
};

export default Page;
