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
        className={`items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white last:inline-flex hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

export default ButtonLink;
