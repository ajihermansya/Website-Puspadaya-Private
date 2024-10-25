import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Policy from "@/components/Policy";
import { Card } from 'primereact/card'

export const metadata: Metadata = {
  title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto">
        <div className="mb-4">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="pb-1 text-2xl font-bold text-black">
            Kebijakan Aplikasi
            </h2>
            <p className="text-sm font-medium text-gray-500">
            Melindungi data anda, meningkatkan pengalaman anda
            </p>
          </div>
        </div>
        <Policy />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
