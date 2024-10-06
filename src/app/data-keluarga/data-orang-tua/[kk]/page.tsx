import React from "react";
import { Metadata } from "next";
import DetailOrangTua from "@/components/DataKeluarga/DetailOrangTua";

export const metadata: Metadata = {
  title: "Detail Orang Tua",
  description: "Detail Orang Tua Page",
};

const Page = ({ params }: { params: { kk: string } }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-2">
          <h1 className="pb-1 text-3xl font-bold text-black">
            Detail Data Orang Tua
          </h1>
          <h5 className="text-md font-medium">
            Informasi Detail Data Orang Tua
          </h5>
        </div>
        <DetailOrangTua kk={params.kk} />
      </div>
    </>
  );
};

export default Page;
