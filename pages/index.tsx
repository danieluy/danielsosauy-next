import { GetStaticProps } from 'next'
import Head from 'next/head'
import Article from '../components/Article/Article'
import { LANG } from '../i18n'
import styles from './index.module.css';

export default function Home({ lang }) {
  const { articles: {
    whatWhy,
    accessibility,
    design,
    performance,
    tech
  } } = lang;
  return (
    <>
      <Head>
        <title>Daniel Sosa</title>
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>
      <section className={styles.section}>
        <Article articleId="what-why" title={whatWhy.title} banner={whatWhy.banner} paragraphs={whatWhy.paragraphs} />
        <Article articleId="accessibility" title={accessibility.title} banner={accessibility.banner} paragraphs={accessibility.paragraphs} />
        <Article articleId="design" title={design.title} banner={design.banner} paragraphs={design.paragraphs} />
        <Article articleId="performance" title={performance.title} banner={performance.banner} paragraphs={performance.paragraphs} />
        <Article articleId="tech" title={tech.title} banner={tech.banner} paragraphs={tech.paragraphs} />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      lang: LANG.EN.home,
    },
  };
}
