import React from "react";
import { Metadata } from "next";
import DetailBalita from "@/components/DataKeluarga/DetailBalita";
import DetailBumil from "@/components/DataKeluarga/DetailBumil";

export const metadata: Metadata = {
  title: "Detail Ibu Hamil",
  description: "Detail Ibu Hamil Page",
};

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-2 rounded-lg bg-white p-6 shadow-lg">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Detail Data Ibu Hamil
          </h1>
          <h5 className="text-lg text-gray-600">
            Informasi Detail Data Ibu Hamil
          </h5>
        </div>
        <DetailBumil id={params.id} />
      </div>
    </>
  );
};

export default Page;
