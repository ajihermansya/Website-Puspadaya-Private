import React from "react";

const CardDetail = ({
  children,
  label,
}: Readonly<{
  children: React.ReactNode;
  label: string;
}>) => {
  return (
    <>
      <label className="mb-1 block text-sm text-gray-600">{label}</label>
      <div className="rounded bg-gray-100 p-2 ps-4">{children}</div>
    </>
  );
};

export default CardDetail;
