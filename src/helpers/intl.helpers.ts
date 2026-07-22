export function extractMessages(
  t: (key: string) => string,
  keys: string[]
): Record<string, string> {
  return keys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: t(key),
    }),
    {} as Record<string, string>
  );
}
