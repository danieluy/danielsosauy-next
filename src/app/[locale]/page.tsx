import { Locale } from "@/locales";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { AcademicSection } from "./components/AcademicSection";
import { GreetingSection } from "./components/GreetingSection";

import classes from "./page.module.css";

type Props = {
  params: {
    locale: Locale;
  };
};

const HomePage: NextPage<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <div className={classes.spacer} />

      <GreetingSection locale={locale} />

      <AcademicSection locale={locale} />
    </>
  );
};

export default HomePage;
