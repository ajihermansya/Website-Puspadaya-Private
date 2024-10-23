// "use client";
// import { IconDownload } from "@tabler/icons-react";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
// import { useState } from "react";
// import Perempuan from "./Perempuan";

// interface City {
//   name: string;
//   code: string;
// }

// const ParameterStunting = () => {
//   const [activeTab, setActiveTab] = useState("laki-laki");
//   const [selectedCity, setSelectedCity] = useState<City | null>(null);
//   const cities: City[] = [
//     { name: "Tinggi Badan (Cm)", code: "TB" },
//     { name: "Berat Badan (Cm)", code: "BB" },
//   ];

//   return (
//     <Card>
//       <div className="flex items-center justify-between">
//         <h2 className="pb-1 text-2xl font-bold text-black">
//           Parameter Stunting
//         </h2>
//         <div className="ml-auto flex gap-1">
//           <Button
//             label="Laki-Laki"
//             onClick={() => setActiveTab("laki-laki")}
//             className={`w-[186px] border-none py-2 focus:outline-none focus:ring-2 focus:ring-[#347dde]
//         ${activeTab === "laki-laki" ? "bg-[#1854a2] text-white" : "bg-[#9bc0ef] text-black"}`}
//           />
//           <Button
//             label="Perempuan"
//             onClick={() => setActiveTab("perempuan")}
//             className={`w-[186px] border-none py-2 font-normal focus:outline-none focus:ring-2 focus:ring-[#347dde]
//         ${activeTab === "perempuan" ? "bg-[#1854a2] text-white" : "bg-[#9bc0ef] text-black"}`}
//           />
//         </div>
//       </div>
// <p className="text-sm font-light text-gray-5">
//   Untuk menambahkan informasi detail data Faktor Stunting
// </p>
//     </Card>
//   );
// };

// export default ParameterStunting;

"use client";
import { Button } from "primereact/button";
import React, { useState } from "react";
import { Card } from "primereact/card";
import Perempuan from "./Perempuan";
import LakiLaki from "./LakiLaki";
import { IconDownload } from "@tabler/icons-react";

const ParameterStunting = () => {
  const [activeTab, setActiveTab] = useState("lakilaki");

  return (
    <>
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="pb-1 text-2xl font-bold text-black">
              Parameter Stunting
            </h2>
            <p className="mt-2 text-sm font-light text-gray-5">
              Untuk menambahkan informasi detail data Faktor Stunting
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex gap-2">
              <Button
                label="Laki-Laki"
                onClick={() => setActiveTab("lakilaki")}
                className={`w-[186px] border-none py-2 focus:outline-none focus:ring-2 focus:ring-[#347dde]
                ${activeTab === "lakilaki" ? "bg-[#1854a2] text-white" : "bg-[#9bc0ef] text-black"}`}
              />
              <Button
                label="Perempuan"
                onClick={() => setActiveTab("perempuan")}
                className={`w-[186px] border-none py-2 font-normal focus:outline-none focus:ring-2 focus:ring-[#347dde]
                ${activeTab === "perempuan" ? "bg-[#1854a2] text-white" : "bg-[#9bc0ef] text-black"}`}
              />
            </div>
            <Button
              label="Unduh PDF"
              onClick={() => console.log("Unduh PDF")} // Ganti dengan fungsi unduh PDF
              className="w-[186px] self-end border-none bg-gray-400 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <IconDownload />
            </Button>
          </div>
        </div>
      </Card>
      <Card className="mt-2 px-2">
        <div className="flex flex-col gap-2">
          <select className="w-full border border-white px-4 py-2 text-center text-sm focus:outline-none focus:ring-0 focus:ring-[#e4e7ec]">
            <option value="tinggi_badan">Tinggi Badan (Cm)</option>
            <option value="berat_badan">Berat Badan (Kg)</option>
          </select>
        </div>
        <div>
          {activeTab === "lakilaki" && <LakiLaki />}
          {activeTab === "perempuan" && <Perempuan />}
        </div>
      </Card>
    </>
  );
};

export default ParameterStunting;
