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
        <div className="mb-4 py-2">
          <h1 className="pb-1 text-3xl font-bold text-black">
            Detail Data Ibu Hamil
          </h1>
          <h5 className="text-md font-medium">
            Informasi Detail Data Ibu Hamil
          </h5>
        </div>
        <DetailBumil id={params.id} />
      </div>
    </>
  );
};

export default Page;
