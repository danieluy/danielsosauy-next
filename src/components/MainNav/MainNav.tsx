"use client";

import { IntlContext } from "@/contexts/IntlContext/IntlContext";
import { Locale } from "@/locales";
import { Route } from "@/routes";
import { FC, useContext } from "react";
import { LocaleSwitch } from "../LocaleSwitch/LocaleSwitch";
import { NavLink } from "../NavLink/NavLink";
import classes from "./MainNav.module.css";
import { MainNavMenu } from "./MainNavMenu";

type Props = {
  locale: Locale;
};

export const MainNav: FC<Props> = ({ locale }) => {
  const { _t } = useContext(IntlContext);

  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink exact href={Route.home}>
              {_t("Home")}
            </NavLink>
          </li>

          <li>
            <NavLink href={`${Route.stuff}`} aria-label={_t("Stuff")}>
              {_t("Stuff")}
            </NavLink>
          </li>

          {locale !== "en" && (
            <li>
              <LocaleSwitch locale="en" aria-label="Switch to English">
                <strong>Español</strong> | English
              </LocaleSwitch>
            </li>
          )}

          {locale !== "es" && (
            <li>
              <LocaleSwitch locale="es" aria-label="Cambiar a Español">
                Español | <strong>English</strong>
              </LocaleSwitch>
            </li>
          )}
        </ul>
      </nav>

      <MainNavMenu locale={locale} />
    </>
  );
};
