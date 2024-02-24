"use client";

import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import MarkdownIt from "markdown-it";
import { FC } from "react";

/**
 * TS definitions seems to be wrong.
 * This is how it's documented and it works.
 *
 * See: https://github.com/markdown-it/markdown-it-emoji?tab=readme-ov-file#markdown-it-emoji
 */
// @ts-ignore
import { full as emoji } from "markdown-it-emoji";

import classes from "./Markdown.module.css";

import "highlight.js/styles/atom-one-dark.min.css";

hljs.registerLanguage("javascript", javascript);

const md = new MarkdownIt({
  xhtmlOut: true,
  breaks: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      console.log({ lang });
      try {
        return hljs.highlight(str, { language: lang, ignoreIllegals: true })
          .value;
      } catch (__) {}
    }

    return ""; // use external default escaping
  },
}).use(emoji);

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
