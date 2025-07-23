"use client";

import { LOCALES, Locale } from "@/locales";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

import classes from "./locale-switch.module.css";

type Props = {
  children: ReactNode;
  locale: Locale;
  href?: string;
  "aria-label"?: string;
};

export const LocaleSwitch: FC<Props> = ({
  children,
  href,
  locale,
  ...props
}) => {
  const ariaLabel = props["aria-label"];
  const pathname = usePathname();

  const pathnameWithoutLocale =
    pathname.replace(new RegExp(`^\/(${LOCALES.join("|")})`), "") || "/";

  return (
    <Link
      href={`/${locale}${href ?? pathnameWithoutLocale}`}
      className={classes.link}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};
