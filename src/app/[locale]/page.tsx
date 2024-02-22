import { Locale } from "@/locales";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { AcademicSection } from "./components/AcademicSection";
import { GreetingSection } from "./components/GreetingSection";

type Props = {
  params: {
    locale: Locale;
  };
};

const HomePage: NextPage<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <div style={{ height: `7.5rem` }} />

      <GreetingSection locale={locale} />

      <AcademicSection locale={locale} />
    </>
  );
};

export default HomePage;
