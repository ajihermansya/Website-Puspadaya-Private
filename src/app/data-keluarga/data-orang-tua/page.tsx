import React from "react";
import { Metadata } from "next";
import TableOrangTua from "@/components/Tables/TableOrangTua";
import { SvgFilter } from "@/components/ui/Svg";

export const metadata: Metadata = {
  title: "Data Orang Tua",
  description: "Data Orang Tua Page",
};

const Page = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-4 flex items-center justify-between p-2">
          <div>
            <h1 className="pb-1 text-3xl font-bold text-black">
              Data Orang Tua
            </h1>
            <h5 className="text-md font-medium">
              Pantau Data Diri Orang Tua Disini!
            </h5>
          </div>
          <div>
            <button type="button" className="pe-2">
              <SvgFilter />
            </button>
          </div>
        </div>
        <TableOrangTua />
      </div>
    </>
  );
};

export default Page;
