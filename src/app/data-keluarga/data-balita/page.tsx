import React from "react";
import { Metadata } from "next";
import { SvgFilter } from "@/components/ui/Svg";
import TableBalita from "@/components/Tables/TableBalita";

export const metadata: Metadata = {
  title: "Data Balita",
  description: "Data Balita Page",
};

const Page = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-4 flex items-center justify-between p-2">
          <div>
            <h1 className="pb-1 text-3xl font-bold text-black">Data balita</h1>
            <h5 className="text-md font-medium">
              Pantau Data Diri Balita Disini!
            </h5>
          </div>
          <div>
            <button type="button" className="pe-2">
              <SvgFilter />
            </button>
          </div>
        </div>
        <TableBalita />
      </div>
    </>
  );
};

export default Page;
