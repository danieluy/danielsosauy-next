"use client";

import { LOCALES } from "@/locales";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  exact?: boolean;
};

export const NavLink: FC<Props> = ({ children, href, exact = false }) => {
  const pathname = usePathname();

  const pathnameWithoutLocale =
    pathname.replace(new RegExp(`^\/(${LOCALES.join("|")})`), "") || "/";

  const hrefWithoutHash = href.split("#")[0];

  const isActive = exact
    ? pathnameWithoutLocale === hrefWithoutHash
    : pathnameWithoutLocale.startsWith(hrefWithoutHash);

  return (
    <Link className={isActive ? "active" : undefined} href={href}>
      {children}
    </Link>
  );
};
