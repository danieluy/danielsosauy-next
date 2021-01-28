import React, { useMemo } from 'react';
import MarkdownIt from 'markdown-it';
import styles from './Markdown.module.scss';

const md = new MarkdownIt({
  xhtmlOut: true,
  breaks: true,
});

interface Props {
  markdown: string,
}

function Markdown({ markdown }: Props) {
  const html = useMemo(() => md.render(markdown), [markdown]);
  return (
    <div className={styles.root} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default Markdown;
