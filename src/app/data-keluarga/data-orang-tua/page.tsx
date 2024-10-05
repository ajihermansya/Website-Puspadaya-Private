import React from "react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Orang Tua",
  description: "Orang Tua Page",
};

const Page = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-2 flex justify-between p-2">
          <div>
            <h1 className="pb-1 text-3xl font-bold text-black">
              Data Orang Tua
            </h1>
            <h5 className="text-md font-medium">
              Pantau Data Diri Orang Tua Disini!
            </h5>
          </div>
          <div>
           <h1>Filter</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
