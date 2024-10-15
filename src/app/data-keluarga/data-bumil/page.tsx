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
            <TableBumil />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
