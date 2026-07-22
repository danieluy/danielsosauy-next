import { LOCALES } from "@/locales";
import { setRequestLocale } from "next-intl/server";
import { AcademicSection } from "./components/AcademicSection";
import { GreetingSection } from "./components/GreetingSection";

import { InfoAndContactSection } from "./components/InfoAndContactSection";
import classes from "./page.module.css";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className={classes.spacer} />

      <GreetingSection locale={locale} />

      <InfoAndContactSection locale={locale} />

      <AcademicSection locale={locale} />
    </>
  );
}
