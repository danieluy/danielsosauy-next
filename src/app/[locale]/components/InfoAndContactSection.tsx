import portraitSrc from "@/assets/daniel_sosa_portrait.png";
import { ImageFrame } from "@/components/ImageFrame/ImageFrame";
import MarkdownFromFile from "@/components/Markdown/MarkdownFromFile";
import { Section } from "@/components/Section/Section";
import { SectionHeader } from "@/components/Section/SectionHeader";
import { Locale } from "@/locales";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type Props = {
  locale: Locale;
};

export const InfoAndContactSection = async ({ locale }: Props) => {
  const _t = await getTranslations({ locale });

  return (
    <Section id="info-and-contact">
      <SectionHeader
        id="info-and-contact-section"
        hero={
          <ImageFrame caption={_t("Photo of me taken in an elevator")}>
            <Image
              src={portraitSrc}
              alt=""
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </ImageFrame>
        }
      >
        <h2>{_t("Who?")}</h2>
      </SectionHeader>

      <MarkdownFromFile fileName={`personal-info.${locale}.md`} />
    </Section>
  );
};
