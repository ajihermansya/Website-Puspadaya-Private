"use client";
import { Button } from "primereact/button";
import React, { useState } from "react";
import { Card } from "primereact/card";
import DataAyah from "./DataAyah";
import DataIbu from "./DataIbu";

const DetailOrangTua = ({ kk }: { kk: string }) => {
  const [activeTab, setActiveTab] = useState("ayah");

  return (
    <>
      <div className="flex justify-center gap-1">
        <Button
          label="Data Ayah"
          onClick={() => setActiveTab("ayah")}
          className={`w-[186px] border-none py-2 focus:outline-none focus:ring-2 focus:ring-[#405672]
          ${activeTab === "ayah" ? "bg-[#486284] text-white" : "bg-white text-black"}`}
        />
        <Button
          label="Data Ibu"
          onClick={() => setActiveTab("ibu")}
          className={`w-[186px] border-none py-2 font-normal focus:outline-none focus:ring-2 focus:ring-[#405672] 
          ${activeTab === "ibu" ? "bg-[#486284] text-white" : "bg-white text-black"}`}
        />
      </div>
      <div className="mt-4 py-2">
        <Card>
          {activeTab === "ayah" && <DataAyah />}
          {activeTab === "ibu" && <DataIbu />}
        </Card>
      </div>
    </>
  );
};

export default DetailOrangTua;
