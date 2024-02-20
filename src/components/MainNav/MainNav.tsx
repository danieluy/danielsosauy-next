"use client";

import { IntlContext } from "@/contexts/IntlContext/IntlContext";
import { Locale } from "@/locales";
import { Route } from "@/routes";
import Link from "next/link";
import { FC, useContext } from "react";
import { LocaleSwitch } from "../LocaleSwitch/LocaleSwitch";
import { NavLink } from "../NavLink/NavLink";
import classes from "./MainNav.module.css";

type Props = {
  locale: Locale;
};

export const MainNav: FC<Props> = ({ locale }) => {
  const { _t } = useContext(IntlContext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink exact href={Route.home}>
            {_t("Home")}
          </NavLink>
        </li>

        <li>
          <Link href={`${Route.home}#academic`} aria-label={_t("Academic")}>
            #{_t("Academic")}
          </Link>
        </li>

        {locale !== "en" && (
          <li>
            <LocaleSwitch locale="en">English</LocaleSwitch>
          </li>
        )}

        {locale !== "es" && (
          <li>
            <LocaleSwitch locale="es">Español</LocaleSwitch>
          </li>
        )}
      </ul>
    </nav>
  );
};
