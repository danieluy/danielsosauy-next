"use client";

import { LOCALES, Locale } from "@/locales";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  locale: Locale;
  href?: string;
};

export const LocaleSwitch: FC<Props> = ({ children, href, locale }) => {
  const pathname = usePathname();

  const pathnameWithoutLocale =
    pathname.replace(new RegExp(`^\/(${LOCALES.join("|")})`), "") || "/";

  return (
    <Link href={`/${locale}${href ?? pathnameWithoutLocale}`}>{children}</Link>
  );
};
