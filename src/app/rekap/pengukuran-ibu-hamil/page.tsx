import React from "react";
import { Metadata } from "next";
import TableRekapBumil from "@/components/Tables/TableRekapBumil";

export const metadata: Metadata = {
  title: "Rekap Data Pengukuran Ibu Hamil",
  description: "Rekap Data Pengukuran Ibu Hamil Page",
};

const Page = () => {
  return (
    <>
      <div className="container mx-auto">
        <TableRekapBumil />
      </div>
    </>
  );
};

export default Page;
