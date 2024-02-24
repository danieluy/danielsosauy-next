import { ImageFrame } from "@/components/ImageFrame/ImageFrame";
import MarkdownFromFile from "@/components/Markdown/MarkdownFromFile";
import { Section } from "@/components/Section/Section";
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
      <header>
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

        <h2>{_t("Welcome!")}</h2>
      </header>

      <MarkdownFromFile fileName={`greeting.${locale}.md`} />
    </Section>
  );
};
