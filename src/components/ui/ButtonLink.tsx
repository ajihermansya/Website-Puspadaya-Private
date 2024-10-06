import Link from "next/link";
import React from "react";

type ButtonLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <>
      <Link
        href={href}
        className={`items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white last:inline-flex focus:outline-none ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

export default ButtonLink;
