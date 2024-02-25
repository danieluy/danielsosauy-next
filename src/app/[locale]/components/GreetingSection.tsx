import { ImageFrame } from "@/components/ImageFrame/ImageFrame";
import MarkdownFromFile from "@/components/Markdown/MarkdownFromFile";
import { Section } from "@/components/Section/Section";
import { SectionHeader } from "@/components/Section/SectionHeader";
import { UndrawPersonalWebsite } from "@/components/svg/UndrawPersonalWebsite";
import { Locale } from "@/locales";
import { getTranslations } from "next-intl/server";
import { FC } from "react";

type Props = {
  locale: Locale;
};

export const GreetingSection: FC<Props> = async ({ locale }) => {
  const _t = await getTranslations({ locale });

  return (
    <Section>
      <SectionHeader
        id="welcome-section"
        hero={
          <ImageFrame
            caption={_t.rich("Personal website illustration by <a>unDraw</a>", {
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
            <UndrawPersonalWebsite />
          </ImageFrame>
        }
      >
        <h2>{_t("Welcome!")}</h2>
      </SectionHeader>

      <MarkdownFromFile fileName={`greeting.${locale}.md`} />
    </Section>
  );
};
