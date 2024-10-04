import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col mt-2">
      {item.map((dropdownItem: any, index: number) => (
        <Link
          key={index}
          href={dropdownItem.route}
          className={`flex items-center rounded-md px-3 py-2 font-medium text-base transition duration-300 ease-in-out ${
            pathname === dropdownItem.route
              ? "bg-primary/[.07] text-primary dark:bg-white/10 dark:text-white"
              : "text-dark-4 hover:bg-gray-200 hover:text-dark dark:text-gray-500 dark:hover:bg-white/10 dark:hover:text-white"
          }`}
        >
          {dropdownItem.label}
          {dropdownItem.pro && (
            <span className="ml-1 rounded-md bg-primary px-1.5 py-px text-xs font-medium text-white">
              Pro
            </span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default SidebarDropdown;
