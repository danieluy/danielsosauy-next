import React from 'react';
import styles from './Typography.module.scss';

interface Props {
  children: string | Array<string | JSX.Element>,
}

function Paragraph(props: Props) {
  const { children, ...rest } = props;

  return (
    <p
      className={styles.paragraph}
      {...rest}
    >
      {children}
    </p>
  );
}

export default Paragraph;
