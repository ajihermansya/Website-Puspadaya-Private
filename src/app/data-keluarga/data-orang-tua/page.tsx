import React from "react";
import { Metadata } from "next";
import TableOrangTua from "@/components/Tables/TableOrangTua";

export const metadata: Metadata = {
  title: "Orang Tua",
  description: "Orang Tua Page",
};

const Page = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-4 flex items-center justify-between p-2">
          <div>
            <h1 className="pb-1 text-3xl font-bold text-black">
              Data Orang Tua
            </h1>
            <h5 className="text-md font-medium">
              Pantau Data Diri Orang Tua Disini!
            </h5>
          </div>
          <div>
            <button type="button" className="pe-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33325 16H9.99992"
                  stroke="#486284"
                  stroke-width="2"
                />
                <path d="M22 16H30.6667" stroke="#486284" stroke-width="2" />
                <path
                  d="M13.3333 15.9997C13.3333 16.7069 13.6142 17.3852 14.1143 17.8853C14.6144 18.3854 15.2927 18.6663 15.9999 18.6663C16.7072 18.6663 17.3854 18.3854 17.8855 17.8853C18.3856 17.3852 18.6666 16.7069 18.6666 15.9997C18.6666 15.2924 18.3856 14.6142 17.8855 14.1141C17.3854 13.614 16.7072 13.333 15.9999 13.333C15.2927 13.333 14.6144 13.614 14.1143 14.1141C13.6142 14.6142 13.3333 15.2924 13.3333 15.9997Z"
                  stroke="#486284"
                  stroke-width="2"
                />
                <path
                  d="M11.3333 5.33301H30.6666"
                  stroke="#486284"
                  stroke-width="2"
                />
                <path
                  d="M2.6665 5.33317C2.6665 6.04041 2.94746 6.71869 3.44755 7.21879C3.94765 7.71889 4.62593 7.99984 5.33317 7.99984C6.04041 7.99984 6.71869 7.71889 7.21879 7.21879C7.71889 6.71869 7.99984 6.04041 7.99984 5.33317C7.99984 4.62593 7.71889 3.94765 7.21879 3.44755C6.71869 2.94746 6.04041 2.6665 5.33317 2.6665C4.62593 2.6665 3.94765 2.94746 3.44755 3.44755C2.94746 3.94765 2.6665 4.62593 2.6665 5.33317Z"
                  stroke="#486284"
                  stroke-width="2"
                />
                <path
                  d="M1.33325 26.6665H20.6666"
                  stroke="#486284"
                  stroke-width="2"
                />
                <path
                  d="M24 26.6667C24 27.3739 24.281 28.0522 24.781 28.5523C25.2811 29.0524 25.9594 29.3333 26.6667 29.3333C27.3739 29.3333 28.0522 29.0524 28.5523 28.5523C29.0524 28.0522 29.3333 27.3739 29.3333 26.6667C29.3333 25.9594 29.0524 25.2811 28.5523 24.781C28.0522 24.281 27.3739 24 26.6667 24C25.9594 24 25.2811 24.281 24.781 24.781C24.281 25.2811 24 25.9594 24 26.6667Z"
                  stroke="#486284"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <TableOrangTua />
      </div>
    </>
  );
};

export default Page;
