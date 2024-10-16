
import TableParameterStunting from "@/components/Tables/TableParameterStunting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monitoring | Parameter Stunting",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesParameterStunting = () => {
  return (
    <>
      <div className="container mx-auto">
        <TableParameterStunting />
      </div>
    </>
  );
};

export default TablesParameterStunting;
