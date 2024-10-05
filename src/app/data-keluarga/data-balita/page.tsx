import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SelectGroupOne from "@/components/FormElements/SelectGroup/SelectGroupOne";
import Link from "next/link";
import InputGroup from "@/components/FormElements/InputGroup";

export const metadata: Metadata = {
  title: "Next.js Form Layout Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Layout page for NextAdmin Dashboard Kit",
};

const Page = () => {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

export default Page;
