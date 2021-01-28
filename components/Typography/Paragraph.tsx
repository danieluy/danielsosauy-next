import React from 'react';
import styles from './Typography.module.scss';

interface Props {
  error?: boolean,
  children: string | Array<string | JSX.Element>,
  className?: string,
}

function Paragraph(props: Props) {
  const { children, error, className = '', ...rest } = props;

  return (
    <p
      className={`${styles.paragraph} ${error ? 'error' : ''} ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}

export default Paragraph;
