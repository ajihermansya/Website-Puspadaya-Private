import DetailOrangTua from "@/components/DataKeluarga/DetailOrangTua";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Orang Tua",
  description: "Detail Orang Tua Page",
};

const Page = ({ params }: { params: { kk: string } }) => {
  return (
    <>
      <div className="container mx-auto">
        <DetailOrangTua kk={params.kk} />
      </div>
    </>
  );
};

export default Page;
