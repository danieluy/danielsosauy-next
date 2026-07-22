import { promises as fs } from "fs";
import path from "path";
import Markdown from "../Markdown/Markdown";

type Props = {
  fileName: string;
  lineSlice?: [number | null, number | null];
};

export default async function MarkdownFromFile({ fileName, lineSlice }: Props) {
  let markdown = await fs.readFile(
    path.join("public", "markdown", fileName),
    "utf8"
  );

  if (lineSlice) {
    markdown = markdown
      .split("\n")
      .slice(lineSlice[0] ?? 0, lineSlice[1] ?? -1)
      .join("\n");
  }

  return <Markdown>{markdown}</Markdown>;
}
