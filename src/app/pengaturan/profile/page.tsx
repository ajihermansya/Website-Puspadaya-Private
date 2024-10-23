import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SettingBoxes from "@/components/SettingBoxes";
import { Card } from 'primereact/card';

export const metadata: Metadata = {
  title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Card style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.4)", marginBottom: "10px"}}>
          <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white mb-3">Profile</h2>
          <p className="text-sm font-medium text-gray-400">Untuk melihat informasi detail profile</p>
        </Card>

        <SettingBoxes />
      </div>
    </DefaultLayout>
  );
};

export default Settings;
