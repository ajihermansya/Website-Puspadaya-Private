import React from "react";

const CardDetail = ({
  children,
  label,
  satuan,
  className,
}: Readonly<{
  children: React.ReactNode;
  label: string;
  satuan?: string;
  className?: string;
}>) => {
  return (
    <>
      <label className="mb-1 block text-sm text-gray-600">{label}</label>
      <div className={`flex w-full items-center justify-between gap-2`}>
        <div className={`w-full rounded bg-gray-100 p-2 ps-4 ${className}`}>
          {children}
        </div>
        <span>{satuan}</span>
      </div>
    </>
  );
};

export default CardDetail;
