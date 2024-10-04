"use client";
import ClickOutside from "@/components/ClickOutside";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import useLocalStorage from "@/hooks/useLocalStorage";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    menuItems: [
   
      {
        icon: (
          <img
            src="/images/menus/dashboard.svg"
            alt=""
            width={16}
            height={16}
            className="fill-current"
          />
        ),
        label: "Dashboard",
        route: "#",
        children: [
          { label: "eCommerce", route: "/" },
        ],
      },
      

      {
        icon: (
          <img
          src="/images/menus/keluarga.svg"
          alt=""
          width={16}
          height={16}
          className="fill-current"
        />
        ),
        label: "Data Keluarga",
        route: "#",

        children: [
          { 
            label: "Data Orang Tua", 
            route: "/data-keluarga/data-orang-tua" },
          { label: "Data Balita", route: "/data-keluarga/data-balita" },
        ],

      },
      
      {
        icon: (
          <img
          src="/images/menus/pengukuran.svg"
          alt=""
          width={16}
          height={16}
          className="fill-current"
        />
        ),
        label: "Pemeriksaan",
        route: "#",
        children: [
          { label: "Riwayat Pemeriksaan", route: "/tables" },
        ],
      },

      {
        icon: (
          <img
          src="/images/menus/monitoring.svg"
          alt=""
          width={16}
          height={16}
          className="fill-current"
        />
        ),
        label: "Monitoring",
        route: "#",
        children: [
          { label: "Parameter Stunting", route: "" },
          { label: "Monitoring Stunting", route: "" },
          { label: "Monitoring Gizi", route: "" },
        ],
      },

      {
        icon: (
          <img
          src="/images/menus/posyandu.svg"
          alt=""
          width={16}
          height={16}
          className="fill-current"
        />
        ),
        label: "Posyandu",
        route: "#",
        children: [
           { label: "Tambah Akun", route: "" },
           { label: "Kunjungan Balita", route: "" },
           { label: "Data Anggota", route: "" },
        ],
      },

      {
        icon: (
          <img
            src="/images/menus/pengaturan.svg"
            alt=""
            width={16}
            height={16}
            className="fill-current"
          />
        ),
        label: "Pengaturan",
        route: "#",
        children: [
          { label: "Profile", route: "/pages/settings" },
          { label: "Kebijakan Aplikasi", route: "" },
          
        ],
      },
      
    ],
  },


];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(""); 

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  const resetActiveMenu = () => {
    setPageName("defaultPageName");  
  };

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
     
      <aside
        className={`sticky left-0 top-0 z-9999 border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
          }`}
      >

        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className=" items-center justify-normal gap-2 lg:w-full xl:w-auto xl:justify-normal">
          
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <ul className="flex items-center ">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <li key={menuIndex} className="flex-1 p-2"> 
                 <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                      isOpen={openDropdown === menuItem.label.toLowerCase()}
                      setIsOpen={setOpenDropdown}
                      resetActiveMenu={resetActiveMenu}
                    />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>


      </aside>

    </ClickOutside>
  );

  
};
export default Sidebar;