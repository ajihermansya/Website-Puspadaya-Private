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
      <div className="mx-auto w-full max-w-[1080px]">
      <Card style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.4)", marginBottom: "10px" }}>
          <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white mb-3">Kebijakan Aplikasi</h2>
          <p className="text-sm font-medium text-gray-400">Melindungi data anda, meningkatkan pengalaman anda</p>
        </Card>

        <Policy />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
