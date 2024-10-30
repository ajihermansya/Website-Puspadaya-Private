import React from "react";
import { Metadata } from "next";
import { Card } from "primereact/card";
import DetailAnggota from "@/components/DataAnggota/DetailAnggota";

export const metadata: Metadata = {
  title: "Detail Anggota",
  description: "Detail Anggota Page",
};

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="mt-0 px-2 md:px-10">
        <Card>
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            Detail Data Anggota
          </h1>
          <h5 className="text-lg text-gray-600">
            Informasi Detail Data Anggota
          </h5>
        </Card>
        <DetailAnggota id={params.id} />
      </div>
    </>
  );
};

export default Page;
