import React, { useMemo } from 'react';
import styles from './Article.module.css'
// Components
import Title from '../Typography/Title';
import Content from '../Content/Content';
import Markdown from '../Markdown/Markdown';

interface Banner {
  src: string,
  alt: string,
}

interface Props {
  articleId: string,
  title: string,
  banner: Banner,
  paragraphs: string[],
}

function Article({ articleId, title, banner, paragraphs }: Props) {
  const markdown = useMemo(() => paragraphs.join('\n'), paragraphs);

  return (
    <Content component="article" aria-label={title} id={articleId}>
      <img src={banner.src} alt={banner.alt} className={styles.banner} />
      <Title tabIndex={0}>{title}</Title>
      <Markdown markdown={markdown} />
    </Content>
  );
}

export default Article;
