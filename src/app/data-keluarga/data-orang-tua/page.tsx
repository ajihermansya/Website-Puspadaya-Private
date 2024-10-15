import React from "react";
import { Metadata } from "next";
import TableOrangTua from "@/components/Tables/TableOrangTua";

export const metadata: Metadata = {
  title: "Data Orang Tua",
  description: "Data Orang Tua Page",
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
