import { ImageFrame } from "@/components/ImageFrame/ImageFrame";
import MarkdownFromFile from "@/components/Markdown/MarkdownFromFile";
import { UndrawCertificate } from "@/components/svg/UndrawCertificate";
import { Locale } from "@/locales";
import { Metadata, NextPage } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: Locale;
  };
};

export const generateMetadata = async ({
  params: { locale },
}: Props): Promise<Metadata> => {
  unstable_setRequestLocale(locale);
  const _t = await getTranslations({ locale });

  return {
    title: _t("danieluy | academic"),
    description: "Sitio personal de Daniel Sosa",
  };
};

const AcademicPage: NextPage<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const _t = await getTranslations({ locale });

  return (
    <>
      <header>
        <ImageFrame
          caption={_t.rich("Certification illustration by <a>unDraw</a>", {
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
          <UndrawCertificate />
        </ImageFrame>

        <h2>{_t("Academic")}</h2>
      </header>

      <MarkdownFromFile fileName={`academic.${locale}.md`} />
    </>
  );
};

export default AcademicPage;
