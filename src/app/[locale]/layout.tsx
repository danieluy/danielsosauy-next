import { MainLogo } from "@/components/MainLogo/MainLogo";
import { MainNav } from "@/components/MainNav/MainNav";
import { PageTitlePosition } from "@/components/PageTitlePosition/PageTitlePosition";
import { IntlProvider } from "@/contexts/IntlContext/IntlContext";
import { extractMessages } from "@/helpers/intl.helpers";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import classes from "./layout.module.css";

const inter = Montserrat({ subsets: ["latin"], weight: ["100", "400", "700"] });

export const metadata: Metadata = {
  title: "danieluy",
  description: "Sitio personal de Daniel Sosa",
};

type Props = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ children, params }: Props) {
  const { locale } = (await params) as { locale: string };
  setRequestLocale(locale);
  const _t = await getTranslations({ locale });

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <header className={classes.header}>
          <span /* needed to keep the other elements aligned to the left */ />

          <PageTitlePosition>
            <h1 aria-label="daniel sosa" className={classes.h1}>
              <MainLogo />
            </h1>
          </PageTitlePosition>

          <div>
            <IntlProvider
              messages={extractMessages(_t, [
                "Home",
                "Academic",
                "Stuff",
                "Menu",
              ])}
            >
              <MainNav locale={locale as "en" | "es"} />
            </IntlProvider>
          </div>
        </header>

        <main className={classes.main}>
          <div className={classes.container}>{children}</div>
        </main>
      </body>
    </html>
  );
}
