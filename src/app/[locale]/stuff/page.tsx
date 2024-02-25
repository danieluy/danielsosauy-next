import { ImageFrame } from "@/components/ImageFrame/ImageFrame";
import MarkdownFromFile from "@/components/Markdown/MarkdownFromFile";
import { Section } from "@/components/Section/Section";
import { MyCodeSnippets } from "@/components/svg/MyCodeSnippets";
import { LOCALES, Locale } from "@/locales";
import { NextPage } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = {
  params: {
    locale: Locale;
  };
};

const StuffPage: NextPage<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const _t = await getTranslations({ locale });

  return (
    <>
      <Section>
        <header>
          <ImageFrame
            caption={_t.rich("My code snippets illustration by <a>unDraw</a>", {
              a: (label) => (
                <a
                  href="https://undraw.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ),
            })}
          >
            <MyCodeSnippets />
          </ImageFrame>

          <h2>{_t("Snippets")}</h2>
        </header>

        <MarkdownFromFile fileName={`stuff-snippets.${locale}.md`} />
      </Section>
    </>
  );
};

export default StuffPage;
