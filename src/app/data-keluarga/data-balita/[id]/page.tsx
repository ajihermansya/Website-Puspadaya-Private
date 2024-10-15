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
        <div className="mb-2 rounded-lg bg-white p-6 shadow-lg">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Detail Data Balita
          </h1>
          <h5 className="text-lg text-gray-600">
            Informasi Detail Data Balita
          </h5>
        </div>
        <DetailBalita id={params.id} />
      </div>
    </>
  );
};

export default Page;
