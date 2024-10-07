import React from "react";
import { Metadata } from "next";
import { SvgFilter } from "@/components/ui/Svg";
import TableBumil from "@/components/Tables/TableBumil";

export const metadata: Metadata = {
  title: "Data Ibu Hamil",
  description: "Data Ibu Hamil Page",
};

const Page = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-4 flex items-center justify-between p-2">
          <div>
            <h1 className="pb-1 text-3xl font-bold text-black">
              Data Ibu Hamil
            </h1>
            <h5 className="text-md font-medium">
              Pantau Data Diri Ibu Hamil Disini!
            </h5>
          </div>
          <div>
            <button type="button" className="pe-2">
              <SvgFilter />
            </button>
          </div>
        </div>
        <TableBumil />
      </div>
    </>
  );
};

export default Page;
