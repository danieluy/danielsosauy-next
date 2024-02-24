"use client";

import { LOCALES } from "@/locales";
import { usePathname } from "next/navigation";
import { FC, ReactElement, useEffect, useState } from "react";
import classes from "./PageTitlePosition.module.css";

type Props = {
  children: ReactElement;
};

export const PageTitlePosition: FC<Props> = ({ children }) => {
  const [isInInitialPosition, setIsInInitialPosition] = useState(true);
  const pathname = usePathname();

  const isHomePage = LOCALES.map((locale) => `/${locale}`).includes(pathname);

  useEffect(() => {
    const mainElement = document.querySelector("main");

    const scrollHandler = (evt: Event) => {
      setIsInInitialPosition(mainElement?.scrollTop === 0);
    };

    mainElement?.addEventListener("scroll", scrollHandler);

    return () => mainElement?.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <span
      className={`${classes.wrapper} ${
        isInInitialPosition && isHomePage
          ? classes["first-position"]
          : classes["second-position"]
      }`}
    >
      {children}
    </span>
  );
};
