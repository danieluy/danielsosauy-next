import { useTranslations } from "next-intl";

export function extractMessages<T extends ReturnType<typeof useTranslations>>(
  t: T,
  keys: Parameters<T>[0][]
): Record<string, string> {
  return keys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: t(key),
    };
  }, {});
}
