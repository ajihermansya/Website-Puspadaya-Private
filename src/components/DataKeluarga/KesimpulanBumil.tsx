import React from "react";

const KesimpulanBumil = ({ isStunting }: { isStunting: boolean }) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-gray-600">Kesimpulan</label>
      <div
        className={`w-full rounded-md px-2 py-2 text-center font-semibold ${isStunting ? "bg-red-600 text-white" : "bg-green-600 text-white"}`}
      >
        {!isStunting && "Tidak"} Beresiko Stunting
      </div>
    </div>
  );
};

export default KesimpulanBumil;
