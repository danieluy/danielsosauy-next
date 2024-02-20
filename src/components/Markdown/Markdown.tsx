"use client";
import MarkdownIt from "markdown-it";
import { FC } from "react";

import classes from "./Markdown.module.css";

const md = new MarkdownIt({
  xhtmlOut: true,
  breaks: true,
});

type Props = {
  children: string;
};

const Markdown: FC<Props> = ({ children: markdown }) => {
  return (
    <span
      className={classes.markdown}
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    />
  );
};

export default Markdown;
