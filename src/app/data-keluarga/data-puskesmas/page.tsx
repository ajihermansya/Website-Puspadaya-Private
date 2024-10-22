import TableOrangTua from "@/components/Tables/TableOrangTua";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Puskesmas",
  description: "Data Puskesmas Page",
};

const Page = () => {
  return (
    <>
      <div className="container mx-auto">
        <TableOrangTua />
      </div>
    </>
  );
};

export default Page;
