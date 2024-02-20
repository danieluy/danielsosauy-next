import { Accordion } from "@/components/Accordion/Acccordion";
import { ImageFrame } from "@/components/ImageFrame/ImageFrame";
import MarkdownFromFile from "@/components/Markdown/MarkdownFromFile";
import { Section } from "@/components/Section/Section";
import { UndrawCertificate } from "@/components/svg/UndrawCertificate";
import { Locale } from "@/locales";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import classes from "./components.module.css";

type Props = {
  locale: Locale;
};

export const AcademicSection: FC<Props> = async ({ locale }) => {
  const _t = await getTranslations({ locale });

  return (
    <Section id="academic">
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

      <Accordion
        className={classes.accordion}
        header={
          <MarkdownFromFile
            lineSlice={[0, 5]}
            fileName={`academic-software-analist.${locale}.md`}
          />
        }
        id="academic-software-analist-accordion"
        openLabel={_t("More")}
      >
        <MarkdownFromFile
          lineSlice={[5, null]}
          fileName={`academic-software-analist.${locale}.md`}
        />
      </Accordion>

      <Accordion
        className={classes.accordion}
        header={
          <MarkdownFromFile
            lineSlice={[0, 5]}
            fileName={`academic-web-developer.${locale}.md`}
          />
        }
        id="academic-web-developer-accordion"
        openLabel={_t("More")}
      >
        <MarkdownFromFile
          lineSlice={[5, null]}
          fileName={`academic-web-developer.${locale}.md`}
        />
      </Accordion>
    </Section>
  );
};
