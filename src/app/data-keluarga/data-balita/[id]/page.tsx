import React from "react";
import { Metadata } from "next";
import DetailBalita from "@/components/DataKeluarga/DetailBalita";

export const metadata: Metadata = {
  title: "Detail Balita",
  description: "Detail Balita Page",
};

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-4 py-2">
          <h1 className="pb-1 text-3xl font-bold text-black">
            Detail Data Balita
          </h1>
          <h5 className="text-md font-medium">Informasi Detail Data Balita</h5>
        </div>
        <DetailBalita id={params.id} />
      </div>
    </>
  );
};

export default Page;
