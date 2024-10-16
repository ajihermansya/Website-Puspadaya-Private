import React from "react";
import { Metadata } from "next";
import CreateOrangTua from "@/components/DataKeluarga/CreateOrangTua";

export const metadata: Metadata = {
  title: "Create Data Orang Tua",
  description: "Create Data Orang Tua Page",
};

const Page = () => {
  return (
    <>
      <div className="mt-0 py-2">
        <CreateOrangTua />
      </div>
    </>
  );
};

export default Page;
