import { IntlContext } from "@/contexts/IntlContext/IntlContext";
import { Locale } from "@/locales";
import { Route } from "@/routes";
import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment, useContext } from "react";
import { Menu as MenuIcon } from "react-feather";
import { LocaleSwitch } from "../LocaleSwitch/LocaleSwitch";
import { NavLink } from "../NavLink/NavLink";

import classes from "./MainNavMenu.module.css";

type Props = {
  className?: string;
  locale: Locale;
};

export const MainNavMenu: FC<Props> = ({ className, locale }) => {
  const { _t } = useContext(IntlContext);

  return (
    <div className={className}>
      <Menu as="nav" className={classes.menu}>
        <div>
          <Menu.Button>
            {_t("Menu")}
            <MenuIcon aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={classes["menu-items"]}>
            <Menu.Item>
              {({ active }) => (
                <span
                  className={active ? classes["menu-item-active"] : undefined}
                >
                  <NavLink exact href={Route.home}>
                    {_t("Home")}
                  </NavLink>
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={
                    active ? classes["menu-item-active"] : classes["menu-item"]
                  }
                >
                  <NavLink href={`${Route.stuff}`} aria-label={_t("Stuff")}>
                    {_t("Stuff")}
                  </NavLink>
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <span
                  className={
                    active ? classes["menu-item-active"] : classes["menu-item"]
                  }
                >
                  {locale === "es" && (
                    <LocaleSwitch locale="en">English</LocaleSwitch>
                  )}

                  {locale === "en" && (
                    <LocaleSwitch locale="es">Español</LocaleSwitch>
                  )}
                </span>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
